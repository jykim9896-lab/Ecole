import imgVideo112Mp4 from "figma:asset/ee8dae3700483d526babaa51c609d369eb48e9e7.png";
import imgMainVideoMp4 from "figma:asset/d9a6f1d57d8d716e43d1344fe02a74ac41b18e3a.png";

export function DigitalArtSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
              fontSize: 'clamp(32px, 4vw, 42px)',
              lineHeight: '1.19',
              letterSpacing: '-0.5px'
            }}
          >
            <span style={{ fontWeight: 700, color: '#0098FF' }}>아트봉봉에꼴</span>
            <span style={{ fontWeight: 700, color: '#000' }}> 디지털 미술 교육</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="space-y-4">
            <h3 
              className="text-center text-[#141414]"
              style={{
                fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(20px, 2vw, 24px)',
                lineHeight: '1.33',
                letterSpacing: '-0.5px'
              }}
            >
              디지털 수채화
            </h3>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={imgVideo112Mp4} 
                alt="디지털 수채화 영상" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 
              className="text-center text-[#141414]"
              style={{
                fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(20px, 2vw, 24px)',
                lineHeight: '1.33',
                letterSpacing: '-0.5px'
              }}
            >
              유화드로잉
            </h3>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={imgMainVideoMp4} 
                alt="유화드로잉 영상" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-center text-[#141414]"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(17px, 2vw, 19px)',
            lineHeight: '1.42',
            letterSpacing: '-0.5px'
          }}
        >
          아트봉봉에꼴 디지털 아트 툴을 활용하여 실제로 그림이 완성되는 과정입니다.
        </p>
      </div>
    </section>
  );
}