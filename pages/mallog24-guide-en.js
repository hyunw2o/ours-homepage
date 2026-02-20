import Head from 'next/head'
import Link from 'next/link'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://mallog24.com'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 usage guide inquiry')}&body=${encodeURIComponent('Hello OURS team,\n\nI have a question about the usage guide.\n')}`

function GuideStep({ number, title, body }) {
  return (
    <div className="rounded-2xl ours-soft-card p-5 sm:p-6">
      <p className="text-sm font-semibold ours-link mb-2">STEP {number}</p>
      <p className="text-xl font-bold ours-title mb-2">{title}</p>
      <p className="text-base ours-muted leading-relaxed break-keep">{body}</p>
    </div>
  )
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl ours-card p-5">
      <h3 className="text-base font-bold ours-title mb-3">{title}</h3>
      <div className="text-sm ours-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function Mallog24GuideEn({ darkMode, setDarkMode, uiTheme, setUiTheme, uiThemeMode, setUiThemeMode }) {
  return (
    <>
      <Head>
        <title>OURS - mallog24 Usage Guide</title>
        <meta name="description" content="Practical mallog24 usage guide from sign-in to upload, transcription review, and structured record saving." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 ours-header">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="text-xl font-bold ours-title tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/mallog24-en" className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors">
              About mallog24
            </Link>
            <HeaderMenuControls
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              uiTheme={uiTheme}
              setUiTheme={setUiTheme}
              uiThemeMode={uiThemeMode}
              setUiThemeMode={setUiThemeMode}
              locale="en"
              krHref="/mallog24-guide"
              enHref="/mallog24-guide-en"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/70 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase ours-link mb-4">Usage Guide</p>
            <h1 className="ours-section-title mb-4">mallog24 Usage Guide</h1>
            <p className="text-base sm:text-lg ours-muted leading-relaxed max-w-3xl">
              This page covers a practical flow from sign-in and upload to transcript review and structured record saving,
              so teams can adopt mallog24 without setup friction.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-primary font-semibold transition-opacity"
              >
                Open mallog24
              </a>
              <a
                href={BUSINESS_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                Ask About This Guide
              </a>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-6">Quick Start Flow</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
                <GuideStep number="1" title="Sign in" body="Log in with email or social login (Google/Kakao)." />
                <GuideStep number="2" title="Upload file" body="Upload audio using file picker or drag-and-drop." />
                <GuideStep number="3" title="Select type" body="Pick sermon, call, or meeting mode for context tuning." />
                <GuideStep number="4" title="Run transcription" body="Review transcript and summary after AI processing." />
                <GuideStep number="5" title="Save records" body="Generate and edit structured drafts, then save by category." />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard title="Recommended Upload Conditions">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Formats: mp3, wav, m4a, mp4, webm</li>
                <li>Max file size: 100MB</li>
                <li>Recommended sampling: 16kHz+ and minimal background noise</li>
                <li>For speaker separation, clearer single-speaker turns improve quality.</li>
              </ul>
            </InfoCard>
            <InfoCard title="How to Improve Accuracy">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Speak key proper nouns early in the recording if possible.</li>
                <li>In meetings, avoid heavy overlap when multiple speakers respond at once.</li>
                <li>Use structured draft generation to isolate action items and key terms.</li>
                <li>Export as TXT/Word to reuse transcripts in internal templates.</li>
              </ul>
            </InfoCard>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-4">Common Situations</h2>
              <div className="space-y-3 text-sm ours-muted leading-relaxed">
                <p><span className="font-semibold ours-title">Slow login:</span> Check network conditions and browser cache, then retry sign-in.</p>
                <p><span className="font-semibold ours-title">Transcription stalled:</span> Recheck file size, format, and upload completion.</p>
                <p><span className="font-semibold ours-title">Awkward term recognition:</span> Use structured record draft generation to normalize key terms quickly.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/mallog24-en"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  Back to Product Page
                </Link>
                <Link
                  href="/privacy-en"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
