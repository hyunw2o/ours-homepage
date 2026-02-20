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
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Last updated: February 19, 2026</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">개인정보처리방침</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS(mallog24)는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
            </p>
          </div>

          <Section title="1. 처리하는 개인정보 항목">
            <p>서비스 제공을 위해 아래 정보를 처리할 수 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>회원가입/로그인: 이메일, 비밀번호(이메일 로그인 시), 사용자 식별자(UID)</li>
              <li>소셜 로그인(Google, Kakao): 이메일, 닉네임(또는 이름), 프로필 이미지, 공급자 식별자</li>
              <li>서비스 이용 시: 업로드한 음성 파일, 변환 결과 텍스트, 저장한 기록본</li>
              <li>자동 수집: 접속 로그, IP, 기기/브라우저 정보, 쿠키, 오류 로그</li>
            </ul>
          </Section>

          <Section title="2. 개인정보 이용 목적">
            <ul className="list-disc pl-5 space-y-1">
              <li>로그인/회원 관리 및 사용자 식별</li>
              <li>음성 인식, 텍스트 변환, 요약, 기록본 저장 등 서비스 제공</li>
              <li>장애 대응, 보안 모니터링, 고객 문의 대응</li>
            </ul>
          </Section>

          <Section title="3. 보유 기간 및 파기">
            <ul className="list-disc pl-5 space-y-1">
              <li>회원 정보: 회원 탈퇴 시까지(단, 법령상 보존 의무가 있는 경우 해당 기간 보관)</li>
              <li>원본 음성 파일: 변환 처리 목적의 임시 저장소에서 처리 완료 후 지체 없이 삭제(영구 보관하지 않음)</li>
              <li>변환 결과 텍스트/기록본: 서비스 기능 제공을 위해 보관되며, 이용자 삭제 요청 또는 계정 정리 시 파기</li>
            </ul>
          </Section>

          <Section title="4. 개인정보 처리 위탁 및 국외 이전">
            <p>원활한 서비스 제공을 위해 아래 수탁사에 필요한 범위의 처리를 위탁할 수 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Supabase Inc.: 인증(Auth), 데이터베이스 저장/조회</li>
              <li>OpenAI, LLC: 음성 인식(Whisper API) 처리</li>
              <li>Google LLC: 텍스트 교정/요약(Gemini API) 처리</li>
            </ul>
            <p className="mt-2">
              위 서비스 연동 과정에서 데이터가 국외 서버로 전송·처리될 수 있으며, 당사는 최소 범위의 데이터만 전송합니다.
            </p>
          </Section>

          <Section title="5. AI 학습 데이터 활용 여부">
            <ul className="list-disc pl-5 space-y-1">
              <li>당사는 이용자가 업로드한 음성/텍스트를 자체 AI 모델 학습 목적으로 사용하지 않습니다.</li>
              <li>데이터는 변환·교정·요약 기능 제공을 위해서만 API로 처리됩니다.</li>
              <li>외부 API 사업자의 상세 데이터 처리정책은 각 제공사의 정책을 따릅니다.</li>
            </ul>
          </Section>

          <Section title="6. 이용자 권리">
            <p>이용자는 본인 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</p>
          </Section>

          <Section title="7. 안전성 확보조치">
            <ul className="list-disc pl-5 space-y-1">
              <li>전송 구간 암호화(HTTPS), 접근 권한 최소화, 인증 토큰 기반 접근 제어</li>
              <li>요청량 제한, 보안 헤더 적용 등 서비스 보안 강화 조치</li>
              <li>로그 기반 이상 징후 모니터링 및 장애 대응 체계 운영</li>
            </ul>
          </Section>

          <Section title="8. 사업자/개인정보 보호책임자 및 문의">
            <p>상호: OURS</p>
            <p>사업자등록번호: {BUSINESS_REG_NUMBER}</p>
            <p>대표자: {REPRESENTATIVE_NAME}</p>
            <p>사업장 주소: {BUSINESS_ADDRESS}</p>
            <p className="mt-2">개인정보 보호책임자: {REPRESENTATIVE_NAME} (대표)</p>
            <p>문의 이메일: {CONTACT_EMAIL}</p>
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
