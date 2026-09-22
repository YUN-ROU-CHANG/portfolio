import { useEffect } from 'react';

/**
 * Scroll-triggered reveal animation, shared by every page.
 *
 * Every <section> fades in by default, so a new page gets the same rhythm as
 * the rest of the site without remembering to tag anything. Smaller elements
 * still opt in one by one with className="reveal", and a section opts out with
 * className="no-reveal" (the hero does, because it runs its own entrance and
 * scroll-linked fade, and a second transform on top of that fights it).
 *
 * The observer adds "in" once an element enters the viewport. The matching CSS
 * lives in globals.css, which also holds the prefers-reduced-motion guard that
 * keeps content visible when the observer bails out below.
 *
 * Pass deps when a page mounts new .reveal nodes after the first render
 * (e.g. Projects.tsx re-rendering its grid on tab change).
 */
export function useRevealOnScroll(deps: unknown[] = []) {
  useEffect(() => {
    document
      .querySelectorAll('section:not(.reveal):not(.no-reveal):not(.hero)')
      .forEach((el) => el.classList.add('reveal'));

    const showAll = () =>
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'));

    // Without the observer the CSS would leave content at opacity 0 forever,
    // so anything that can't animate falls back to showing everything.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      showAll();
      return;
    }

    // threshold 0.1 對「比視窗還高的區塊」永遠不會成立：要露出自身高度的 10%，
    // 一個 10000px 的長區塊就得露出 1000px，超過視窗高度。改成 threshold 0 搭配
    // 負的下緣 rootMargin，判斷變成「頂緣進到視窗下緣往上 8% 的位置」，
    // 跟元素多高無關。
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
