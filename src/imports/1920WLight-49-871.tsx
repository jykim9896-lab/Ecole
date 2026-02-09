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
        <p className="leading-[32px] whitespace-pre">Subscribe Terms of Service</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">[Ice Cream Art Co., Ltd.] (hereinafter referred to as “Company”) values ​​customers’ personal information and complies with the Act on Promotion of Information</p>
        <p>and Communications Network Utilization and Information Protection.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[131px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Through its personal information handling policy, the company informs you of the purpose and method for which the personal information you provide is being</p>
        <p>used and what measures are being taken to protect your personal information.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[181px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">If the company revises its personal information handling policy, it will notify you through website notices (or individual notices).</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[238px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο This policy takes effect from February 1, 2024.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[295px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Personal information items collected.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[320px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company collects the following personal information for consultation applications, etc.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[377px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Collection items: company name, name, contact information, email</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[402px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Personal information collection method: website (consultation request), written form</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[459px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Purpose of collection and use of personal information</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[484px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company uses the collected personal information for the following purposes.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[541px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">ο Fulfillment of contract for service provision and provision of fee settlement content according to service provision, purchase and fee payment, delivery of goods</p>
        <p>or billing address, etc., identity verification for financial transactions, and financial services</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[591px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Membership management</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[616px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Identity verification, personal identification, prevention of fraudulent use by delinquent members and unauthorized use, handling of complaints such as</p>
        <p>complaints, delivery of notices</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[666px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Used for marketing and advertising</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[691px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">New service (product) development and specialization</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[748px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Retention and use period of personal information</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[773px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">After the purpose of collecting and using personal information has been achieved, the company destroys the information without delay without exception.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[830px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Personal information destruction procedures and methods</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[855px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">In principle, the company destroys personal information without delay after the purpose of collecting and using personal information has been achieved.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[880px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">Destruction procedures and methods are as follows.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[937px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Destruction procedure</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[962px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">The information you enter for membership registration, etc. is transferred to a separate DB (in the case of paper, a separate filing cabinet) after the purpose is</p>
        <p className="mb-0">achieved and is subject to a certain schedule (see retention and use period) according to information protection reasons according to internal policies and other</p>
        <p>related laws. It is stored for a period of time and then destroyed.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1037px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">Personal information transferred to a separate DB will not be used for any purpose other than that for which it is retained, unless required by law.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1062px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[25px] whitespace-pre">ο Method of destruction – Personal information stored in electronic file format is deleted using a technical method that renders the record unrecoverable.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1087px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– Personal information printed on paper is destroyed by shredding or incineration.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1144px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Provision of personal information In principle, the company does not provide users’ personal information to outside parties.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1169px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">However, exceptions are made in the following cases:</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1194px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">– When users consent in advance</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1219px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">– When there is a request from an investigative agency in accordance with the provisions of the law or in accordance with the procedures and methods set forth</p>
        <p>in the law for the purpose of investigation.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1269px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">If such a need arises in the future, we will notify the customer of the entrusted person and the details of the entrusted work and, if necessary, obtain prior consent.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1294px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Entrustment of collected personal information The company does not entrust your information to an external company without your consent.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1319px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">■ Rights of users and legal representatives and how to exercise them Users and legal representatives can view or modify the registered personal information of</p>
        <p className="mb-0">themselves or children under the age of 14 at any time, and may also request cancellation of membership. To view or modify the personal information of users or</p>
        <p className="mb-0">children under the age of 14, click ‘Change Personal Information’ (or ‘Edit Membership Information,’ etc.). To cancel membership (withdraw consent), click the</p>
        <p className="mb-0">“Cancel Membership” button and complete the identity verification process. After going through the process, you can directly view, edit, or withdraw your</p>
        <p className="mb-0">membership. Alternatively, if you contact the personal information manager in writing, by phone or email, we will take action without delay. If you request</p>
        <p>correction of an error in personal information, the personal information will not be used or provided until the correction is completed.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1501px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">Additionally, if incorrect personal information has already been provided to a third party, we will notify the third party of the result of the correction without delay so</p>
        <p className="mb-0">that the correction can be made. The company processes personal information that has been canceled or deleted at the request of the user or legal</p>
        <p className="mb-0">representative as specified in the “Retention and Use Period of Personal Information Collected by the Company” and processes it so that it cannot be viewed or</p>
        <p>used for any other purpose.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1633px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Matters pertaining to the installation, operation, and refusal of automatic personal information collection devices</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1658px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">We do not operate devices that collect personal information, such as cookies, that are automatically generated when using Internet services.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1715px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">■ Civil service regarding personal information</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1740px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">In order to protect customers’ personal information and handle complaints related to personal information, the company designates relevant departments and a</p>
        <p>personal information manager as follows.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1822px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">Personal information manager : Young-hoon Song</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1879px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[25px] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">You may report any personal information protection-related complaints that arise while using the company’s services to the personal information manager or</p>
        <p>responsible department.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1929px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">The company will provide prompt and sufficient responses to user reports.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1954px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">If you need to report or consult about other personal information infringements, please contact the organizations below.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[2011px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">1.Personal Information Infringement Report Center (www.1336.or.kr/118 without area code)</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[2036px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">2.Information Protection Mark Certification Committee (www.eprivacy.or.kr/02-580-0533~4)</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[2061px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">4.National Police Agency Cyber ​​Terror Response Center (www.ctrc.go.kr/02-392-0330)</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[2086px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676666] text-[17px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px] whitespace-pre">3.Supreme Prosecutors’ Office Internet Crime Investigation Center (http://icic.sppo.go.kr/02-3480-3600)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[2111px] relative shrink-0 w-full" data-name="Container">
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
      <Container48 />
      <Container49 />
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

function Link1() {
  return (
    <div className="bg-[#3497fd] content-stretch flex items-start px-[45px] py-px relative rounded-[52px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <a className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.5px] whitespace-nowrap" href="https://www.bonbonecole.com/agreement-page/">
        <p className="cursor-pointer leading-[62px] text-[19px] whitespace-pre">View in Korean</p>
      </a>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[52px] px-0 relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-15px] pb-[102px] pt-[92px] px-0 right-0 top-0" data-name="Container">
      <Container2 />
      <Container50 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white h-[2421px] relative shrink-0 w-full" data-name="Background">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[84px] px-0 relative shrink-0 w-full" data-name="Container">
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

function Container56() {
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

function Container57() {
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

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[240px] items-start left-0 top-[72px] w-[307px]" data-name="Container">
      <Paragraph />
      <Container56 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container54() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Image />
      <Container55 />
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

function Link2() {
  return (
    <div className="absolute h-[24px] left-0 top-[30px] w-[307px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        서비스이용약관
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Link2 />
    </div>
  );
}

function Container59() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading />
      <Container60 />
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

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아트봉봉
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        리브로아르츠
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container61() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <Container62 />
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

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        시공테크
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림에듀
      </p>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림미디어
      </p>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        아이스크림키즈
      </p>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] left-0 text-[#c3c3c3] text-[15px] top-px tracking-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        시공문화
      </p>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[144px] items-start relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container63() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <Container64 />
    </div>
  );
}

function Container53() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[312px] relative shrink-0 w-[1300px]" data-name="Container">
      <Container54 />
      <Container59 />
      <Container61 />
      <Container63 />
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

function Container65() {
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
      <Container53 />
      <Container65 />
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