import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Mallog24Logo from '../components/Mallog24Logo'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://mallog24.com'
const MALLOG24_INFO_URL = '/mallog24-en'
const MALLOG24_GUIDE_URL = '/mallog24-guide-en'
const MALLOG24_PRICING_URL = `${MALLOG24_URL}/pricing-en`
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.mallog24.app&pcampaignid=web_share'
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com/us/app/mallog24/id6765552782'
const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OURS'
const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const LANDLINE_PHONE = process.env.NEXT_PUBLIC_REPRESENTATIVE_PHONE || process.env.NEXT_PUBLIC_LANDLINE_PHONE || '010-4798-3619'
const REPRESENTATIVE_NAME =
  process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME_EN ||
  process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME ||
  'Kim Hyunwoo'
const BUSINESS_ADDRESS =
  process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_EN ||
  process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ||
  '12735, 28 Mudeul-ro, Chowol-eup, Gwangju-si, Gyeonggi-do, Republic of Korea'
const ECOMMERCE_REG_NUMBER = process.env.NEXT_PUBLIC_ECOMMERCE_REG_NUMBER || 'No. 2026-Gyeonggi Gwangju-0442'
const TRADEMARK_APPLICATION_NO = process.env.NEXT_PUBLIC_TRADEMARK_APPLICATION_NO || '40-2026-0040381'
const rawCopyrightRegistrationNo =
  process.env.NEXT_PUBLIC_COPYRIGHT_REGISTRATION_NO_EN ||
  process.env.NEXT_PUBLIC_COPYRIGHT_REGISTRATION_NO ||
  'C-2026-013549'
const COPYRIGHT_REGISTRATION_NO = rawCopyrightRegistrationNo.replace(/^제\s*/u, '').replace(/\s*호$/u, '')
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'ours113814@gmail.com'
const HOURS_PROCESSED = process.env.NEXT_PUBLIC_LANDING_STATS_HOURS_PROCESSED || ''
const BETA_USERS = process.env.NEXT_PUBLIC_LANDING_STATS_BETA_USERS || ''
const AVG_TURNAROUND = process.env.NEXT_PUBLIC_LANDING_STATS_AVG_TURNAROUND_EN || ''
const TIME_SAVING = process.env.NEXT_PUBLIC_LANDING_STATS_TIME_SAVING_EN || ''
const HAS_OPERATIONAL_STATS = Boolean(HOURS_PROCESSED || BETA_USERS || AVG_TURNAROUND || TIME_SAVING)
const CONTACT_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Inquiry to OURS')}&body=${encodeURIComponent('Hello OURS team,\n\nInquiry type (general/business):\nInquiry details:\n')}`
const NAV_ITEMS = [
  { href: '#products', label: 'Products' },
  { href: MALLOG24_GUIDE_URL, label: 'Usage Guide' },
  { href: MALLOG24_INFO_URL, label: 'mallog24 Details' },
  { href: PLAY_STORE_URL, label: 'Android Download', external: true },
  { href: APP_STORE_URL || '#app-download', label: APP_STORE_URL ? 'iOS Download' : 'iOS Review', external: Boolean(APP_STORE_URL) },
]
const FOOTER_BUSINESS_ROWS = [
  [`Company Name: ${BUSINESS_NAME}`, `Representative: ${REPRESENTATIVE_NAME}`, `Business Registration No.: ${BUSINESS_REG_NUMBER}`, `E-commerce Registration No.: ${ECOMMERCE_REG_NUMBER}`],
  [`Business Address: ${BUSINESS_ADDRESS}`, `Representative Phone: ${LANDLINE_PHONE}`, `Contact Email: ${BUSINESS_EMAIL}`],
  [`Trademark Application No.: ${TRADEMARK_APPLICATION_NO}`, `Copyright Registration No.: ${COPYRIGHT_REGISTRATION_NO}`],
]

