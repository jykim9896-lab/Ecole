import imgBr from "figma:asset/39f9925538106a10f95c0fcea92a081776b8dfb9.png";
import imgContainer from "figma:asset/5eceefece4cbf8ffeb779692e828cbfd5ab530cd.png";
import imgVideo112Mp4 from "figma:asset/ee8dae3700483d526babaa51c609d369eb48e9e7.png";
import imgMainVideoMp4 from "figma:asset/d9a6f1d57d8d716e43d1344fe02a74ac41b18e3a.png";
import imgMainMn1Png from "figma:asset/96cfcf36fa2306b4cb3567df5672bb37f9ec7df1.png";
import imgMainMn2Png from "figma:asset/17aff01f148056ff75f8c4487681376c1fbcc65c.png";
import imgMainMn3Png from "figma:asset/2b58ead200ce7f7130cd896eb0b1b3c839544e4b.png";
import imgMainMn4Png from "figma:asset/d7c27eb80317c1987f88d1043284f1938aded633.png";
import imgMainMn5Png from "figma:asset/43238c06243e4a84c0c4817be9c8deaebbf2d85c.png";
import imgMainMn6Png from "figma:asset/f008519eef592db52f4b12e283b54acee145091a.png";
import imgArtImg11Png from "figma:asset/af758ea4361a39073da71aac7764580e9418b263.png";
import imgArtImg2Png from "figma:asset/dd2bcb69160c3bb6b4c8cc23bf2b4a46444d6a26.png";
import img1Png from "figma:asset/dd010aecb5a3e28ebf261fe416ef22a57e560a65.png";
import imgSEuImg2Png from "figma:asset/43fabf541873d6174b8684929cc600bfc715c7a9.png";
import imgM2Png from "figma:asset/74b35feb2faeb5f69dec53fc2abf3968bb167325.png";
import imgSEuImg4Png from "figma:asset/8ec77e65b80a9332ae56d82d49996852e67e8fb2.png";
import imgEcImg3Png from "figma:asset/c8a6ac1b87f34875a889ff9b5b02a05d302d7c9f.png";
import imgT3150X150Jpg from "figma:asset/dfacfc1e286042d0e96db0b4ea7307b062e28ee0.png";
import imgBackground from "figma:asset/a59ee8df075e1d58520f65d7dd982dee425fcae0.png";
import img4PointImg2Jpg from "figma:asset/725eb6b1befe8199d6f79d5f2c7a7337e2ce7832.png";
import img4PointImg4Jpg from "figma:asset/ff99b1f11dac51d278ce28bd9d93ddd0baf77392.png";
import img4PointImg6Jpg from "figma:asset/c2514f4b509549b32542e60a48969897d941bf3a.png";
import imgPtLogo5Jpg from "figma:asset/98dead8557ef83ebc77c6e65ece0831c4f360c1f.png";
import imgPtLogo7Jpg from "figma:asset/bd959410b01b60355ac45ba580af20dc9c64d3b0.png";
import imgPtLogo1Jpg from "figma:asset/353221450b61ca111d99116ffb6623ef5d8efb39.png";
import imgPtLogo2Jpg from "figma:asset/a3196752aeb87014cf23b5cb65aedb33a9d50ac2.png";
import imgPtLogo9Jpg from "figma:asset/f5ede64f5819b3a26e8e561bad9e36de5106d300.png";
import imgPtLogo8Jpg from "figma:asset/674549c2634ae22203b01723c75ff72c8903d4cb.png";
import imgLogo from "figma:asset/e3fbdab16482d8ad6e984c2538cf99595846d1df.png";
import imgLogo1 from "figma:asset/8e335c5e0730d56a9ec25c3b0abb7a0213f14452.png";
import imgHttpPfKakaoComAnJfg from "figma:asset/f0816415ebc208746aa689093b043ac4cccf8072.png";
import img from "figma:asset/71ed79114711475d078c2be5389274478aed6482.png";

function Background() {
  return <div className="absolute bg-black inset-[0_0_6096.06px_0] opacity-0" data-name="Background" />;
}

