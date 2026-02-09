function Container() {
  return (
    <div className="relative shrink-0 w-[141.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[normal]">이름*</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 w-[169.09px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[14px] py-[15px] relative rounded-[inherit] w-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-[174.09px]" data-name="Container">
      <Input />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[251.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[normal]">이메일*</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[14px] py-[15px] relative w-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-[5px] pr-0 pt-[20px] relative shrink-0 w-[284.05px]" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[141.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[normal]">연락처*</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 w-[169.09px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[14px] py-[15px] relative rounded-[inherit] w-full">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-[174.09px]" data-name="Container">
      <Input2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[251.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-0 px-0 relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[normal]">문의제목*</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[14px] py-[15px] relative w-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-[5px] pr-0 pt-[20px] relative shrink-0 w-[284.05px]" data-name="Container">
      <Input3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[430.16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[22px]">문의내용*</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f3f3] h-[186px] relative rounded-[5px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#26b48e] content-stretch flex items-start pb-[4px] pt-[5px] px-[14px] relative rounded-[52px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#26b48e] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px]">전문보기</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[2px] h-[47px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] h-[23px] justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[-0.5px] w-[196.38px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">개인정보취급 방침에 동의합니다.</p>
      </div>
      <Link />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#3497fd] h-[54px] relative rounded-[52px] shrink-0" data-name="Input">
      <div className="content-stretch flex h-full items-start overflow-clip px-[45px] py-px relative rounded-[inherit]">
        <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
          <p className="leading-[52px]">문의하기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
      <Input4 />
    </div>
  );
}

function FormForm() {
  return (
    <div className="content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full" data-name="Form → Form">
      <Container4 />
      <Container9 />
      <Textarea />
      <Container11 />
      <Container12 />
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_10px_0px_rgba(52,151,253,0.38)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[33px] pt-[17px] px-[33px] relative w-full">
          <FormForm />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] py-0 relative shrink-0 w-[554.16px]" data-name="Container">
      <OverlayBorderShadow />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[42px] text-black tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[50px]">아트봉봉에꼴은 여러분을 기다립니다.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[28px] relative shrink-0 text-[#141414] text-[20px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">전통 창의미술 교육과 디지털 미술을 할 수 있는</p>
        <p className="mb-0">국내 유일의 아동 미술학원 ‘아트봉봉에꼴’</p>
        <p>미래를 준비하는 아트봉봉에꼴과 함께 하세요.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pb-0 pt-[52px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container15 />
      <Container19 />
    </div>
  );
}

export default function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container20 />
    </div>
  );
}