function FooterInlineRow({ items, className = '' }) {
  const visibleItems = items.filter(Boolean)

  return (
    <p className={`flex flex-wrap items-center justify-center sm:justify-end gap-x-2 gap-y-1 ${className}`}>
      {visibleItems.map((item, index) => (
        <span key={`${item}-${index}`} className="inline-flex items-center gap-x-2">
          {index > 0 ? <span className="opacity-45">|</span> : null}
          <span>{item}</span>
        </span>
      ))}
    </p>
  )
}

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-slide-up')
          el.style.opacity = '1'
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    el.style.opacity = '0'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function BentoCard({ children, className = '', href, span = '' }) {
  const ref = useScrollReveal()
  const baseClass = `group relative rounded-3xl ours-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${span}`

  if (href) {
    return (
      <a ref={ref} href={href} className={`${baseClass} ${className} block`}>
        {children}
      </a>
    )
  }
  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}

function MockupWindow() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded-2xl ours-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--ours-border)' }}>
        <Image
          src="/mallog24-app-icon.png"
          alt="mallog24 app icon"
          width={20}
          height={20}
          className="w-5 h-5 rounded-md"
        />
        <span className="text-xs ours-muted font-medium">mallog24.com</span>
      </div>

      <div className="p-5">
        {step === 0 && (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full ours-soft-card flex items-center justify-center">
              <svg className="w-5 h-5 ours-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm ours-muted">Upload audio file</p>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs text-white font-bold">1</span>
              </div>
              <div className="flex-1">
                <div className="h-1.5 bg-blue-400 rounded-full w-full animate-pulse" />
              </div>
            </div>
            <p className="text-xs ours-muted text-center">AI speech recognition in progress...</p>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-1.5 bg-green-400 rounded-full w-full" />
              </div>
            </div>
            <p className="text-xs ours-muted text-center">Text refinement complete</p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2 animate-fade-in">
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-4/5" />
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4" />
            <div className="h-2 bg-brand-200 dark:bg-brand-800 rounded-full w-1/4 mt-3" />
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home({ darkMode, setDarkMode, uiTheme, setUiTheme, uiThemeMode, setUiThemeMode }) {
  return (
    <>
      <Head>
        <title>OURS - AI Technology for Everyone</title>
        <meta name="description" content="OURS builds AI tools that transform how you work. Meet mallog24, our AI-powered speech-to-text tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OURS - AI Technology for Everyone" />
        <meta property="og:description" content="OURS builds AI tools that transform how you work." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 ours-header">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold ours-title tracking-tight">
            OURS
          </a>
          <div className="flex items-center gap-2">
            <HeaderMenuControls
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              uiTheme={uiTheme}
              setUiTheme={setUiTheme}
              uiThemeMode={uiThemeMode}
              setUiThemeMode={setUiThemeMode}
              locale="en"
              krHref="/"
              enHref="/en"
              navItems={NAV_ITEMS}
            />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="ours-hero-orb ours-hero-orb-a -z-10" />
          <div className="ours-hero-orb ours-hero-orb-b -z-10" />
          <div className="ours-hero-orb ours-hero-orb-c -z-10" />
          <div className="ours-glass-shape -z-10 hidden md:block" />

          <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 ours-chip">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-xs font-medium ours-muted">Flagship product</span>
            </div>

            <div className="mb-4 flex justify-center">
              <Mallog24Logo className="w-full max-w-[460px] h-auto" />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] ours-muted uppercase mb-6">
              AI speech-to-text service by OURS
            </p>

            <h1 className="ours-hero-title mb-5">
              Upload audio once.<br className="hidden sm:block" />
              Get a <span className="ours-gradient-word">structured document</span> you can use right away.
            </h1>

            <p className="text-base sm:text-xl ours-muted max-w-2xl mx-auto mb-14 leading-relaxed">
              Built for sermons, meetings, and phone calls with a two-stage engine (Whisper + Gemini),
              from transcription to correction, summary, and record storage.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Free 10h/month</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Pro KRW 8,800/month (VAT included, Unlimited)</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Open beta: Free plan available</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-primary font-semibold rounded-2xl transition-all duration-200"
              >
                Get started with mallog24
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold">
                <a href={MALLOG24_PRICING_URL} className="ours-link transition-colors">View pricing</a>
                <Link href={MALLOG24_GUIDE_URL} className="ours-link transition-colors">Usage Guide</Link>
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="ours-link transition-colors">Android Download</a>
                <a href={APP_STORE_URL || '#app-download'} target={APP_STORE_URL ? '_blank' : undefined} rel={APP_STORE_URL ? 'noreferrer' : undefined} className="ours-link transition-colors">
                  {APP_STORE_URL ? 'iOS Download' : 'iOS in Review'}
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs ours-muted">
              During open beta, visitors can validate the workflow with the free 10-hour monthly plan and only upgrade to Pro if the workflow proves useful.
            </p>
          </div>
        </section>

        <section className="pb-6 sm:pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">About OURS</span>
              <h2 className="ours-section-title mt-2">OURS builds products that turn spoken work into reusable records</h2>
              <p className="ours-section-copy">
                OURS is focused on workflows where transcription alone is not enough. We connect transcription, correction,
                summarization, and record saving so teams can move from spoken content to practical documents without extra cleanup.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm font-semibold ours-title">Problem</p>
                  <p className="text-xs ours-muted mt-2 leading-relaxed">Meetings, sermons, and calls often stay trapped in raw notes instead of reusable documentation.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm font-semibold ours-title">Product direction</p>
                  <p className="text-xs ours-muted mt-2 leading-relaxed">mallog24 connects transcription, correction, summary, and saved records in one operational flow.</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm font-semibold ours-title">Operating principle</p>
                  <p className="text-xs ours-muted mt-2 leading-relaxed">We only publish verifiable information and expand visible claims after they are measured in production.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-6 sm:pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">How it works</span>
              <h2 className="ours-section-title mt-2">A workflow users can understand in three steps</h2>
              <p className="ours-section-copy">
                mallog24 is designed so visitors understand the flow from upload to final structured document
                before they ever log in.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                {[
                  ['1. Upload audio', 'The browser checks duration first and warns when the free quota would be exceeded.'],
                  ['2. AI transcription + correction', 'Whisper and Gemini refine speakers, context, and domain terms together.'],
                  ['3. Structured document ready', 'TXT, DOCX, and saved records continue in one operational flow.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl ours-soft-card p-4">
                    <p className="text-sm font-semibold ours-title">{title}</p>
                    <p className="text-xs ours-muted mt-2 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-6 sm:pb-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">Result Demo</span>
              <h2 className="ours-section-title mt-2">Before voice sentence → After structured output</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-muted mb-2">Before</p>
                  <p className="text-sm ours-muted leading-relaxed">
                    &ldquo;Ad budget was 15% over this week, please share the revised plan by next week.&rdquo;
                  </p>
                  <p className="text-xs ours-muted mt-3">
                    &ldquo;After consultation, medication guidance should be twice daily and shared with guardian.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-muted mb-2">After</p>
                  <p className="text-sm font-semibold ours-title mb-2">Meeting Summary</p>
                  <ul className="text-xs ours-muted space-y-1 leading-relaxed">
                    <li>- Agenda: Ad budget overrun (+15%)</li>
                    <li>- Decision: Revised plan by next week</li>
                    <li>- Action: Reassign follow-up owner/timeline</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">Pricing</span>
              <h3 className="text-xl font-bold ours-title mt-2">Plan overview before signup</h3>
              <div className="rounded-2xl ours-soft-card p-4 mt-4">
                <p className="text-xs ours-muted">Free</p>
                <p className="text-lg font-bold ours-title mt-1">10 hours / month</p>
                <p className="text-xs ours-muted mt-2">Transcription + correction + saved records included</p>
              </div>
              <div className="rounded-2xl ours-soft-card p-4 mt-3">
                <p className="text-xs ours-muted">Pro</p>
                <p className="text-lg font-bold ours-title mt-1">KRW 8,800 / month (VAT included), Unlimited</p>
                <p className="text-[11px] ours-muted mt-1">Base KRW 8,000 + VAT 10% (KRW 800)</p>
                <p className="text-xs ours-muted mt-2">Priority processing for frequent use</p>
              </div>
              <a
                href={MALLOG24_PRICING_URL}
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold ours-link"
              >
                View pricing details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {HAS_OPERATIONAL_STATS ? (
            <div className="max-w-6xl mx-auto px-6 mt-4">
              <div className="rounded-3xl ours-card p-6 sm:p-7">
                <span className="ours-section-kicker">Operational facts</span>
                <h3 className="text-2xl font-bold ours-title mt-2 mb-4">What visitors can verify before signup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-xs ours-muted">Processed audio</p>
                    <p className="text-base ours-title font-semibold mt-2">{HOURS_PROCESSED}</p>
                  </div>
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-xs ours-muted">Beta users</p>
                    <p className="text-base ours-title font-semibold mt-2">{BETA_USERS}</p>
                  </div>
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-xs ours-muted">Average turnaround</p>
                    <p className="text-base ours-title font-semibold mt-2">{AVG_TURNAROUND}</p>
                  </div>
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-xs ours-muted">Time saved</p>
                    <p className="text-base ours-title font-semibold mt-2">{TIME_SAVING}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-sm ours-title font-semibold">Temporary raw-audio handling</p>
                    <p className="text-xs ours-muted mt-2 leading-relaxed">
                      Uploaded raw audio is handled only for transcription and removed afterward according to the service policy.
                    </p>
                  </div>
                  <div className="rounded-2xl ours-soft-card p-4">
                    <p className="text-sm ours-title font-semibold">Validate free, upgrade when needed</p>
                    <p className="text-xs ours-muted mt-2 leading-relaxed">
                      Users can test real uploads under the 10-hour free plan first, then move to Pro only when the workflow proves valuable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        {/* Bento Grid Section */}
        <section id="products" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="ours-section-kicker">Products</span>
              <h2 className="ours-section-title">A cleaner workspace for voice intelligence</h2>
              <p className="ours-section-copy">
                Instead of listing every technical detail, we tuned this section around real workflow steps
                so users can understand value and start fast.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Card 1: mallog24 Hero Card (large) */}
              <BentoCard
                href={MALLOG24_INFO_URL}
                className="p-8 lg:p-10"
                span="md:col-span-2 lg:col-span-2 lg:row-span-2"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <span className="ours-section-kicker mb-4">
                      Our First Product
                    </span>
                    <Mallog24Logo className="w-full max-w-[220px] h-auto mb-4" />
                    <p className="ours-feature-copy max-w-lg">
                      AI-powered speech recognition for cleaner transcripts from any recording.
                      Convert sermons, lectures, and meetings into accurate text in minutes.
                    </p>
                  </div>

                  <div className="flex-1 flex items-end">
                    <div className="w-full max-w-md">
                      <MockupWindow />
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 ours-link font-semibold text-sm group-hover:gap-3 transition-all">
                    View mallog24 details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </BentoCard>

              {/* Card 2: AI Speech Recognition */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">AI Speech Recognition</h3>
                <p className="ours-feature-copy">
                  A two-stage Whisper + Gemini pipeline delivers high-accuracy transcription, even for low-quality audio.
                </p>
              </BentoCard>

              {/* Card 3: Smart Text Refinement */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">Smart Text Refinement</h3>
                <p className="ours-feature-copy">
                  Domain dictionaries plus AI refinement preserve medical, church, and general terminology with precision.
                </p>
              </BentoCard>

              {/* Card 4: Multiple Transcript Types (wide) */}
              <BentoCard className="p-8" span="md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1">
                    <div className="ours-feature-icon mb-5">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="ours-feature-title">Built for Multiple Transcript Types</h3>
                    <p className="ours-feature-copy">
                      Optimized prompts for sermons, calls, and meetings improve accuracy by context.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {['Sermon Transcript', 'Call Record', 'Meeting Record'].map((label) => (
                      <span key={label} className="ours-type-chip">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>

              {/* Card 5: Fast Processing */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">Fast Processing</h3>
                <p className="ours-feature-copy">
                  Long audio files are processed within minutes using auto-splitting and parallel handling.
                </p>
              </BentoCard>

              {/* Card 6: Korean + English */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">Korean + English</h3>
                <p className="ours-feature-copy">
                  Supports both Korean and English with language-optimized dictionaries and correction logic.
                </p>
              </BentoCard>

              {/* Card 7: Export */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">Flexible Exports</h3>
                <p className="ours-feature-copy">
                  Export as TXT or Word, copy to clipboard, and generate bulletin-ready summaries.
                </p>
              </BentoCard>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="ours-cta-panel">
              <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="ours-cta-title">
                  Start now
                </h2>
                <p className="ours-cta-copy mb-10">
                  Upload your audio and experience AI-generated transcripts.
                </p>
                <div id="app-download" className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={MALLOG24_URL}
                    className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-btn-primary transition-all duration-200 sm:w-auto"
                  >
                    Get started with mallog24
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href={MALLOG24_GUIDE_URL}
                    className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-cta-ghost-btn transition-all duration-200 sm:w-auto"
                  >
                    View Usage Guide
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6m-7 4h8m-8 4h8m-8 4h5M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </Link>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-cta-ghost-btn transition-all duration-200 sm:w-auto"
                  >
                    Android Download
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  {APP_STORE_URL ? (
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-cta-ghost-btn transition-all duration-200 sm:w-auto"
                    >
                      iOS Download
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  ) : (
                    <span
                      className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl border border-dashed px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-muted sm:w-auto"
                      style={{ borderColor: 'var(--ours-border)' }}
                      aria-disabled="true"
                    >
                      iOS in Review
                    </span>
                  )}
                  <a
                    href={CONTACT_MAILTO}
                    className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-center font-semibold whitespace-nowrap break-keep ours-cta-ghost-btn transition-all duration-200 sm:w-auto"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 3V8a2 2 0 012-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">FAQ</span>
              <h2 className="ours-section-title mt-2">Questions people ask before adopting mallog24</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  ['How long are audio files stored?', 'Raw audio is handled temporarily for transcription and removed after processing. Structured results remain within the account feature scope.'],
                  ['Does it support English?', 'Yes. Korean and English are both supported, and users can choose the language before upload.'],
                  ['Can it separate multiple speakers?', 'Meeting and call modes prioritize speaker-aware formatting. Clear audio with less overlap improves quality.'],
                  ['Can users validate before paying?', 'Yes. The free plan includes up to 10 hours per month so teams can test the workflow before upgrading.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl ours-soft-card p-4">
                    <p className="text-sm ours-title font-semibold">{title}</p>
                    <p className="text-xs ours-muted mt-2 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ours-footer">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2">
              <span className="text-sm font-bold ours-title">OURS</span>
              <span className="text-sm ours-muted opacity-45">|</span>
              <Link href={MALLOG24_INFO_URL} className="inline-flex items-center transition-opacity hover:opacity-80">
                <Mallog24Logo className="h-5 w-auto" />
              </Link>
              <span className="text-sm ours-muted opacity-45">|</span>
              <Link href="/privacy-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-sm ours-muted opacity-45">|</span>
              <Link href="/terms-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Terms of Service
              </Link>
              <span className="text-sm ours-muted opacity-45">|</span>
              <Link href="/company-policy-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Company Policy
              </Link>
              <span className="text-sm ours-muted opacity-45">|</span>
              <Link href={MALLOG24_GUIDE_URL} className="text-sm ours-muted hover:opacity-85 transition-colors">
                mallog24 Usage Guide
              </Link>
              <span className="text-sm ours-muted opacity-45">|</span>
              <a href={CONTACT_MAILTO} className="text-sm ours-muted hover:opacity-85 transition-colors">
                Contact Us
              </a>
            </div>
            <div className="text-xs ours-muted text-center sm:text-right leading-relaxed max-w-3xl">
              {FOOTER_BUSINESS_ROWS.map((row, index) => (
                <FooterInlineRow key={`footer-business-${index}`} items={row} className={index > 0 ? 'mt-1' : ''} />
              ))}
              <p className="text-xs ours-muted mt-1">
                Copyright 2026. OURS All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