function Br() {
  return (
    <div className="absolute aspect-[660/502.14] left-[45%] right-0 top-0" data-name="디지털 캔버스에 그리는 아이의 무한한 세계, <br>아트봉봉에꼴에서만 가능합니다.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBr} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[509.14px] right-[-70px] top-[-100px] w-[1200px]" data-name="Container">
      <Br />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[10px]" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[57px] relative shrink-0 text-[43px] text-black text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="mb-0">디지털 캔버스에 그리는 아이의 무한한 세계,</p>
        <p>아트봉봉에꼴에서만 가능합니다.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[22px] pt-0 px-0 right-0 top-[134px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[30px] relative shrink-0 text-[#343434] text-[21px] text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">아트봉봉에꼴의 주제중심 탐구미술로</p>
        <p>아이들은 창의적으로 사고하는 습관을 기를 수 있습니다.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[34%_0_31.39%_0] items-start px-0 py-[10px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1300px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[890px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[121.35%] left-0 max-w-none top-0 w-full" src={imgContainer} />
      </div>
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Black','Noto_Sans_KR:Black','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#0098ff] text-[0px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 900" }}>
        <p className="leading-[50px] text-[42px]">
          <span className="font-['Poppins:Black','Noto_Sans_KR:Bold','Noto_Sans_KR:Black',sans-serif] text-[#0098ff]" style={{ fontVariationSettings: "'wght' 700" }}>
            아트봉봉에꼴
          </span>
          <span className="font-['Poppins:Bold','Noto_Sans_KR:Black','Noto_Sans_KR:Bold',sans-serif] text-black" style={{ fontVariationSettings: "'wght' 900" }}>{` 디지털 미술 교육`}</span>
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[62px] pt-0 px-0 relative shrink-0 w-[1300px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-3px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#141414] text-[24px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[32px]">수채화 드로잉</p>
      </div>
    </div>
  );
}

function Video112Mp() {
  return (
    <div className="aspect-[550/421.86] mb-[-3px] relative rounded-[23px] shrink-0 w-full" data-name="video11-2.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideo112Mp4} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[3px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Video112Mp />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-3px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#141414] text-[24px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[32px]">유화 드로잉</p>
      </div>
    </div>
  );
}

function MainVideoMp() {
  return (
    <div className="aspect-[550/421.97] mb-[-3px] relative rounded-[23px] shrink-0 w-full" data-name="main_video.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMainVideoMp4} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[3px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <MainVideoMp />
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
    <div className="content-stretch flex items-start relative shrink-0 w-[1100px]" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1300px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#141414] text-[19px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[27px]">아트봉봉에꼴 디지털 아트 툴을 활용하여 실제로 그림이 완성되는 과정입니다.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[15px] py-0 relative shrink-0 w-[1100px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1300px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function MainMn1Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn1Png} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn1Png />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">아트봉봉에꼴</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function MainMn2Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn2Png} />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn2Png />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">교육철학</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function MainMn3Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn3Png} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn3Png />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">교육 프로그램</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function MainMn4Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn4Png} />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn4Png />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">파트너십</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function MainMn5Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn5.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn5Png} />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn5Png />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">교육원 찾기</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function MainMn6Png() {
  return (
    <div className="absolute aspect-[153.31/179.67] left-[10%] right-[10.01%] top-0" data-name="main-mn6.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgMainMn6Png} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[179.67px] max-w-[191.66000366210938px] relative shrink-0 w-[191.66px]" data-name="Container">
      <MainMn6Png />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] relative shrink-0 w-full" data-name="Container">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[26px]">갤러리</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-64.5px] pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Link11 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container27 />
      <Container32 />
      <Container37 />
      <Container42 />
      <Container47 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1315px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pl-[310px] pr-[325px] pt-[102px] relative shrink-0 w-[1950px]" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[50px] text-[42px]">
          <span className="font-['Poppins:Bold','Noto_Sans_KR:Bold','Noto_Sans_KR:Black',sans-serif] text-black" style={{ fontVariationSettings: "'wght' 700" }}>{`아동 미술의 처음과 끝, `}</span>
          <span className="font-['Poppins:Black','Noto_Sans_KR:Bold','Noto_Sans_KR:Black',sans-serif] text-[#0098ff]" style={{ fontVariationSettings: "'wght' 700" }}>
            아트봉봉에꼴
          </span>
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[28px] relative shrink-0 text-[#141414] text-[20px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">클래식 창의미술 교육부터 디지털 아트까지,</p>
        <p>우리 아이 미술 교육의 처음과 끝에 아트봉봉에꼴이 함께 합니다.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pb-[122px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[92px] px-0 relative shrink-0 w-[1950px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function ArtImg11Png() {
  return (
    <div className="max-w-[319.19000244140625px] relative shrink-0 size-[319.19px]" data-name="art-img1-1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArtImg11Png} />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <ArtImg11Png />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-50px] top-[-20px] w-[319.19px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-px min-h-px relative shrink-0 w-[199.5px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f99c95] text-[24px] text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[60px]">ARTS Classic</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white bottom-[178px] content-stretch flex flex-col h-[64px] items-start left-[4.46%] p-[2px] right-[4.46%] rounded-[10px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#f99c95] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container64 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[33px] leading-[0] left-[-20px] right-[20px] text-black text-right top-[86px] tracking-[-0.5px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] h-[29px] justify-center right-[195.77px] text-[21px] top-[17.5px] translate-y-[-50%] w-[132.307px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[29px]">{`아트봉봉에꼴의 `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] h-[33px] justify-center right-[-13.08px] text-[25px] top-[16.5px] translate-y-[-50%] w-[212.635px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[33px]">클래식 창의미술 수업</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex items-end justify-end leading-[0] left-[-20px] pb-px pl-0 pr-[0.01px] pt-0 right-[20px] text-black text-nowrap text-right top-[150.5px] tracking-[-0.5px]" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center mr-[-0.01px] relative shrink-0 text-[19px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[27px] text-nowrap">{`유치부를 위한 `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center mr-[-0.01px] relative shrink-0 text-[23px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[31px] text-nowrap">아르츠 베이직</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex items-end justify-end leading-[0] left-[-20px] pb-px pl-0 pr-[0.01px] pt-0 right-[20px] text-black text-nowrap text-right top-[181.5px] tracking-[-0.5px]" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center mr-[-0.01px] relative shrink-0 text-[19px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[27px] text-nowrap">{`초등부를 위한 `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center mr-[-0.01px] relative shrink-0 text-[23px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[31px] text-nowrap">아르츠 챌린지</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[213px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] py-0 relative shrink-0 w-[399px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f99c95] content-stretch flex h-[280px] items-start relative rounded-[22px] shrink-0 w-[598.5px]" data-name="Background">
      <Container63 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[33.25px] py-0 relative w-full">
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container67 />
    </div>
  );
}

function ArtImg2Png() {
  return (
    <div className="max-w-[319.19000244140625px] relative shrink-0 size-[319.19px]" data-name="art-img2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArtImg2Png} />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <ArtImg2Png />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-50px] top-[-20px] w-[319.19px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-px min-h-px relative shrink-0 w-[199.5px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3497fd] text-[24px] text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[60px]">ARTS Digital</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white bottom-[174px] content-stretch flex flex-col h-[64px] items-start left-[4.46%] p-[2px] right-[4.46%] rounded-[10px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container72 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[33px] leading-[0] left-[-20px] right-[20px] text-right text-white top-[86px] tracking-[-0.5px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] h-[29px] justify-center right-[153.56px] text-[21px] top-[17.5px] translate-y-[-50%] w-[132.307px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[29px]">{`아트봉봉에꼴의 `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] h-[33px] justify-center right-[-10.34px] text-[25px] top-[16.5px] translate-y-[-50%] w-[167.699px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[33px]">디지털 미술 수업</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex flex-col items-end leading-[0] left-[-20px] pb-[0.5px] pt-0 px-0 right-[20px] text-nowrap text-right text-white top-[151px] tracking-[-0.5px]" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center mb-[-0.5px] relative shrink-0 text-[19px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[27px] text-nowrap">아동 디지털 미술의 첫걸음</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center mb-[-0.5px] relative shrink-0 text-[23px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[31px] text-nowrap">아르츠 봉봉</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[209px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] py-0 relative shrink-0 w-[399px]" data-name="Container">
      <Container73 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#3497fd] content-stretch flex h-[280px] items-start relative rounded-[22px] shrink-0 w-[598.5px]" data-name="Background">
      <Container71 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[33.25px] py-0 relative w-full">
          <Background2 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container68 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1315px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[310px] pr-[325px] py-0 relative shrink-0 w-[1950px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return <div className="h-[149px] shrink-0 w-[1950px]" data-name="Container" />;
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[42px] text-black text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[50px]">아트봉봉에꼴이 특별한 이유</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[28px] relative shrink-0 text-[#141414] text-[20px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">아트봉봉에꼴의 수업을 통해 아이들은 폭 넓은 지식 습득, 추상적 개념의 시각화,</p>
        <p>소통 능력의 향상, 도전을 통한 성취감을 느낄 수 있습니다.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pb-[82px] pt-[122px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container83 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eee] content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Background">
      <Container84 />
    </div>
  );
}

function Component1Png() {
  return (
    <div className="h-[521.42px] max-w-[302.5px] relative shrink-0 w-[302.5px]" data-name="1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1Png} />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Component1Png />
    </div>
  );
}

function Container86() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function SEuImg2Png() {
  return (
    <div className="h-[521.42px] max-w-[302.5px] relative shrink-0 w-[302.5px]" data-name="s-eu-img2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSEuImg2Png} />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SEuImg2Png />
    </div>
  );
}

function Container88() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function M2Png() {
  return (
    <div className="h-[521.42px] max-w-[302.5px] relative shrink-0 w-[302.5px]" data-name="m2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgM2Png} />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <M2Png />
    </div>
  );
}

function Container90() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function SEuImg4Png() {
  return (
    <div className="h-[521.42px] max-w-[302.5px] relative shrink-0 w-[302.5px]" data-name="s-eu-img4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSEuImg4Png} />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SEuImg4Png />
    </div>
  );
}

function Container92() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container86 />
      <Container88 />
      <Container90 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1315px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eee] content-stretch flex flex-col items-center pl-[310px] pr-[325px] py-0 relative shrink-0 w-[1950px]" data-name="Background">
      <Container94 />
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[#3497fd] content-stretch flex items-start px-[45px] py-px relative rounded-[52px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[19px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[62px]">교육 철학 및 효과</p>
      </div>
    </div>
  );
}

function EcImg3Png() {
  return (
    <div className="h-[224px] max-w-[1300px] relative shrink-0 w-[650px]" data-name="ec-img3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEcImg3Png} />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="Container">
      <EcImg3Png />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-center pb-0 pt-[102px] px-0 relative shrink-0 w-full" data-name="Container">
      <Link12 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%] w-[1300px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eee] h-[452px] relative shrink-0 w-[1950px]" data-name="Background">
      <Container97 />
    </div>
  );
}

function T3150X150Jpg() {
  return (
    <div className="max-w-[1300px] relative shrink-0 size-[150px]" data-name="t3-150x150.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgT3150X150Jpg} />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[150px] shrink-0" data-name="Container">
      <T3150X150Jpg />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[334.75px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[27px] relative shrink-0 text-[19px] text-black text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">우산을 쓰면 젖지 않는 이유가 방수 때문이래요!</p>
        <p className="mb-0">비 오는 날 귀여운 동물들이 젖지 않도록</p>
        <p>우산을 씌어주고 싶어요!</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[19px] text-black text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[27px]">- 6세 여아 -</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-center left-[351px] top-[22px] w-[25.34px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[80px] text-center text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[27px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-center left-[923.64px] top-[22px] w-[25.34px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[80px] text-center text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[27px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container104 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Item">
      <Container105 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-300%] pl-[3900px] pr-[13000px] py-0 right-[-1000%] top-0" data-name="List">
      <Item />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[312px] max-h-[2000px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[9px]" data-name="Item">
      <div className="basis-0 bg-[#e8e8e8] grow min-h-px min-w-px rounded-[4.5px] self-stretch shrink-0" data-name="Link" />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[9px]" data-name="Item">
      <div className="basis-0 bg-white grow min-h-px min-w-px rounded-[4.5px] self-stretch shrink-0" data-name="Link" />
    </div>
  );
}

function OrderedList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Ordered List">
      <div className="size-full">
        <div className="content-stretch flex gap-[10px] items-start pb-[17px] pt-0 px-[607.5px] relative w-full">
          <Item1 />
          <Item1 />
          <Item2 />
          <Item1 />
          <Item1 />
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <OrderedList />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container107 />
    </div>
  );
}

function Background6() {
  return (
    <div className="content-stretch flex flex-col h-[720px] items-center justify-center relative shrink-0 w-[1950px]" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#24bef0] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[152.34%] left-0 max-w-none top-[-39.26%] w-full" src={imgBackground} />
        </div>
      </div>
      <Container108 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[42px] text-black text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[50px]">“아동 미술은 에꼴이 잘한대!”</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[28px] relative shrink-0 text-[#141414] text-[20px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">아트봉봉에꼴의 수업과 교수법은 아이들을 위해 맞춤 설계되었습니다.</p>
        <p>우리 아이를 위한 맞춤 미술학원, 아트봉봉에꼴과 함께 하세요.</p>
      </div>
    </div>
  );
}

function Component4PointImg2Jpg() {
  return (
    <div className="max-w-[425.3299865722656px] pointer-events-none relative rounded-[172px] shrink-0 size-[172px]" data-name="4point-img2.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[172px]">
        <img alt="" className="absolute left-[0.58%] max-w-none size-[98.84%] top-[0.58%]" src={img4PointImg2Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 rounded-[172px]" />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <Component4PointImg2Jpg />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[190px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3497fd] text-[22px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[30px]">체계적인 수업 과정</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[230px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#666] text-[17px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">아이의 발달 단계와 집중력을</p>
        <p>고려한 수업 과정 설계</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Component4PointImg4Jpg() {
  return (
    <div className="max-w-[425.3299865722656px] pointer-events-none relative rounded-[172px] shrink-0 size-[172px]" data-name="4point-img4.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[172px]">
        <img alt="" className="absolute left-[0.58%] max-w-none size-[98.84%] top-[0.58%]" src={img4PointImg4Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 rounded-[172px]" />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <Component4PointImg4Jpg />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[190px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3497fd] text-[22px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[30px]">550개의 재료 탐구</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[230px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#666] text-[17px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">아이의 경험의 폭을 넓혀줄</p>
        <p>폭 넓은 미술 재료</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container117 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container119 />
        </div>
      </div>
    </div>
  );
}

function Component4PointImg6Jpg() {
  return (
    <div className="max-w-[425.3299865722656px] pointer-events-none relative rounded-[172px] shrink-0 size-[172px]" data-name="4point-img6.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[172px]">
        <img alt="" className="absolute left-[0.58%] max-w-none size-[98.84%] top-[0.58%]" src={img4PointImg6Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 rounded-[172px]" />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <Component4PointImg6Jpg />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[190px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3497fd] text-[22px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[30px]">아트봉봉에꼴 전용 디지털 아트툴</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[230px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[25px] relative shrink-0 text-[#666] text-[17px] text-center text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">아동을 위해 개발된</p>
        <p>특허 받은 아동 전용 디지털 툴 사용</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="Container">
      <Container121 />
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container125() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[68px] px-0 relative shrink-0 w-[1330px]" data-name="Container">
      <Container115 />
      <Container120 />
      <Container125 />
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-[#3497fd] content-stretch flex items-start px-[45px] py-px relative rounded-[52px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <div className="flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[19px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[62px]">수업 문의</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link13 />
    </div>
  );
}

function Container128() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container127 />
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[443.31px] pr-[443.37px] pt-[78px] relative shrink-0 w-[1330px]" data-name="Container">
      <Container128 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center px-0 py-[122px] relative shrink-0 w-full" data-name="Container">
      <Container109 />
      <Container110 />
      <Container126 />
      <Container129 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container130 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eee] content-stretch flex flex-col items-center relative shrink-0 w-[1950px]" data-name="Background">
      <Container131 />
    </div>
  );
}

function Container132() {
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
        <Container132 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-[174.09px]" data-name="Container">
      <Input />
    </div>
  );
}

function Container134() {
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
          <Container134 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-[5px] pr-0 pt-[20px] relative shrink-0 w-[284.05px]" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container133 />
      <Container135 />
    </div>
  );
}

function Container137() {
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
        <Container137 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-[174.09px]" data-name="Container">
      <Input2 />
    </div>
  );
}

function Container139() {
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
          <Container139 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pl-[5px] pr-0 pt-[20px] relative shrink-0 w-[284.05px]" data-name="Container">
      <Input3 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container138 />
      <Container140 />
    </div>
  );
}

function Container142() {
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
          <Container142 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-[#26b48e] content-stretch flex items-start pb-[4px] pt-[5px] px-[14px] relative rounded-[52px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#26b48e] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px]">전문보기</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex gap-[2px] h-[47px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-white relative rounded-[2.5px] shrink-0 size-[13px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] h-[23px] justify-center leading-[0] relative shrink-0 text-[15px] text-black tracking-[-0.5px] w-[196.38px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[23px]">개인정보취급 방침에 동의합니다.</p>
      </div>
      <Link14 />
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

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
      <Input4 />
    </div>
  );
}

function FormForm() {
  return (
    <div className="content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full" data-name="Form → Form">
      <Container136 />
      <Container141 />
      <Textarea />
      <Container143 />
      <Container144 />
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

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] py-0 relative shrink-0 w-[554.16px]" data-name="Container">
      <OverlayBorderShadow />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container145 />
    </div>
  );
}

function Container147() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container146 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[42px] text-black tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[50px]">아트봉봉에꼴은 여러분을 기다립니다.</p>
      </div>
    </div>
  );
}

function Container149() {
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

function Container150() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pb-0 pt-[52px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container151() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container150 />
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container147 />
      <Container151 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1315px]" data-name="Container">
      <Container152 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pl-[310px] pr-[325px] pt-[122px] relative shrink-0 w-[1950px]" data-name="Container">
      <Container153 />
    </div>
  );
}

function PtLogo5Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo5.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo5Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo5Jpg />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link15 />
    </div>
  );
}

function PtLogo7Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo7.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo7Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo7Jpg />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link16 />
    </div>
  );
}

function PtLogo1Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo1.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo1Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo1Jpg />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link17 />
    </div>
  );
}

function PtLogo2Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo2.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo2Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo2Jpg />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link18 />
    </div>
  );
}

function PtLogo9Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo9.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo9Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo9Jpg />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link19 />
    </div>
  );
}

