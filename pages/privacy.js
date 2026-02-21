import Head from 'next/head'
import Link from 'next/link'

const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || '김현우'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 경기도 광주시 초월읍 무들로 28'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ours113814@gmail.com'

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - 개인정보처리방침</title>
        <meta name="description" content="OURS 개인정보처리방침" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy-en" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              EN
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">최종 업데이트: 2026년 2월 21일</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">개인정보처리방침</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS(mallog24)는 이용자의 개인정보를 최소 범위로 처리하며, 관련 법령과 보안 원칙을 준수합니다.
            </p>
          </div>

          <Section title="1. 처리하는 개인정보 항목">
            <ul className="list-disc pl-5 space-y-1">
              <li>회원 인증: 이메일, 비밀번호(이메일 로그인 시), 사용자 식별자(UID)</li>
              <li>소셜 로그인(Google, Kakao): 이메일, 이름/닉네임, 프로필 이미지, 공급자 식별자</li>
              <li>서비스 데이터: 업로드 음성 파일, 변환/교정/요약 텍스트, 저장 기록본</li>
              <li>자동 수집 정보: 접속 IP, 기기/브라우저 정보, 쿠키, 접속/오류 로그</li>
            </ul>
          </Section>

          <Section title="2. 개인정보 이용 목적">
            <ul className="list-disc pl-5 space-y-1">
              <li>로그인/회원 관리, 본인 식별, 계정 보호</li>
              <li>음성 인식, 텍스트 변환, 요약, 기록본 저장 및 조회</li>
              <li>서비스 안정화, 악성 트래픽 탐지, 장애 대응, 고객 문의 처리</li>
            </ul>
          </Section>

          <Section title="3. 수집 방법">
            <ul className="list-disc pl-5 space-y-1">
              <li>회원가입/로그인 및 서비스 이용 과정에서 이용자가 직접 입력·업로드한 정보</li>
              <li>앱/웹 사용 중 자동 생성되는 로그 및 기기 정보</li>
              <li>고객지원 문의 접수 시 제공된 정보</li>
            </ul>
          </Section>

          <Section title="4. 보유 기간 및 파기">
            <ul className="list-disc pl-5 space-y-1">
              <li>회원 정보: 회원 탈퇴 시까지(단, 법령상 보존 의무가 있는 경우 해당 기간 보관)</li>
              <li>원본 음성 파일: 처리 목적의 임시 저장 후 변환 완료 시 지체 없이 삭제</li>
              <li>변환 결과/기록본: 이용자 기능 제공 범위 내 보관, 삭제 요청 또는 계정 종료 시 파기</li>
              <li>법령상 보존 대상 정보는 관련 법령이 정한 기간 동안 별도 보관 후 파기</li>
            </ul>
          </Section>

          <Section title="5. 제3자 제공, 처리 위탁 및 국외 이전">
            <ul className="list-disc pl-5 space-y-1">
              <li>회사는 원칙적으로 이용자 동의 없이 개인정보를 제3자에게 판매/제공하지 않습니다.</li>
              <li>단, 법령상 의무 이행 또는 이용자 요청 이행에 필요한 경우 예외가 발생할 수 있습니다.</li>
              <li>처리 위탁: Supabase(인증/DB), OpenAI(Whisper STT), Google(Gemini 교정/요약)</li>
              <li>API 처리 과정에서 데이터가 국외 서버로 전송·처리될 수 있으며, 최소 범위 데이터만 전송합니다.</li>
            </ul>
          </Section>

          <Section title="6. 민감정보·아동정보 처리 원칙">
            <ul className="list-disc pl-5 space-y-1">
              <li>서비스 이용 시 주민등록번호, 계좌 비밀번호, 생체정보 등 불필요한 민감정보 업로드를 금지합니다.</li>
              <li>14세 미만 아동의 개인정보는 법정대리인 동의 없이 수집하지 않는 것을 원칙으로 합니다.</li>
            </ul>
          </Section>

          <Section title="7. 이용자 권리 및 행사 방법">
            <ul className="list-disc pl-5 space-y-1">
              <li>이용자는 본인 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</li>
              <li>요청은 문의 이메일({CONTACT_EMAIL})로 접수할 수 있으며, 합리적 기간 내 처리 결과를 안내합니다.</li>
            </ul>
          </Section>

          <Section title="8. 쿠키 및 로그 정책">
            <ul className="list-disc pl-5 space-y-1">
              <li>로그인 유지, 보안, 서비스 품질 개선을 위해 쿠키와 로그를 사용할 수 있습니다.</li>
              <li>이용자는 브라우저/기기 설정에서 쿠키 저장을 제한할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="9. 안전성 확보조치">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTTPS 전송 암호화, 인증 토큰 검증, 권한 최소화, 접근 통제</li>
              <li>요청량 제한, 보안 헤더 적용, 로그 모니터링 기반 이상 징후 탐지</li>
              <li>운영 계정 접근 통제 및 정기 점검</li>
            </ul>
          </Section>

          <Section title="10. 침해사고 대응 및 문의">
            <ul className="list-disc pl-5 space-y-1">
              <li>보안 사고 발생 시 사실 확인 후 법령에 따른 통지·조치를 진행합니다.</li>
              <li>문의 및 권리행사 창구: {CONTACT_EMAIL}</li>
            </ul>
            <p className="mt-2">상호: OURS</p>
            <p>사업자등록번호: {BUSINESS_REG_NUMBER}</p>
            <p>대표자: {REPRESENTATIVE_NAME}</p>
            <p>사업장 주소: {BUSINESS_ADDRESS}</p>
            <p className="mt-2">개인정보 보호책임자: {REPRESENTATIVE_NAME} (대표)</p>
          </Section>

          <div className="pt-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/terms" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                이용약관
              </Link>
              <Link href="/company-policy" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                회사 정책
              </Link>
              <Link href="/" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
