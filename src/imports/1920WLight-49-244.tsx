import svgPaths from "./svg-gi4o2dqa4k";
import imgLogo from "figma:asset/e3fbdab16482d8ad6e984c2538cf99595846d1df.png";
import imgLogo1 from "figma:asset/8e335c5e0730d56a9ec25c3b0abb7a0213f14452.png";

function Logo() {
  return (
    <div className="absolute aspect-[215/41] bottom-1/2 left-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute aspect-[215/41] bottom-1/2 left-0 opacity-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute aspect-[215/41] bottom-1/2 left-0 opacity-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute aspect-[215/41] bottom-1/2 left-0 opacity-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Logo4() {
  return (
    <div className="absolute aspect-[213.91000366210938/41] bottom-1/2 left-0 opacity-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo1} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[41px] left-[45px] top-[42px] w-[0.01px]" data-name="Link">
      <Logo />
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[794.28px] pr-[45px] py-0 relative w-full">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1920px]" data-name="Header">
      <Background />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23px] pt-0 px-0 right-0 top-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#292929] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Poppins:SemiBold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#212222] text-[24px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 600" }}>
        <p className="leading-[32px] whitespace-pre">홈페이지 개인정보 처리 방침</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">[주식회사 아이스크림아트]는 (이하 [회사]는) 고객님의 개인정보를 중요시하며, [정보통신망 이용촉진 및 정보보호]에 관한 법률을 준수하고 있습니다.</p>
        <p>회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-0 right-0 top-[157px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[188px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">1. 수집하는 개인정보 항목</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[213px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 상담신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[238px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">수집항목 : 회사명, 이름, 연락처, 이메일</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[263px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">개인정보수집방법 :홈페이지(상담신청), 전화, 이메일, 기타 정보</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[320px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">2. 개인정보의 수집 및 이용목적</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[345px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[370px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">– 서비스 신청 및 이용에 따른 본인 확인 절차에 이용</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[395px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">– 서비스 신청 및 이용에 따른 본인 확인 절차에 이용</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[452px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">3. 개인정보의 보유 및 이용 기간</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[477px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 개인정보 수집 및 이용 목적이 달성된 후에는 예외 없이 해당정보를 지체없이 파기합니다.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[534px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">4. 개인정보의 파기 절차 및 방법</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[559px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당정보를 지체없이 파기합니다. 파기 절차 및 방법은 다음과 같습니다.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[584px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο 파기절차</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[609px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기</p>
        <p>간 저장된 후 파기됩니다. 별도 DB로 옮겨진개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[659px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο 파기방법</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[684px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">– 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[741px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">5. 개인정보제공</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[766px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,아래의 경우에는 예외로 합니다.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[791px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">– 이용자들이 사전에 동의한 경우</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[816px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">– 법령의 규정에 의거하거나, 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[873px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">6. 수집한 개인정보의 위탁</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[898px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">회사는 고객님의 동의없이 고객님의 정보를 외부업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무내용에 대해 고객님에게 통지하고 필요한 경우 사전동의를 받도록 하겠습니</p>
        <p>다.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[980px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">7. 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1005px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1030px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`쿠키란  회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니`}</p>
        <p>다.</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_49_248)" id="Component 4">
          <path d={svgPaths.p1404f440} fill="var(--fill-0, #3B88C3)" id="Vector" />
          <path d={svgPaths.pbced900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_49_248">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component25B6SvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[17px]" data-name="25b6.svg fill">
      <Component2 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex items-start left-[1.19px] max-w-[1300px] overflow-clip size-[17px] top-[2.69px]" data-name="▶">
      <Component25B6SvgFill />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[25px] left-0 right-0 top-[1080px]" data-name="Container">
      <Component />
      <div className="absolute flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] h-[25px] justify-center leading-[0] left-[19.38px] text-[#676666] text-[17px] top-[12px] tracking-[-0.5px] translate-y-[-50%] w-[118.574px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre-wrap">쿠키 등 사용 목적</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1105px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">– 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심 분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 귀하는 쿠키 설</p>
        <p>치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_49_248)" id="Component 4">
          <path d={svgPaths.p1404f440} fill="var(--fill-0, #3B88C3)" id="Vector" />
          <path d={svgPaths.pbced900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_49_248">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component25B6SvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[17px]" data-name="25b6.svg fill">
      <Component3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex items-start left-[1.19px] max-w-[1300px] overflow-clip size-[17px] top-[2.69px]" data-name="▶">
      <Component25B6SvgFill1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[25px] left-0 right-0 top-[1155px]" data-name="Container">
      <Component1 />
      <div className="absolute flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] h-[25px] justify-center leading-[0] left-[19.38px] text-[#676666] text-[17px] top-[12px] tracking-[-0.5px] translate-y-[-50%] w-[133.846px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre-wrap">쿠키 설정 거부 방법</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1180px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1205px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">설정 방법 예(인터넷익스플로어의경우)</p>
        <p>{`: 웹브라우저 상단의 도구>인터넷 옵션>개인정보`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1255px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1312px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[25px] whitespace-pre">8. 개인정보에 관한 민원 서비스</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1337px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 관리 책임자를 지정하고 있습니다.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1394px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">• 개인정보 담당자 : 송영훈</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1451px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련 민원을 개인정보 관리 책임자 혹은 담당 부서로 신고하실 수 있습니다.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1476px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">회사는 이용자들의 신고 사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1501px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1526px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">1.개인정보침해 신고센터 (www.1336.or.kr/국번없이 118)</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1551px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1576px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">3.대검찰청인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1601px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">4.경찰청사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[1626px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[92px] px-0 relative shrink-0 w-[1950px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#3497fd] content-stretch flex items-start px-[45px] py-px relative rounded-[52px] shrink-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <a className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-white tracking-[-0.5px] whitespace-nowrap" href="https://www.bonbonecole.com/privacy-page/privacy-policy-eng/" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="cursor-pointer leading-[62px] text-[19px] whitespace-pre" style={{ fontVariationSettings: "'wght' 500" }}>
          영문으로 확인하기
        </p>
      </a>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[52px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component4 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[102px] pt-[92px] px-0 relative shrink-0 w-[1935px]" data-name="Container">
      <Container1 />
      <Container47 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[208.688px]" data-name="Image (아트봉봉에꼴)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        주식회사 아이스크림아트
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        대표 : 박기석
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        사업자등록번호 : 337-88-01568
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        개인정보관리자 : 송영훈
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        주소 : 경기도 성남시 분당구 대왕판교로 660,
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        B1F 패스트파이브 121호 (유스페이스1)
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        대표번호 : 1833-2477
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        이메일 : artbonbon@i-screamarts.com
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[240px] items-start left-0 top-[72px] w-[307px]" data-name="Container">
      <Paragraph />
      <Container53 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container51() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Image />
      <Container52 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[27px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[27px] min-h-px min-w-px not-italic relative text-[19px] text-white tracking-[-0.5px] whitespace-pre-wrap">PRIVACY POLICY</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[106.406px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        개인정보처리방침
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-0 top-[30px] w-[307px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        서비스이용약관
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Link1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading />
      <Container57 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[27px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[27px] min-h-px min-w-px not-italic relative text-[19px] text-white tracking-[-0.5px] whitespace-pre-wrap">FAMILY BRAND</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아트봉봉
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        리브로아르츠
      </p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <Container59 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[27px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[27px] min-h-px min-w-px not-italic relative text-[19px] text-white tracking-[-0.5px] whitespace-pre-wrap">SUBSIDIARY</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        시공테크
      </p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림에듀
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림미디어
      </p>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림키즈
      </p>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        시공문화
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[144px] items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container60() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <Container61 />
    </div>
  );
}

function Container50() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[312px] relative shrink-0 w-[1300px]" data-name="Container">
      <Container51 />
      <Container56 />
      <Container58 />
      <Container60 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] leading-[22px] left-0 text-[14px] text-white top-0 tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        COPYRIGHT ⓒ 2024 아이스크림아트. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col h-[63px] items-start pb-0 pt-[21px] px-[308px] relative shrink-0 w-[1920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2a2c32] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col gap-[80px] items-center pb-0 pt-[80px] px-0 relative shrink-0" data-name="Footer">
      <Container50 />
      <Container62 />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <Header />
      <Background1 />
      <Footer />
    </div>
  );
}