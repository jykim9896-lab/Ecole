import imgArtImg2Png from "figma:asset/dd2bcb69160c3bb6b4c8cc23bf2b4a46444d6a26.png";

function ArtImg2Png() {
  return (
    <div className="max-w-[319.19000244140625px] relative shrink-0 size-[319.19px]" data-name="art-img2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArtImg2Png} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <ArtImg2Png />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container />
    </div>
  );
}