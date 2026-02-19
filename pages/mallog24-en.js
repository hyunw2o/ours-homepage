import Head from 'next/head'
import Link from 'next/link'
import Mallog24Logo from '../components/Mallog24Logo'

const UI_THEME_OPTIONS = [
  { key: 'auto', label: 'Auto' },
  { key: 'aurora', label: 'Aurora' },
  { key: 'noir', label: 'Noir' },
  { key: 'sunset', label: 'Sunset' },
]

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://malloc24.vercel.app'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 onboarding inquiry')}&body=${encodeURIComponent('Hello OURS team,\n\nI would like to learn more about mallog24.\n')}`

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-xl ours-card hover:opacity-90 transition-colors"
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

function ThemePresetSwitch({ uiTheme, setUiTheme, uiThemeMode, setUiThemeMode, className = '' }) {
  return (
    <div className={`flex items-center rounded-xl p-1 ours-theme-group ${className}`}>
      {UI_THEME_OPTIONS.map((theme) => (
        <button
          key={theme.key}
          type="button"
          onClick={() => {
            if (theme.key === 'auto') {
              setUiThemeMode('auto')
            } else {
              setUiThemeMode('manual')
              setUiTheme(theme.key)
            }
          }}
          className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all ours-theme-item ${theme.key === 'auto'
            ? uiThemeMode === 'auto' ? 'active' : ''
            : uiThemeMode === 'manual' && uiTheme === theme.key ? 'active' : ''}`}
        >
          {theme.label}
        </button>
      ))}
    </div>
  )
}

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

export default function Mallog24IntroEn({ darkMode, setDarkMode, uiTheme, setUiTheme, uiThemeMode, setUiThemeMode }) {
  return (
    <>
      <Head>
        <title>OURS - About mallog24</title>
        <meta name="description" content="mallog24 is an AI speech transcription tool for sermons, meetings, and calls with structured note saving." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 ours-header">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="text-xl font-bold ours-title tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/mallog24" className="text-sm ours-muted hover:opacity-80 transition-colors">
              KR
            </Link>
            <ThemePresetSwitch uiTheme={uiTheme} setUiTheme={setUiTheme} uiThemeMode={uiThemeMode} setUiThemeMode={setUiThemeMode} className="hidden md:flex" />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main>
        <section className="pt-5 px-6">
          <div className="max-w-5xl mx-auto rounded-xl ours-card p-3 flex items-center justify-between gap-3">
            <p className="text-xs font-medium ours-muted">Auto: Light Aurora / Dark Noir</p>
            <ThemePresetSwitch uiTheme={uiTheme} setUiTheme={setUiTheme} uiThemeMode={uiThemeMode} setUiThemeMode={setUiThemeMode} />
          </div>
        </section>

        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/70 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase ours-link mb-4">Product Detail</p>
            <div className="mb-5 flex justify-center sm:justify-start">
              <Mallog24Logo className="w-full max-w-[360px] h-auto" />
            </div>
            <p className="text-base sm:text-lg ours-muted leading-relaxed max-w-3xl">
              mallog24 is an AI speech transcription service that turns audio into polished text and summaries,
              then lets teams save separate structured notes for meeting keywords, clinical references, and sermon core summaries.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-primary font-semibold transition-opacity"
              >
                Start mallog24
              </a>
              <a
                href={BUSINESS_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                title="High-accuracy transcription"
                body="A two-step Whisper + Gemini pipeline improves transcript quality even with low-quality recordings."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5v14m7-7H5" /></svg>}
              />
              <FeatureCard
                title="Domain-specific notes"
                body="Generate and store separate notes for meetings, clinical support references, and sermon core summaries."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>}
              />
              <FeatureCard
                title="Account-based management"
                body="Sign up and manage transcript history and saved records under each user account."
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5 1.343 3.5 3 3.5zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zm8 2c-1.473 0-2.84.47-4 .999M8 13c-2.761 0-5 1.79-5 4v1h10v-1c0-1.275-.612-2.438-1.6-3.28" /></svg>}
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 1</p>
                  <p className="text-sm font-semibold ours-title mb-1">Upload audio</p>
                  <p className="text-xs ours-muted">Upload sermon, meeting, or call audio and pick the transcript type.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 2</p>
                  <p className="text-sm font-semibold ours-title mb-1">Generate transcript</p>
                  <p className="text-xs ours-muted">Review transcript and summary, then export as TXT or Word when needed.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-link mb-2">STEP 3</p>
                  <p className="text-sm font-semibold ours-title mb-1">Save structured notes</p>
                  <p className="text-xs ours-muted">Generate AI drafts and save edited records for future reuse and tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
