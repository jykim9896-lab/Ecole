import svgPaths from "@/imports/svg-gi4o2dqa4k";

interface PrivacyPolicyKoProps {
  onNavigateHome: () => void;
  onNavigateToEn?: () => void;
}

function BulletIcon() {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_49_248)">
          <path d={svgPaths.p1404f440} fill="#3B88C3" />
          <path d={svgPaths.pbced900} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_49_248">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function PrivacyPolicyKo({ onNavigateHome, onNavigateToEn }: PrivacyPolicyKoProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-20">
        {/* 제목 */}
        <div className="border-b border-[#292929] pb-6 mb-20">
          <h1
            className="text-[24px] tracking-[-0.5px]"
            style={{
              fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
              fontWeight: 600,
              lineHeight: "32px",
            }}
          >
            홈페이지 개인정보 처리 방침
          </h1>
        </div>

        {/* 본문 */}
        <div className="space-y-6">
          {/* 서론 */}
          <div
            className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
            style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            <p className="mb-0">
              [주식회사 아이스크림아트]는 (이하 [회사]는) 고객님의 개인정보를 중요시하며, [정보통신망 이용촉진 및 정보보호]에 관한 법률을 준수하고 있습니다.
            </p>
            <p>
              회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>
          </div>

          <p
            className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
            style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
          </p>

          {/* 1. 수집하는 개인정보 항목 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              1. 수집하는 개인정보 항목
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 상담신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              수집항목 : 회사명, 이름, 연락처, 이메일
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              개인정보수집방법 :홈페이지(상담신청), 전화, 이메일, 기타 정보
            </p>
          </div>

          {/* 2. 개인정보의 수집 및 이용목적 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              2. 개인정보의 수집 및 이용목적
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              – 서비스 신청 및 이용에 따른 본인 확인 절차에 이용
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              – 서비스 신청 및 이용에 따른 본인 확인 절차에 이용
            </p>
          </div>

          {/* 3. 개인정보의 보유 및 이용 기간 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 예외 없이 해당정보를 지체없이 파기합니다.
            </p>
          </div>

          {/* 4. 개인정보의 파기 절차 및 방법 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              4. 개인정보의 파기 절차 및 방법
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당정보를 지체없이 파기합니다. 파기 절차 및 방법은 다음과 같습니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              ο 파기절차
            </p>
            <div
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <p className="mb-0">
                회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기
              </p>
              <p>간 저장된 후 파기됩니다. 별도 DB로 옮겨진개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>
            </div>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              ο 파기방법
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              – 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>
          </div>

          {/* 5. 개인정보제공 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              5. 개인정보제공
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,아래의 경우에는 예외로 합니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              – 이용자들이 사전에 동의한 경우
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              – 법령의 규정에 의거하거나, 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
            </p>
          </div>

          {/* 6. 수집한 개인정보의 위탁 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              6. 수집한 개인정보의 위탁
            </h2>
            <div
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <p className="mb-0">
                회사는 고객님의 동의없이 고객님의 정보를 외부업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무내용에 대해 고객님에게 통지하고 필요한 경우 사전동의를 받도록 하겠습니
              </p>
              <p>다.</p>
            </div>
          </div>

          {/* 7. 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              7. 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다.
            </p>
            <div
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <p className="mb-0">
                쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니
              </p>
              <p>다.</p>
            </div>

            <div className="flex items-start gap-1 mt-2 mb-2">
              <div className="mt-1">
                <BulletIcon />
              </div>
              <p
                className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
                style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                쿠키 등 사용 목적
              </p>
            </div>

            <div
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <p className="mb-0">
                – 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심 분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 귀하는 쿠키 설
              </p>
              <p>치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
            </div>

            <div className="flex items-start gap-1 mt-2 mb-2">
              <div className="mt-1">
                <BulletIcon />
              </div>
              <p
                className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
                style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
              >
                쿠키 설정 거부 방법
              </p>
            </div>

            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
            </p>

            <div
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              <p className="mb-0">설정 방법 예(인터넷익스플로어의경우)</p>
              <p>: 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보</p>
            </div>

            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
            </p>
          </div>

          {/* 8. 개인정보에 관한 민원 서비스 */}
          <div className="mt-8">
            <h2
              className="text-[17px] text-black tracking-[-0.5px] leading-[25px] mb-2"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 700 }}
            >
              8. 개인정보에 관한 민원 서비스
            </h2>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 관리 책임자를 지정하고 있습니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              • 개인정보 담당자 : 송영훈
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련 민원을 개인정보 관리 책임자 혹은 담당 부서로 신고하실 수 있습니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              회사는 이용자들의 신고 사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              1.개인정보침해 신고센터 (www.1336.or.kr/국번없이 118)
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
            </p>
            <p
              className="text-[17px] text-[#676666] tracking-[-0.5px] leading-[25px]"
              style={{ fontFamily: "'Poppins', 'Noto Sans KR', sans-serif", fontWeight: 400 }}
            >
              4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
            </p>
          </div>
        </div>

        {/* 홈으로 돌아가기 버튼 */}
        <div className="mt-12 text-center flex gap-4 justify-center">
          <button
            onClick={onNavigateHome}
            className="bg-[#0098FF] text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300"
            style={{
              fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              letterSpacing: "-0.3px",
            }}
          >
            홈으로 돌아가기
          </button>
          {onNavigateToEn && (
            <button
              onClick={onNavigateToEn}
              className="bg-white text-[#0098FF] border-2 border-[#0098FF] px-8 py-3 rounded-full hover:bg-[#0098FF] hover:text-white transition-all duration-300"
              style={{
                fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "-0.3px",
              }}
            >
              View in English
            </button>
          )}
        </div>
      </div>
    </div>
  );
}