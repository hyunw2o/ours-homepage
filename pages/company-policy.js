import Head from 'next/head'
import Link from 'next/link'

const LEGAL_DOC_VERSION = process.env.NEXT_PUBLIC_LEGAL_DOC_VERSION || 'v2026.05.23'

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
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">최종 업데이트: 2026년 5월 23일 · 문서 버전: {LEGAL_DOC_VERSION}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">회사 정책</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS는 mallog24 서비스를 신뢰성, 보안성, 책임성 기준으로 운영합니다.
            </p>
          </div>

          <Section title="1. 제품 운영 원칙">
            <ul className="list-disc pl-5 space-y-1">
              <li>웹, Android 앱, iOS 앱에서 일관된 핵심 기능과 정책 고지를 유지합니다.</li>
              <li>사용자가 빠르게 기록을 생성·재사용할 수 있도록 명확한 UX를 유지합니다.</li>
              <li>정확도, 보안, 안정성을 제품 로드맵의 우선순위로 둡니다.</li>
            </ul>
          </Section>

          <Section title="2. 데이터 거버넌스">
            <ul className="list-disc pl-5 space-y-1">
              <li>서비스 제공에 필요한 최소 데이터만 처리합니다.</li>
              <li>원본 음성은 임시 처리 후 삭제를 기본 정책으로 운영합니다.</li>
              <li>Apple ID 로그인과 App Store 구독 정보는 인증·구독 확인 목적에 필요한 범위로만 처리합니다.</li>
              <li>권한별 접근 통제와 로그 기반 추적 체계를 유지합니다.</li>
            </ul>
          </Section>

          <Section title="3. 보안 운영">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTTPS, 인증 토큰 검증, 권한 분리, 요청 제한을 기본 통제로 적용합니다.</li>
              <li>비정상 트래픽·침해 시도 탐지를 위한 모니터링과 대응 절차를 운영합니다.</li>
              <li>보안 이벤트 발생 시 내부 대응 프로세스에 따라 격리, 분석, 복구를 진행합니다.</li>
            </ul>
          </Section>

          <Section title="4. 품질 및 정확도 정책">
            <ul className="list-disc pl-5 space-y-1">
              <li>전사 결과는 자동 생성되므로 최종 문서화 전 사용자 검토를 권장합니다.</li>
              <li>설교/회의/통화/의료 등 도메인별 용어 사전과 프롬프트를 지속 개선합니다.</li>
              <li>장애·품질 이슈는 재현 가능 로그를 기준으로 우선순위 대응합니다.</li>
            </ul>
          </Section>

          <Section title="5. 책임 있는 AI 사용">
            <ul className="list-disc pl-5 space-y-1">
              <li>업로드 데이터는 서비스 제공 목적 범위에서만 처리합니다.</li>
              <li>불법·권리침해·오용 신고가 접수되면 내부 기준으로 검토 후 제한 조치할 수 있습니다.</li>
              <li>사용자의 명시적 요청 없이 민감정보 활용 범위를 확장하지 않습니다.</li>
            </ul>
          </Section>

          <Section title="6. 유료상품 등록 및 변경 거버넌스">
            <ol className="list-decimal pl-5 space-y-1">
              <li>유료상품 신설/변경 시 상품명, 가격, 결제주기, 환불기준, 문의처를 표준 항목으로 확정합니다.</li>
              <li>결제대행사 관리자 콘솔, App Store Connect, 서비스 화면(요금제/약관)에 동일 항목이 반영됐는지 교차 검증합니다.</li>
              <li>실결제 오픈 전 테스트 결제(승인/취소/실패/환불)와 로그 검증을 완료해야 합니다.</li>
              <li>iOS 인앱구독은 Apple 심사, 샌드박스 테스트, 영수증/거래 검증 흐름을 별도 체크리스트로 관리합니다.</li>
              <li>변경 사항은 문서 버전과 시행일을 포함해 공지하며, 주요 변경은 사전 고지합니다.</li>
            </ol>
          </Section>

          <Section title="7. 고객지원 및 정책 고지">
            <ul className="list-disc pl-5 space-y-1">
              <li>문의 채널: ours113814@gmail.com</li>
              <li>정책 변경, 기능 변경, 장애 공지는 웹페이지 또는 앱 공지로 안내합니다.</li>
              <li>고객 문의는 확인 후 순차 처리하며, 보안 관련 문의는 우선 처리합니다.</li>
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
