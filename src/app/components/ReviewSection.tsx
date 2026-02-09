import imgBackground from "figma:asset/a59ee8df075e1d58520f65d7dd982dee425fcae0.png";
import img4PointImg2Jpg from "figma:asset/725eb6b1befe8199d6f79d5f2c7a7337e2ce7832.png";
import img4PointImg4Jpg from "figma:asset/ff99b1f11dac51d278ce28bd9d93ddd0baf77392.png";
import img4PointImg6Jpg from "figma:asset/c2514f4b509549b32542e60a48969897d941bf3a.png";

const features = [
  {
    image: img4PointImg2Jpg,
    title: "체계적인 수업 과정",
    description: "아이의 발달 단계와 집중력을\n고려한 수업 과정 설계"
  },
  {
    image: img4PointImg4Jpg,
    title: "550개의 재료 탐구",
    description: "아이의 경험의 폭을 넓혀줄\n폭 넓은 미술 재료"
  },
  {
    image: img4PointImg6Jpg,
    title: "아트봉봉에꼴 전용 디지털 아트툴",
    description: "아동을 위해 개발된\n특허 받은 아동 전용 디지털 툴 사용"
  },
];

export function ReviewSection() {
  return (
    <section className="py-12 md:py-20 bg-[#0098FF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={imgBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className="text-center text-white mb-4"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 42px)',
            lineHeight: '1.19',
            letterSpacing: '-0.5px'
          }}
        >
          "아동 미술은 에꼴이 잘한대!"
        </h2>
        <p 
          className="text-center text-white/90 mb-12"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '1.4',
            letterSpacing: '-0.5px'
          }}
        >
          아트봉봉에꼴의 수업과 교수법은 아이들을 위해 맞춤 설계되었습니다.
          <br />
          우리 아이를 위한 맞춤 미술학원, 아트봉봉에꼴과 함께 하세요.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-[172px] h-[172px] rounded-full overflow-hidden mb-6 border-[5px] border-white shadow-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 
                  className="mb-2 text-[#3497fd]"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: '30px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-[#676666] whitespace-pre-line"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 400,
                    fontSize: '17px',
                    lineHeight: '25px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}