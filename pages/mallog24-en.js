import Head from 'next/head'
import Link from 'next/link'
import Mallog24Logo from '../components/Mallog24Logo'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://mallog24.com'
const MALLOG24_GUIDE_URL = '/mallog24-guide-en'
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.mallog24.app&pcampaignid=web_share'
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || ''
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 onboarding inquiry')}&body=${encodeURIComponent('Hello OURS team,\n\nI would like to learn more about mallog24.\n')}`
const TRADEMARK_APPLICATION_NO = process.env.NEXT_PUBLIC_TRADEMARK_APPLICATION_NO || '40-2026-0040381'
const COPYRIGHT_REGISTRATION_NO = process.env.NEXT_PUBLIC_COPYRIGHT_REGISTRATION_NO || 'C-2026-013549'

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
            <HeaderMenuControls
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              uiTheme={uiTheme}
              setUiTheme={setUiTheme}
              uiThemeMode={uiThemeMode}
              setUiThemeMode={setUiThemeMode}
              locale="en"
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
              mallog24 is an AI speech transcription service that turns audio into polished text and summaries,
              then lets teams save separate structured notes for meeting keywords, clinical references, and sermon core summaries.
            </p>
            <p className="mt-4 text-sm sm:text-base ours-muted leading-relaxed max-w-3xl">
              The name mallog24 combines mal, meaning spoken words, and log, meaning recorded history, to express a service that keeps spoken content recorded around the clock.
            </p>
            <div className="mt-5 inline-flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300">
              <p>Trademark Application No.: {TRADEMARK_APPLICATION_NO}</p>
              <p>Copyright Registration No.: {COPYRIGHT_REGISTRATION_NO}</p>
            </div>
            <div id="app-download" className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
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
              <Link
                href={MALLOG24_GUIDE_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                View Usage Guide
              </Link>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                Android Download
              </a>
              {APP_STORE_URL ? (
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  iOS Download
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed px-6 py-3 font-semibold ours-muted"
                  style={{ borderColor: 'var(--ours-border)' }}
                  aria-disabled="true"
                >
                  iOS in Review
                </span>
              )}
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