function PtLogo8Jpg() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo8.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo8Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo8Jpg />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link20 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex h-[95px] items-start relative shrink-0" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function PtLogo5Jpg1() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo5.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo5Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo5Jpg1 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link21 />
    </div>
  );
}

function PtLogo7Jpg1() {
  return (
    <div className="h-[88px] max-w-[263px] pointer-events-none relative rounded-[7px] shrink-0 w-[239px]" data-name="pt-logo7.jpg">
      <div className="absolute inset-0 overflow-hidden rounded-[7px]">
        <img alt="" className="absolute h-[97.73%] left-[0.42%] max-w-none top-[1.14%] w-[99.16%]" src={imgPtLogo7Jpg} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 rounded-[7px]" />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <PtLogo7Jpg1 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col h-full items-center pl-[12px] pr-[10px] py-0 relative shrink-0 w-[261px]" data-name="Item">
      <Link22 />
    </div>
  );
}

function Item11() {
  return <div className="h-full shrink-0 w-[261px]" data-name="Item" />;
}

function List2() {
  return (
    <div className="content-stretch flex h-[95px] items-start relative shrink-0" data-name="List">
      <Item9 />
      <Item10 />
      {[...Array(4).keys()].map((_, i) => (
        <Item11 key={i} />
      ))}
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex h-[144px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Container">
      <List1 />
      <List2 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[102px] pt-[112px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container18 />
      <Container22 />
      <Container55 />
      <Container60 />
      <Container79 />
      <Container80 />
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
      <Container154 />
      <Container155 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container156 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Background8 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start min-h-[725px] relative shrink-0 w-full" data-name="Background">
      <Container157 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-white tracking-[-0.5px] w-full">
        <p className="leading-[27px]">COMPANY INFO</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">주식회사 아이스크림아트</p>
      </div>
    </div>
  );
}

function Container159() {
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

function Container160() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[24px] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">주소 : 경기도 성남시 분당구 대왕판교로 660,</p>
        <p>B1F 패스트파이브 121호 (유스페이스1)</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[24px] relative shrink-0 text-[#c3c3c3] text-[15px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">대표번호 : 1833-2477</p>
        <p>이메일 : artbonbon@i-screamarts.com</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container158 />
      <Container159 />
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container163() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-0 pr-[15px] py-0 relative w-full">
          <Heading1 />
          <Container162 />
        </div>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[16px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container163 />
    </div>
  );
}

function Heading2() {
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

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
    </div>
  );
}

function Container165() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-[10px] py-0 relative w-full">
          <Heading2 />
          <List3 />
        </div>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container165 />
    </div>
  );
}

