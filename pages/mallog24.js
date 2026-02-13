import Head from 'next/head'
import Link from 'next/link'
import Mallog24Logo from '../components/Mallog24Logo'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://malloc24.vercel.app'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 도입 문의')}&body=${encodeURIComponent('안녕하세요 OURS 팀,\n\nmallog24 도입 관련 문의드립니다.\n')}`

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

function FeatureCard({ title, body, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
    </div>
  )
}

export default function Mallog24Intro({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - mallog24 소개</title>
        <meta name="description" content="mallog24는 설교, 회의, 통화를 빠르게 텍스트로 전환하고 기록본까지 분리 저장하는 AI 음성 기록 도구입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/mallog24-en" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              EN
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/70 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-400 mb-4">Product Detail</p>
            <div className="mb-5 flex justify-center sm:justify-start">
              <Mallog24Logo className="w-full max-w-[360px] h-auto" />
            </div>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
              mallog24는 음성 파일을 업로드하면 정돈된 텍스트와 요약을 생성하고,
              회의 핵심 키워드, 진료 참고 기록, 설교 핵심 요약을 별도 기록본으로 저장할 수 있는 AI 음성 기록 서비스입니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:opacity-90 transition-opacity"
              >
                mallog24 시작하기
              </a>
              <a
                href={BUSINESS_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                도입 문의하기
              </a>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                title="정확한 음성 인식"
                body="Whisper + Gemini 2단계 처리로 저음질 오디오에서도 문맥 기반 교정 결과를 제공합니다."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5v14m7-7H5" /></svg>}
              />
              <FeatureCard
                title="도메인별 기록본"
                body="회의 핵심 키워드, 진료 도움 기록, 설교 핵심 요약을 각각 분리해 저장/재사용할 수 있습니다."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>}
              />
              <FeatureCard
                title="회원 기반 관리"
                body="회원가입/로그인 후 사용자 단위로 작업 기록과 저장된 기록본을 안전하게 관리합니다."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5 1.343 3.5 3 3.5zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zm8 2c-1.473 0-2.84.47-4 .999M8 13c-2.761 0-5 1.79-5 4v1h10v-1c0-1.275-.612-2.438-1.6-3.28" /></svg>}
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">도입 흐름</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">STEP 1</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">음성 업로드</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">설교/회의/통화 파일을 업로드하고 유형을 선택합니다.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">STEP 2</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">텍스트 생성</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">전사 결과와 요약을 확인하고 TXT/Word로 내보낼 수 있습니다.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">STEP 3</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">기록본 분리 저장</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">AI 초안을 편집해 별도 기록본으로 저장하고 다시 조회합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
