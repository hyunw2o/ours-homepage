import Head from 'next/head'
import Link from 'next/link'

const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || '김현우'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 경기도 광주시 초월읍 무들로 28'

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
            <Link href="/en" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              EN
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Last updated: February 13, 2026</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">개인정보처리방침</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
            </p>
          </div>

          <Section title="1. 수집하는 개인정보 항목">
            <p>서비스 이용 과정에서 다음 정보가 수집될 수 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>업로드한 음성 파일 및 변환 결과 텍스트</li>
              <li>서비스 이용 기록, 접속 로그, 기기 정보(브라우저/OS 등)</li>
              <li>문의/오류 제보 시 제공된 이메일 또는 연락 정보</li>
            </ul>
          </Section>

          <Section title="2. 개인정보 이용 목적">
            <ul className="list-disc pl-5 space-y-1">
              <li>음성 인식, 텍스트 변환, 요약 등 핵심 기능 제공</li>
              <li>서비스 품질 개선 및 안정성 모니터링</li>
              <li>문의 대응, 장애 처리, 공지 전달</li>
            </ul>
          </Section>

          <Section title="3. 개인정보 보관 및 파기">
            <p>개인정보는 목적 달성 후 지체 없이 파기하며, 법령에 따라 보관이 필요한 경우 해당 기간 동안만 보관합니다.</p>
          </Section>

          <Section title="4. 제3자 제공 및 처리위탁">
            <p>서비스 운영을 위해 필요한 범위에서 클라우드/AI/데이터베이스 제공사에 처리가 위탁될 수 있습니다.</p>
            <p className="mt-2">위탁 범위는 서비스 제공에 필요한 최소한으로 제한하며, 관련 법령을 준수합니다.</p>
          </Section>

          <Section title="5. 이용자 권리">
            <p>이용자는 본인 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</p>
          </Section>

          <Section title="6. 사업자 정보 및 문의">
            <p>상호: OURS</p>
            <p>사업자등록번호: {BUSINESS_REG_NUMBER}</p>
            <p>대표자: {REPRESENTATIVE_NAME}</p>
            <p>사업장 주소: {BUSINESS_ADDRESS}</p>
            <p className="mt-2">문의: 서비스 하단 연락 채널 또는 운영자 이메일</p>
          </Section>

          <div className="pt-4 text-center">
            <Link href="/" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