function Heading3() {
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

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink2 />
      <ItemLink3 />
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-[5px] py-0 relative w-full">
          <Heading3 />
          <List4 />
        </div>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container167 />
    </div>
  );
}

function Heading4() {
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

function List5() {
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

function Container169() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading4 />
          <List5 />
        </div>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container169 />
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Container166 />
      <Container168 />
      <Container170 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container171 />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container172 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col items-start pb-[32px] pt-[82px] px-0 relative shrink-0 w-full" data-name="Background">
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[22px]">COPYRIGHT ⓒ 2024 아이스크림아트. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[15.5px] pt-[20.5px] px-0 relative shrink-0" data-name="Container">
      <Container174 />
    </div>
  );
}

function Link23() {
  return (
    <div className="bg-white content-stretch flex items-start justify-end px-[9px] py-[2px] relative rounded-[4px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c22] text-[0px] text-nowrap text-right tracking-[-0.5px]">
        <p className="leading-[22px] text-[14px]">B2B QR</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Item">
      <Link23 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="List">
      <Item12 />
    </div>
  );
}

function Container176() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[13.5px] pl-[10px] pr-0 pt-[18.5px] relative w-full">
          <List6 />
        </div>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1300px]" data-name="Container">
      <Container177 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container178 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#1a1c22] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container179 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Background10 />
      <Background11 />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Background9 />
      <Footer />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container180 />
    </div>
  );
}

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
    <div className="absolute aspect-[213.91/41] bottom-1/2 left-0 opacity-0 top-[-50%]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo1} />
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[41px] left-[45px] top-[42px] w-[0.01px]" data-name="Link">
      <Logo />
      {[...Array(3).keys()].map((_, i) => (
        <Logo1 key={i} />
      ))}
      <Logo2 />
    </div>
  );
}

