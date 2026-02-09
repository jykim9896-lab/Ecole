import img1Png from "figma:asset/dd010aecb5a3e28ebf261fe416ef22a57e560a65.png";
import imgSEuImg2Png from "figma:asset/43fabf541873d6174b8684929cc600bfc715c7a9.png";
import imgM2Png from "figma:asset/74b35feb2faeb5f69dec53fc2abf3968bb167325.png";
import imgSEuImg4Png from "figma:asset/8ec77e65b80a9332ae56d82d49996852e67e8fb2.png";

function Component1Png() {
  return (
    <div className="h-[521.42px] max-w-[302.5px] relative shrink-0 w-[302.5px]" data-name="1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1Png} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Component1Png />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SEuImg2Png />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container2 />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <M2Png />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container4 />
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SEuImg4Png />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[15px] py-0 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1330px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

export default function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container8 />
    </div>
  );
}