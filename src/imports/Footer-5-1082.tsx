function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.5px] w-full">
        <p className="leading-[27px]">COMPANY INFO</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">주식회사 아이스크림아트</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[24px] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">대표 : 박기석</p>
        <p className="mb-0">사업자등록번호 : 337-88-01568</p>
        <p>개인정보관리자 : 송영훈</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[24px] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">주소 : 경기도 성남시 분당구 대왕판교로 660,</p>
        <p>B1F 패스트파이브 121호 (유스페이스1)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[24px] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">대표번호 : 1833-2477</p>
        <p>이메일 : artbonbon@i-screamarts.com</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-0 pr-[15px] py-0 relative w-full">
          <Heading />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[16px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.5px] w-full">
        <p className="leading-[27px]">PRIVACY POLICY</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">개인정보처리방침</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">서비스이용약관</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-[10px] py-0 relative w-full">
          <Heading1 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.5px] w-full">
        <p className="leading-[27px]">FAMILY BRAND</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">아트봉봉</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">리브로아르츠</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink2 />
      <ItemLink3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-[5px] py-0 relative w-full">
          <Heading2 />
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.5px] w-full">
        <p className="leading-[27px]">SUBSIDIARY</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">시공테크</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">아이스크림에듀</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">아이스크림미디어</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">아이스크림키즈</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">시공문화</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading3 />
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col items-start pb-[32px] pt-[82px] px-0 relative shrink-0 w-full" data-name="Background">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[22px]">COPYRIGHT ⓒ 2024 아이스크림아트. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[15.5px] pt-[20.5px] px-0 relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function List3() {
  return <div className="h-[26px] shrink-0 w-full" data-name="List" />;
}

function Container18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[13.5px] pl-[10px] pr-0 pt-[18.5px] relative w-full">
          <List3 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container21 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Footer">
      <Background />
      <Background1 />
    </div>
  );
}