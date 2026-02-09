import imgContainer from "figma:asset/5eceefece4cbf8ffeb779692e828cbfd5ab530cd.png";
import imgBr from "figma:asset/39f9925538106a10f95c0fcea92a081776b8dfb9.png";

export function HeroSection() {
  return (
    <section className="relative bg-[#A1E5D8] overflow-hidden pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={imgContainer} 
          alt="" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <h1 
              className="mb-6 text-black leading-tight"
              style={{
                fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 43px)',
                lineHeight: '1.33',
                letterSpacing: '-0.5px'
              }}
            >
              디지털 캔버스에 그리는
              <br />
              아이의 무한한 세계,
              <br />
              아트봉봉에꼴에서만 가능합니다.
            </h1>
            <p 
              className="text-[#343434] leading-relaxed"
              style={{
                fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(18px, 2.5vw, 21px)',
                lineHeight: '1.43',
                letterSpacing: '-0.5px'
              }}
            >
              아트봉봉에꼴의 주제중심 탐구미술로
              <br />
              아이들은 창의적으로 사고하는 습관을 기를 수 있습니다.
            </p>
          </div>
          
          {/* Right: Hero Visual */}
          <div className="hidden md:flex justify-end items-center">
            <div className="relative w-full max-w-[660px] aspect-[660/502]">
              <img 
                src={imgBr} 
                alt="아트봉봉에꼴 히어로 비주얼" 
                className="w-full h-full object-contain drop-shadow-2xl animate-floating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}