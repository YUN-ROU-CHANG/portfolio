import { useEffect } from 'react';

/**
 * Scroll-triggered reveal animation, shared by every page.
 *
 * Elements opt in with className="reveal"; the observer adds "in" once they
 * enter the viewport. The matching CSS lives in globals.css, which also holds
 * the prefers-reduced-motion guard that keeps content visible when the
 * observer bails out below.
 *
 * Pass deps when a page mounts new .reveal nodes after the first render
 * (e.g. Projects.tsx re-rendering its grid on tab change).
 */
export function useRevealOnScroll(deps: unknown[] = []) {
  useEffect(() => {
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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
