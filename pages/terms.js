import Head from 'next/head'
import Link from 'next/link'

const LEGAL_DOC_VERSION = 'v2026.02.21'

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

export default function Terms({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - 이용약관</title>
        <meta name="description" content="OURS 서비스 이용약관" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/terms-en" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              EN
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">시행일: 2026년 2월 21일 · 문서 버전: {LEGAL_DOC_VERSION}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">이용약관</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              본 약관은 OURS가 제공하는 mallog24 서비스의 이용 조건, 권리, 책임을 규정합니다.
            </p>
          </div>

          <Section title="1. 목적 및 적용 범위">
            <p>본 약관은 웹/앱 mallog24 서비스와 관련된 모든 기능, 고객지원, 부가 안내에 적용됩니다.</p>
          </Section>

          <Section title="2. 계정 및 인증">
            <ul className="list-disc pl-5 space-y-1">
              <li>이용자는 정확한 정보로 가입·로그인해야 하며, 타인 계정을 무단 사용해서는 안 됩니다.</li>
              <li>계정·비밀번호·세션 관리 책임은 이용자에게 있습니다.</li>
              <li>보안 위험이 확인되면 회사는 추가 인증 또는 접근 제한 조치를 할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="3. 서비스 내용 및 특성">
            <ul className="list-disc pl-5 space-y-1">
              <li>음성 파일 업로드, 전사(STT), 교정, 요약, 기록본 저장 기능을 제공합니다.</li>
              <li>서비스는 외부 API 연동을 포함할 수 있으며, 이에 따라 처리 시간과 결과 품질이 달라질 수 있습니다.</li>
              <li>회사는 품질·보안·안정성 개선을 위해 기능 및 UI를 변경할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="4. 요금제, 사용량, 결제">
            <ul className="list-disc pl-5 space-y-1">
              <li>무료 플랜은 공지된 월간 한도 내에서 제공됩니다.</li>
              <li>유료 결제 기능 도입 시 가격, 과금 주기, 해지/환불 기준을 별도 고지합니다.</li>
              <li>결제 및 환불은 관련 법령과 결제사 정책을 따릅니다.</li>
            </ul>
          </Section>

          <Section title="5. 이용자 업로드 자료에 대한 책임">
            <ul className="list-disc pl-5 space-y-1">
              <li>이용자는 업로드 자료에 대해 적법한 권리를 보유하거나 사용 허가를 받아야 합니다.</li>
              <li>타인의 저작권, 초상권, 개인정보 등 권리를 침해하는 자료 업로드를 금지합니다.</li>
              <li>회사는 법령 위반 또는 권리침해 신고가 접수된 자료에 대해 접근 제한 또는 삭제할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="6. 금지 행위">
            <ul className="list-disc pl-5 space-y-1">
              <li>불법·유해 콘텐츠 업로드, 악성코드 유포, 서비스 공격/우회, 비정상 자동화 트래픽</li>
              <li>서비스 역설계, 무단 재판매, 운영 정책 우회</li>
              <li>회사 또는 제3자의 권리를 침해하거나 서비스 신뢰를 저해하는 행위</li>
            </ul>
          </Section>

          <Section title="7. 이용 제한 및 이의 절차">
            <ul className="list-disc pl-5 space-y-1">
              <li>약관 위반 또는 보안 위협이 확인되면 사전 통지 후 이용을 제한할 수 있습니다.</li>
              <li>긴급 보안 이슈의 경우 사후 통지 방식으로 즉시 제한할 수 있습니다.</li>
              <li>이용자는 제한 조치에 대해 문의 메일을 통해 소명할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="8. 지식재산권">
            <p>
              서비스 소프트웨어, 디자인, 상표, 문서에 관한 권리는 회사에 있습니다. 이용자가 업로드한 원본 콘텐츠의 권리는 이용자 또는 원권리자에게 있습니다.
            </p>
          </Section>

          <Section title="9. 면책 및 책임 제한">
            <ul className="list-disc pl-5 space-y-1">
              <li>천재지변, 통신장애, 외부 API 장애 등 회사가 통제할 수 없는 사유에 대해 책임이 제한될 수 있습니다.</li>
              <li>전사·요약 결과는 보조 도구이며, 최종 확인과 활용 책임은 이용자에게 있습니다.</li>
            </ul>
          </Section>

          <Section title="10. 약관 변경 및 고지">
            <p>약관 변경 시 적용일자, 변경 사유, 주요 변경사항을 서비스 화면 또는 웹페이지로 안내합니다.</p>
          </Section>

          <Section title="11. 준거법 및 문의">
            <p>본 약관은 대한민국 법령을 준거법으로 하며, 문의는 아래 이메일로 접수합니다.</p>
            <p className="mt-2">문의: ours113814@gmail.com</p>
          </Section>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/privacy" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/company-policy" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              회사 정책
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
