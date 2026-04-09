import svgPaths from "./svg-h76qvpq2g9";
import imgRectangle2 from "figma:asset/7c2bb7d042e68c69a1ee33af3afbff1821f94144.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p16512100} id="Vector" stroke="var(--stroke-0, #F9761F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[351px] rounded-[12px] size-[56px] top-[31px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(249, 118, 31, 0.2) 0%, rgba(247, 110, 167, 0.2) 100%)" }}>
      <Icon />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white border border-[#cfcfcf] border-solid h-[470px] left-0 rounded-[10px] shadow-[2px_2px_15px_0px_rgba(0,0,0,0.05)] top-0 w-[440px]" />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[156px] leading-[22.4px] left-[29px] not-italic text-[#666] text-[14px] top-[283px] tracking-[-0.1504px] w-[382px]">
        <p className="mb-0">I bridge the gap between design and development with a deep understanding of front-end technologies, including React, CSS, and modern design systems.</p>
        <p>{`This technical foundation allows me to communicate effectively with engineering teams, prototype interactive solutions, and push the boundaries of what's possible in digital experiences.`}</p>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] left-[120px] not-italic text-[#111] text-[20px] text-nowrap top-[235px] tracking-[-0.4492px]">Tech-Savvy Designer</p>
      <div className="absolute h-[190px] left-[25px] rounded-[10px] top-[23px] w-[390px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2} />
      </div>
      <Container />
    </div>
  );
}