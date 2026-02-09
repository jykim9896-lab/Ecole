import svgPaths from "./svg-qat05psyof";
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
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212222] text-[24px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[32px] whitespace-pre">Homepage Personal Information Processing Policy</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">[Ice Cream Art Co., Ltd.] (hereinafter referred to as “Company”) values ​​customers’ personal information and complies with the Act on Promotion of Information</p>
        <p className="mb-0">and Communications Network Utilization and Information Protection.</p>
        <p className="mb-0">Through its personal information handling policy, the company informs you of the purpose and method for which the personal information you provide is being</p>
        <p>used and what measures are being taken to protect your personal information.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-0 right-0 top-[207px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">If the company revises its personal information handling policy, it will notify you through website notices (or individual notices).</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[238px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">1. Personal information items collected</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[263px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company collects the following personal information for consultation applications, etc.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[288px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">Collection items: company name, name, contact information, email</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[313px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">Personal information collection method: website (consultation request), phone, email, other information</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[370px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">2. Purpose of collection and use of personal information</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[395px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company uses the collected personal information for the following purposes.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[420px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– Used for identity verification procedures when applying for and using services</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[445px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– Used for identity verification procedures when applying for and using services</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[502px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">3. Retention and use period of personal information</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[527px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">After the purpose of collecting and using personal information has been achieved, the company destroys the information without delay without exception.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[584px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">4. Procedures and methods for destroying personal information</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[609px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">In principle, the company destroys personal information without delay after the purpose of collecting and using personal information has been achieved.</p>
        <p>Destruction procedures and methods are as follows:</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[659px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Destruction procedure</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[684px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">The information you enter for membership registration, etc. is transferred to a separate DB (in the case of paper, a separate filing cabinet) after the purpose is</p>
        <p className="mb-0">achieved and is subject to a certain schedule (see retention and use period) according to information protection reasons according to internal policies and other</p>
        <p className="mb-0">related laws. It is stored for a period of time and then destroyed. Personal information transferred to a separate DB will not be used for any purpose other than that</p>
        <p>for which it is retained, unless required by law.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[784px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Destruction method</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[809px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– Personal information stored in electronic file format is deleted using technical methods that render the records unrecoverable.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[866px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">5. Provision of personal information</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[891px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">In principle, the company does not provide users’ personal information to outside parties. However, the following cases are exceptions.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[916px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– When users consent in advance</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[941px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">– When there is a request from an investigative agency in accordance with the provisions of the law or in accordance with the procedures and methods set forth</p>
        <p>in the law for investigation purposes.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1023px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">6. Entrustment of collected personal information</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1048px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">The company does not entrust your information to an external company without your consent. If such a need arises in the future, we will notify the customer of the</p>
        <p>entrusted person and the details of the entrusted work and, if necessary, obtain prior consent.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1130px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">7. Matters related to the installation, operation, and refusal of automatic personal information collection devices</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1155px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company operates ‘cookies’ that store and retrieve your information from time to time.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1180px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">A cookie is a very small text file that the server used to run the company’s website sends to your browser and is stored on your computer’s hard disk. The company</p>
        <p>uses cookies for the following purposes.</p>
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

function Container32() {
  return (
    <div className="absolute h-[25px] left-0 right-0 top-[1230px]" data-name="Container">
      <Component />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[25px] justify-center leading-[0] left-[19.38px] not-italic text-[#676666] text-[17px] top-[12px] tracking-[-0.5px] translate-y-[-50%] w-[238.27px]">
        <p className="leading-[25px] whitespace-pre-wrap">Purpose of use of cookies, etc.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1255px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">– Providing target marketing and personalized services by analyzing the access frequency and visit time of members and non-members, identifying user tastes</p>
        <p className="mb-0">and areas of interest, tracking traces, and determining the degree of participation in various events and number of visits. You have the option to install cookies. I</p>
        <p>have . Therefore, by setting options in your web browser, you can allow all cookies, confirm each time a cookie is saved, or refuse to save all cookies.</p>
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

function Container34() {
  return (
    <div className="absolute h-[25px] left-0 right-0 top-[1330px]" data-name="Container">
      <Component1 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[25px] justify-center leading-[0] left-[19.38px] not-italic text-[#676666] text-[17px] top-[12px] tracking-[-0.5px] translate-y-[-50%] w-[233.422px]">
        <p className="leading-[25px] whitespace-pre-wrap">How to refuse cookie settings</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1355px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Example: To refuse cookie settings, you can allow all cookies by selecting the options in the web browser you use, confirm each time you save a cookie, or refuse to</p>
        <p>save all cookies.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1405px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Example of setting method (for Internet Explorer)</p>
        <p>{`: Tools at the top of the web browser>Internet Options>Personal Information`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1455px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">However, if you refuse to install cookies, there may be difficulties in providing services.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1512px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">8. Civil service regarding personal information</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1537px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">In order to protect customers’ personal information and handle complaints related to personal information, the company designates relevant departments and a</p>
        <p>personal information manager as follows.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1619px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">• Personal information manager: Young-hoon Song</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1676px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">You may report any complaints related to personal information protection that arise while using the company’s services to the personal information manager or</p>
        <p>department in charge.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1726px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company will provide prompt and sufficient responses to user reports.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1751px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">If you need to report or consult about other personal information infringements, please contact the organizations below.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1776px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">1. Personal Information Infringement Reporting Center (www.1336.or.kr/118 without area code)</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1801px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">2. Information Protection Mark Certification Committee (www.eprivacy.or.kr/02-580-0533~4)</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1826px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">3. Supreme Prosecutors’ Office Internet Crime Investigation Center (http://icic.sppo.go.kr/02-3480-3600)</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1851px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[26px] whitespace-pre">4. National Police Agency Cyber ​​Terror Response Center (www.ctrc.go.kr/02-392-0330)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[1877px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
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
      <Container47 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#3497fd] content-stretch flex items-start px-[45px] py-px relative rounded-[52px] shrink-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <a className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.5px] whitespace-nowrap" href="https://www.bonbonecole.com/privacy-page/">
        <p className="cursor-pointer leading-[62px] text-[19px] whitespace-pre">View in Korean</p>
      </a>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[52px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-15px] pb-[102px] pt-[92px] px-0 right-0 top-0" data-name="Container">
      <Container2 />
      <Container48 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white h-[2187px] relative shrink-0 w-full" data-name="Background">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[92px] px-0 relative shrink-0 w-[1916px]" data-name="Container">
      <Background2 />
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

function Container54() {
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

function Container55() {
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

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[240px] items-start left-0 top-[72px] w-[307px]" data-name="Container">
      <Paragraph />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Image />
      <Container53 />
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

function Container58() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Link1 />
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading />
      <Container58 />
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <Container60 />
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

function Container62() {
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

function Container61() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <Container62 />
    </div>
  );
}

function Container51() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[312px] relative shrink-0 w-[1300px]" data-name="Container">
      <Container52 />
      <Container57 />
      <Container59 />
      <Container61 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[22px] left-0 text-[14px] text-white top-0 tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        COPYRIGHT ⓒ 2024 아이스크림아트. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

function Container63() {
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
      <Container51 />
      <Container63 />
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