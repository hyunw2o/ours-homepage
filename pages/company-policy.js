import Head from 'next/head'
import Link from 'next/link'

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

export default function CompanyPolicy({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - 회사 정책</title>
        <meta name="description" content="OURS 회사 운영 정책" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/company-policy-en" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              EN
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">최종 업데이트: 2026년 2월 20일</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">회사 정책</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS는 신뢰 가능한 AI 음성 기록 서비스를 위해 아래 운영 원칙을 준수합니다.
            </p>
          </div>

          <Section title="1. 서비스 운영 원칙">
            <ul className="list-disc pl-5 space-y-1">
              <li>사용자가 빠르게 기록을 생성하고 재활용할 수 있도록 기능을 단순하고 명확하게 설계합니다.</li>
              <li>보안, 안정성, 정확도 개선을 지속적으로 우선순위에 둡니다.</li>
            </ul>
          </Section>

          <Section title="2. 데이터 최소 처리">
            <ul className="list-disc pl-5 space-y-1">
              <li>서비스 제공에 필요한 최소 범위의 데이터만 처리합니다.</li>
              <li>원본 음성 파일은 처리 완료 후 임시 저장소에서 지체 없이 삭제하는 정책을 기본으로 운영합니다.</li>
            </ul>
          </Section>

          <Section title="3. 품질 및 정확도 정책">
            <ul className="list-disc pl-5 space-y-1">
              <li>전사 결과는 자동 생성되며, 최종 문서화 전 사용자 검토를 권장합니다.</li>
              <li>도메인(설교/회의/통화/의료 등)별 인식 품질 향상을 위해 프롬프트 및 용어 사전을 지속 개선합니다.</li>
            </ul>
          </Section>

          <Section title="4. 보안 및 접근 통제">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTTPS 통신, 인증 토큰 검증, 권한 분리를 기본 보안 기준으로 적용합니다.</li>
              <li>비정상 트래픽과 공격 징후를 모니터링하고, 필요 시 접근 제한 조치를 시행합니다.</li>
            </ul>
          </Section>

          <Section title="5. AI 윤리 및 책임">
            <ul className="list-disc pl-5 space-y-1">
              <li>사용자 업로드 데이터는 서비스 처리 목적 외 용도로 사용하지 않습니다.</li>
              <li>불법/유해/권리침해 콘텐츠에 대한 신고 접수 시 내부 기준에 따라 검토 및 제한 조치를 진행합니다.</li>
            </ul>
          </Section>

          <Section title="6. 고객지원 및 커뮤니케이션">
            <ul className="list-disc pl-5 space-y-1">
              <li>문의 채널: ours113814@gmail.com</li>
              <li>주요 정책 변경은 웹페이지 공지 또는 서비스 화면 안내로 고지합니다.</li>
            </ul>
          </Section>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/privacy" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              이용약관
            </Link>
            <Link href="/" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