function NavList() {
  return <div className="h-[86px] shrink-0 w-[923.72px]" data-name="Nav → List" />;
}

function Link25() {
  return (
    <div className="bg-[#3497fd] h-[45px] relative rounded-[52px] shrink-0 w-[140px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#3497fd] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] h-[43px] justify-center leading-[0] left-[calc(50%-8.78px)] text-[15px] text-center text-white top-[22.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[57.227px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[43px]">창업 상담</p>
      </div>
      <div className="absolute bg-[#26b48e] left-[calc(50%+32.38px)] rounded-[20px] size-[20px] top-[12.5px] translate-x-[-50%]" data-name="Background" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+25.8px)] not-italic text-[20px] text-center text-white top-[25px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[12.287px]">
        <p className="leading-[20px]">$</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[19px] px-0 relative shrink-0 w-full" data-name="Container">
      <Link25 />
    </div>
  );
}

function Container182() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[17px] pr-0 py-0 relative w-full">
          <Container181 />
        </div>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Container182 />
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[157px]" data-name="Container">
      <Container183 />
    </div>
  );
}

function Container185() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[794.28px] pr-[45px] py-0 relative w-full">
          <Link24 />
          <NavList />
          <Container184 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1920px]" data-name="Header">
      <Container185 />
    </div>
  );
}

function HttpPfKakaoComAnJfg() {
  return (
    <div className="max-w-[50px] relative rounded-[50px] shrink-0 size-[50px]" data-name="http://pf.kakao.com/_AnJFG">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHttpPfKakaoComAnJfg} />
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex items-start pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <HttpPfKakaoComAnJfg />
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link26 />
    </div>
  );
}

function Component() {
  return (
    <div className="max-w-[50px] relative rounded-[50px] shrink-0 size-[50px]" data-name="#">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="content-stretch flex items-start pb-[6px] pt-0 px-0 relative shrink-0" data-name="Link">
      <Component />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link27 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute bottom-[6178.06px] content-stretch flex flex-col gap-[2px] items-start pb-[2px] pt-0 px-0 right-[10px] w-[50px]" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <Header />
      <Container188 />
      <Background />
      <Background12 />
    </div>
  );
}