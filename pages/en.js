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
const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OURS'
const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const LANDLINE_PHONE = process.env.NEXT_PUBLIC_LANDLINE_PHONE || 'TBD'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || 'Hyunwoo Kim'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 28 Mudeul-ro, Chowol-eup, Gwangju-si, Gyeonggi-do, Republic of Korea'
const ECOMMERCE_REG_NUMBER = process.env.NEXT_PUBLIC_ECOMMERCE_REG_NUMBER || 'Exempt from e-commerce registration'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Business Inquiry to OURS')}&body=${encodeURIComponent('Hello OURS team,\n\nInquiry details:\n')}`
const ONE_TO_ONE_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('1:1 Inquiry to OURS')}&body=${encodeURIComponent('Hello OURS team,\n\n1:1 inquiry details:\n')}`

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
          <div className="flex items-center gap-5">
            <a
              href="#products"
              className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors"
            >
              Products
            </a>
            <Link
              href={MALLOG24_GUIDE_URL}
              className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors"
            >
              Usage Guide
            </Link>
            <Link
              href={MALLOG24_INFO_URL}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium ours-link transition-all"
            >
              <Mallog24Logo className="h-[22px] w-auto shrink-0" />
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
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
              <span className="text-xs font-medium ours-muted">Building AI Tools</span>
            </div>

            <div className="mb-4 flex justify-center">
              <Mallog24Logo className="w-full max-w-[460px] h-auto" />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] ours-muted uppercase mb-6">
              by OURS
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Pro KRW 8,000/month (Unlimited)</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Open Beta</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-primary font-semibold rounded-2xl transition-all duration-200"
              >
                Get started with mallog24
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={MALLOG24_INFO_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                About mallog24
              </a>
              <Link
                href={MALLOG24_GUIDE_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                Usage Guide
              </Link>
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
                <p className="text-lg font-bold ours-title mt-1">KRW 8,000 / month, Unlimited</p>
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

          <div className="max-w-6xl mx-auto px-6 mt-4">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">Beta Feedback</span>
              <h3 className="text-2xl font-bold ours-title mt-2 mb-4">What early users say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm ours-title font-semibold">&ldquo;Meeting recap time dropped significantly.&rdquo;</p>
                  <p className="text-xs ours-muted mt-2">Operations Team</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm ours-title font-semibold">&ldquo;Sermon note saving is the most practical part.&rdquo;</p>
                  <p className="text-xs ours-muted mt-2">Field Ministry User</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm ours-title font-semibold">&ldquo;Domain terms break less than before.&rdquo;</p>
                  <p className="text-xs ours-muted mt-2">Clinical Consultation Desk</p>
                </div>
              </div>
            </div>
          </div>
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={MALLOG24_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-btn-primary font-semibold rounded-2xl transition-all duration-200"
                  >
                    Get started with mallog24
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href={MALLOG24_GUIDE_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    View Usage Guide
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6m-7 4h8m-8 4h8m-8 4h5M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </Link>
                  <a
                    href={BUSINESS_MAILTO}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    Business Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href={ONE_TO_ONE_MAILTO}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    1:1 Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 3V8a2 2 0 012-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ours-footer">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
              <span className="text-sm font-bold ours-title">OURS</span>
              <Link href={MALLOG24_INFO_URL} className="inline-flex items-center transition-opacity hover:opacity-80">
                <Mallog24Logo className="h-5 w-auto" />
              </Link>
              <Link href="/privacy-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Terms of Service
              </Link>
              <Link href="/company-policy-en" className="text-sm ours-muted hover:opacity-85 transition-colors">
                Company Policy
              </Link>
              <Link href={MALLOG24_GUIDE_URL} className="text-sm ours-muted hover:opacity-85 transition-colors">
                mallog24 Usage Guide
              </Link>
              <a href={BUSINESS_MAILTO} className="text-sm ours-muted hover:opacity-85 transition-colors">
                Business Inquiry
              </a>
              <a href={ONE_TO_ONE_MAILTO} className="text-sm ours-muted hover:opacity-85 transition-colors">
                1:1 Inquiry
              </a>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs ours-muted">
                Company Name: {BUSINESS_NAME}
              </p>
              <p className="text-xs ours-muted mt-1">
                Business Registration No.: {BUSINESS_REG_NUMBER}
              </p>
              <p className="text-xs ours-muted mt-1">
                Landline: {LANDLINE_PHONE}
              </p>
              <p className="text-xs ours-muted mt-1">
                Business Address: {BUSINESS_ADDRESS}
              </p>
              <p className="text-xs ours-muted mt-1">
                Representative (CEO): {REPRESENTATIVE_NAME}
              </p>
              <p className="text-xs ours-muted mt-1">
                E-commerce Registration No.: {ECOMMERCE_REG_NUMBER}
              </p>
              <p className="text-xs ours-muted mt-1">
                Business Inquiry Email: {BUSINESS_EMAIL}
              </p>
              <p className="text-xs ours-muted mt-1">
                1:1 Inquiry Email: {BUSINESS_EMAIL}
              </p>
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
