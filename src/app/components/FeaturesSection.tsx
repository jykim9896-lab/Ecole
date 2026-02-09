import imgArtImg11Png from "figma:asset/af758ea4361a39073da71aac7764580e9418b263.png";
import imgArtImg2Png from "figma:asset/dd2bcb69160c3bb6b4c8cc23bf2b4a46444d6a26.png";

const cards = [
  {
    title: "ARTS Classic",
    gradient: "from-[#FF6B9D] to-[#FF8FAB]",
    subtitle: "클래식 창의 미술 수업",
    features: [
      "유치부를 위한 아르츠 베이직",
      "초등부를 위한 아르츠 챌린지"
    ],
    image: imgArtImg11Png
  },
  {
    title: "ARTS Digital",
    gradient: "from-[#4E9FFF] to-[#6DB0FF]",
    subtitle: "디지털 미술 수업",
    features: [
      "아동 디지털 미술의 첫걸음",
      "아르츠 봉봉"
    ],
    image: imgArtImg2Png
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 
          className="text-center mb-12"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontSize: 'clamp(32px, 4vw, 42px)',
            lineHeight: '1.19',
            letterSpacing: '-0.5px'
          }}
        >
          <span style={{ fontWeight: 700, color: '#000' }}>아동 미술의 처음과 끝, </span>
          <span style={{ fontWeight: 700, color: '#0098FF' }}>아트봉봉에꼴</span>
        </h2>
        
        <p 
          className="text-center text-[#141414] mb-12"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(18px, 2vw, 20px)',
            lineHeight: '1.4',
            letterSpacing: '-0.5px'
          }}
        >
          클래식 창의미술 교육부터 디지털 아트까지,
          <br />
          우리 아이 미술 교육의 처음과 끝에 아트봉봉에꼴이 함께 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className={`relative rounded-3xl p-8 md:p-10 bg-gradient-to-br ${card.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className="text-white text-center mb-4"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 3.5vw, 36px)',
                    lineHeight: '1.3',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {card.title}
                </h3>
                
                <p 
                  className="text-white text-center mb-6"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 600,
                    fontSize: 'clamp(18px, 2.2vw, 22px)',
                    lineHeight: '1.4',
                    letterSpacing: '-0.4px'
                  }}
                >
                  {card.subtitle}
                </p>
                
                <div className="space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <p
                      key={featureIndex}
                      className="text-white/90 text-center"
                      style={{
                        fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.8vw, 18px)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.3px'
                      }}
                    >
                      - {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}