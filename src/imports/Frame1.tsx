import imgRectangle2 from "figma:asset/766e6ffd6ebc87351826b5e16e4137e5e3d3e90c.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[24.797px] items-start left-0 px-[10px] py-[4px] rounded-[8px] top-0 w-[57.813px]" data-name="Text" style={{ backgroundImage: "linear-gradient(156.785deg, rgba(168, 113, 244, 0.08) 0%, rgba(85, 166, 246, 0.08) 100%)" }}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#a871f4] text-[12px] text-nowrap">Mobile</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[24.797px] items-start left-[63.81px] px-[10px] py-[4px] rounded-[8px] top-0 w-[56.844px]" data-name="Text" style={{ backgroundImage: "linear-gradient(156.432deg, rgba(168, 113, 244, 0.08) 0%, rgba(85, 166, 246, 0.08) 100%)" }}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#a871f4] text-[12px] text-nowrap">Health</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[24.797px] items-start left-[126.66px] px-[10px] py-[4px] rounded-[8px] top-0 w-[84.406px]" data-name="Text" style={{ backgroundImage: "linear-gradient(163.628deg, rgba(168, 113, 244, 0.08) 0%, rgba(85, 166, 246, 0.08) 100%)" }}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#a871f4] text-[12px] text-nowrap">Community</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[24.797px] left-[29px] top-[434px] w-[382px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white border border-[#cfcfcf] border-solid h-[490px] left-0 rounded-[10px] shadow-[2px_2px_15px_0px_rgba(0,0,0,0.05)] top-0 w-[440px]" />
      <Container />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[86px] leading-[22.4px] left-[29px] not-italic text-[#666] text-[14px] top-[319px] tracking-[-0.1504px] w-[382px]">Created a mindfulness and wellness platform connecting users with guided meditation and community support.Created a mindfulness and wellness platform connecting users with guided meditation.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[22px] leading-[22.4px] left-[29px] not-italic text-[#666] text-[14px] top-[245px] tracking-[-0.1504px] w-[382px]">2025 Dec · Mobile App</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] left-[29px] not-italic text-[#111] text-[20px] text-nowrap top-[276px] tracking-[-0.4492px]">Social Wellness App</p>
      <div className="absolute h-[190px] left-[25px] rounded-[10px] top-[30px] w-[390px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[307.86%] left-[0.08%] max-w-none top-[-107.28%] w-full" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}