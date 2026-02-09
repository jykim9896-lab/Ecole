import imgLogo1 from "figma:asset/8e335c5e0730d56a9ec25c3b0abb7a0213f14452.png";

interface FooterProps {
  onNavigateToPrivacy: () => void;
  onNavigateToPrivacyEn?: () => void;
  onNavigateToTerms?: () => void;
}

export function Footer({ onNavigateToPrivacy, onNavigateToPrivacyEn, onNavigateToTerms }: FooterProps) {
  return (
    <footer className="bg-[#1a1c22] text-white">
      {/* Main Footer Content */}
      <div className="py-20 px-4">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* COMPANY INFO */}
            <div>
              <div className="mb-4">
                <img src={imgLogo1} alt="아트봉봉에꼴" className="h-10 mb-8" />
              </div>
              <div
                className="text-[#c3c3c3] space-y-4"
                style={{
                  fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  letterSpacing: '-0.5px'
                }}
              >
                <p>주식회사 아이스크림아트</p>
                <div>
                  <p className="mb-0">대표 : 박기석</p>
                  <p className="mb-0">사업자등록번호 : 337-88-01568</p>
                  <p>개인정보관리자 : 송영훈</p>
                </div>
                <div>
                  <p className="mb-0">주소 : 경기도 성남시 분당구 대왕판교로 660,</p>
                  <p>B1F 패스트파이브 121호 (유스페이스1)</p>
                </div>
                <div>
                  <p className="mb-0">대표번호 : 1833-2477</p>
                  <p>이메일 : artbonbon@i-screamarts.com</p>
                </div>
              </div>
            </div>

            {/* PRIVACY POLICY */}
            <div>
              <h3 
                className="text-white mb-5"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '19px',
                  lineHeight: '27px',
                  letterSpacing: '-0.5px'
                }}
              >
                PRIVACY POLICY
              </h3>
              <div
                className="space-y-[6px]"
                style={{
                  fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  letterSpacing: '-0.5px'
                }}
              >
                <button 
                  onClick={onNavigateToPrivacy}
                  className="block text-[#c3c3c3] hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '24px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  개인정보처리방침
                </button>
                <button
                  onClick={onNavigateToTerms}
                  className="block text-[#c3c3c3] hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-left"
                  style={{
                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '24px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  서비스이용약관
                </button>
              </div>
            </div>

            {/* FAMILY BRAND */}
            <div>
              <h3 
                className="text-white mb-5"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '19px',
                  lineHeight: '27px',
                  letterSpacing: '-0.5px'
                }}
              >
                FAMILY BRAND
              </h3>
              <div
                className="space-y-[6px]"
                style={{
                  fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  letterSpacing: '-0.5px'
                }}
              >
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  아트봉봉
                </a>
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  리브로아르츠
                </a>
              </div>
            </div>

            {/* SUBSIDIARY */}
            <div>
              <h3 
                className="text-white mb-5"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '19px',
                  lineHeight: '27px',
                  letterSpacing: '-0.5px'
                }}
              >
                SUBSIDIARY
              </h3>
              <div
                className="space-y-[6px]"
                style={{
                  fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px',
                  letterSpacing: '-0.5px'
                }}
              >
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  시공테크
                </a>
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  아이스크림에듀
                </a>
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  아이스크림미디어
                </a>
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  아이스크림키즈
                </a>
                <a href="#" className="block text-[#c3c3c3] hover:text-white transition-colors">
                  시공문화
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1a1c22] border-t border-[#2a2c32]">
        <div className="max-w-[1300px] mx-auto px-4 py-5">
          <p
            className="text-white text-center md:text-left"
            style={{
              fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px',
              letterSpacing: '-0.5px'
            }}
          >
            COPYRIGHT ⓒ 2024 아이스크림아트. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}