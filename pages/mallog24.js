import Head from 'next/head'
import Link from 'next/link'
import Mallog24Logo from '../components/Mallog24Logo'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://mallog24.com'
const MALLOG24_GUIDE_URL = '/mallog24-guide'
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.mallog24.app&pcampaignid=web_share'
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || ''
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 도입 문의')}&body=${encodeURIComponent('안녕하세요 OURS 팀,\n\nmallog24 도입 관련 문의드립니다.\n')}`
const TRADEMARK_APPLICATION_NO = process.env.NEXT_PUBLIC_TRADEMARK_APPLICATION_NO || '40-2026-0040381'
const COPYRIGHT_REGISTRATION_NO = process.env.NEXT_PUBLIC_COPYRIGHT_REGISTRATION_NO || '제 C-2026-013549 호'

function FeatureCard({ title, body, icon }) {
  return (
    <div className="rounded-2xl ours-card p-5">
      <div className="w-10 h-10 rounded-xl ours-soft-card ours-link flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-base font-bold ours-title mb-2">{title}</h3>
      <p className="text-sm ours-muted leading-relaxed">{body}</p>
    </div>
  )
}

export default function Mallog24Intro({ darkMode, setDarkMode, uiTheme, setUiTheme, uiThemeMode, setUiThemeMode }) {
  return (
    <>
      <Head>
        <title>OURS - mallog24 소개</title>
        <meta name="description" content="mallog24는 설교, 회의, 통화를 빠르게 텍스트로 전환하고 기록본까지 분리 저장하는 AI 음성 기록 도구입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 ours-header">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold ours-title tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <HeaderMenuControls
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              uiTheme={uiTheme}
              setUiTheme={setUiTheme}
              uiThemeMode={uiThemeMode}
              setUiThemeMode={setUiThemeMode}
              locale="kr"
              krHref="/mallog24"
              enHref="/mallog24-en"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/70 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase ours-link mb-4">Product Detail</p>
            <div className="mb-5 flex justify-center sm:justify-start">
              <Mallog24Logo className="w-full max-w-[360px] h-auto" />
            </div>
            <p className="text-base sm:text-lg ours-muted leading-relaxed max-w-3xl">
              mallog24는 음성 파일을 업로드하면 정돈된 텍스트와 요약을 생성하고,
              회의 핵심 키워드, 진료 참고 기록, 설교 핵심 요약을 별도 기록본으로 저장할 수 있는 AI 음성 기록 서비스입니다.
            </p>
            <p className="mt-4 text-sm sm:text-base ours-muted leading-relaxed max-w-3xl">
              mallog24는 24시간 말이 기록으로 이어진다는 뜻에서 말(mal)과 기록(log)을 결합해 만든 이름입니다.
            </p>
            <div className="mt-5 inline-flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300">
              <p>상표 출원번호: {TRADEMARK_APPLICATION_NO}</p>
              <p>저작권 등록번호: {COPYRIGHT_REGISTRATION_NO}</p>
            </div>
            <div id="app-download" className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-primary font-semibold transition-opacity"
              >
                mallog24 시작하기
              </a>
              <a
                href={BUSINESS_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                도입 문의하기
              </a>
              <Link
                href={MALLOG24_GUIDE_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                사용 가이드 보기
              </Link>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                Android 다운로드
              </a>
              {APP_STORE_URL ? (
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  iOS 다운로드
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed px-6 py-3 font-semibold ours-muted"
                  style={{ borderColor: 'var(--ours-border)' }}
                  aria-disabled="true"
                >
                  iOS 심사 진행 중
                </span>
              )}
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
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-6">도입 흐름</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 1</p>
                  <p className="text-sm font-semibold ours-title mb-1">음성 업로드</p>
                  <p className="text-xs ours-muted">설교/회의/통화 파일을 업로드하고 유형을 선택합니다.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 2</p>
                  <p className="text-sm font-semibold ours-title mb-1">텍스트 생성</p>
                  <p className="text-xs ours-muted">전사 결과와 요약을 확인하고 TXT/Word로 내보낼 수 있습니다.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 3</p>
                  <p className="text-sm font-semibold ours-title mb-1">기록본 분리 저장</p>
                  <p className="text-xs ours-muted">AI 초안을 편집해 별도 기록본으로 저장하고 다시 조회합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
