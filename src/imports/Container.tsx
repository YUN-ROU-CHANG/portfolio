import imgImageEvidenceBasedUxResearch from "figma:asset/8ace2364ecabb5b3e7637beb06587a8d48d26bc1.png";

function ImageEvidenceBasedUxResearch() {
  return (
    <div className="absolute h-[190px] left-0 top-0 w-[566px]" data-name="Image (Evidence-Based UX Research)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEvidenceBasedUxResearch} />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[190px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageEvidenceBasedUxResearch />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] left-0 not-italic text-[#111] text-[20px] top-0 tracking-[-0.4492px]">Evidence-Based UX Research</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[134.344px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#666] text-[0px] top-0 tracking-[-0.1504px] w-[504px] whitespace-pre-wrap">
        <p className="mb-0 text-[14px]">
          <span className="leading-[22.4px]">Blending academic rigor with design empathy.</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic text-[#666] tracking-[-0.1504px]">{` `}</span>
        </p>
        <p className="leading-[22.4px] mb-0 text-[14px]">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic text-[#666] text-[14px] tracking-[-0.1504px]">With experience in mixed-method research, which ranging from SPSS quantitative analysis to in-depth qualitative interviews.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic text-[#666] tracking-[-0.1504px]">{`My research capabilities have been recognized with an `}</span>
            <span className="leading-[22.4px]">IEEE Best Paper Award</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic text-[#666] tracking-[-0.1504px]">{` and conference acceptances.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[220.344px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[29px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] relative rounded-[16px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}