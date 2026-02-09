import img1Png from "figma:asset/dd010aecb5a3e28ebf261fe416ef22a57e560a65.png";
import imgSEuImg2Png from "figma:asset/43fabf541873d6174b8684929cc600bfc715c7a9.png";
import imgM2Png from "figma:asset/74b35feb2faeb5f69dec53fc2abf3968bb167325.png";
import imgSEuImg4Png from "figma:asset/8ec77e65b80a9332ae56d82d49996852e67e8fb2.png";
import imgEcImg3Png from "figma:asset/c8a6ac1b87f34875a889ff9b5b02a05d302d7c9f.png";

const programCards = [
  {
    image: img1Png,
    alt: "전치적 접근방법"
  },
  {
    image: imgSEuImg2Png,
    alt: "탐구적 사고방법"
  },
  {
    image: imgM2Png,
    alt: "미학적 표현방법"
  },
  {
    image: imgSEuImg4Png,
    alt: "소통적 감상방법"
  }
];

const programs = [
  {
    title: "유아 미술",
    age: "5-7세",
    description: "오감을 자극하는 재미있는 미술 놀이",
    color: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    title: "초등 미술",
    age: "8-10세",
    description: "창의력과 표현력을 키우는 체계적 미술 교육",
    color: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    title: "디지털 아트",
    age: "11-13세",
    description: "디지털 도구를 활용한 현대 미술 교육",
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600"
  },
  {
    title: "포트폴리오",
    age: "중등 이상",
    description: "입시를 위한 체계적인 포트폴리오 제작",
    color: "bg-gradient-to-br from-pink-400 to-pink-600"
  },
];

export function ProgramSection() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src={imgEcImg3Png} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 42px)',
            lineHeight: '1.19',
            letterSpacing: '-0.5px',
            color: '#000'
          }}
        >
          아트봉봉에꼴이 특별한 이유
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
          아트봉봉에꼴의 수업을 통해 아이들은 폭 넓은 지식 습득, 추상적 개념의 시각화,
          <br />
          소통 능력의 향상, 도전을 통한 성취감을 느낄 수 있습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1330px] mx-auto">
          {programCards.map((card, index) => (
            <div
              key={index}
              className="flex justify-center transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="w-full h-auto max-w-[302.5px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}