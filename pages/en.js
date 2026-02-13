import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const MALLOC24_URL = process.env.NEXT_PUBLIC_MALLOC24_URL || 'https://malloc24.vercel.app'

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
  const baseClass = `group relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5 ${span}`

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
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-slate-400 font-medium">malloc24.vercel.app</span>
      </div>

      <div className="p-5">
        {step === 0 && (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm text-slate-400">Upload audio file</p>
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
            <p className="text-xs text-slate-400 text-center">AI speech recognition in progress...</p>
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
            <p className="text-xs text-slate-400 text-center">Text refinement complete</p>
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

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - AI Technology for Everyone</title>
        <meta name="description" content="OURS builds AI tools that transform how you work. Meet malloc24, our AI-powered speech-to-text tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OURS - AI Technology for Everyone" />
        <meta property="og:description" content="OURS builds AI tools that transform how you work." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </a>
          <div className="flex items-center gap-5">
            <nav className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <Link
                href="/"
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                KR
              </Link>
              <Link
                href="/en"
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
              >
                EN
              </Link>
            </nav>
            <a
              href="#products"
              className="hidden sm:block text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href={MALLOC24_URL}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
            >
              malloc24
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          {/* Dot grid background */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Gradient blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] bg-brand-500/[0.08] dark:bg-brand-500/5 rounded-full blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Building AI Tools</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              OURS
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-4">
              Turning AI into ours.
            </p>

            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-500 max-w-lg mx-auto mb-14 leading-relaxed">
              We build AI tools that transform how people work.
              <br className="hidden sm:block" />
              Starting with speech, reaching every word.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={MALLOC24_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get started with malloc24
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-slate-600 dark:text-slate-400 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="products" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Card 1: malloc24 Hero Card (large) */}
              <BentoCard
                href={MALLOC24_URL}
                className="p-8 lg:p-10"
                span="md:col-span-2 lg:col-span-2 lg:row-span-2"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 rounded-full mb-4">
                      Our First Product
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                      malloc24
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                      AI-powered speech recognition for cleaner transcripts from any recording.
                      Convert sermons, lectures, and meetings into accurate text in minutes.
                    </p>
                  </div>

                  <div className="flex-1 flex items-end">
                    <div className="w-full max-w-md">
                      <MockupWindow />
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Open malloc24
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </BentoCard>

              {/* Card 2: AI Speech Recognition */}
              <BentoCard className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Speech Recognition</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  A two-stage Whisper + Gemini pipeline delivers high-accuracy transcription, even for low-quality audio.
                </p>
              </BentoCard>

              {/* Card 3: Smart Text Refinement */}
              <BentoCard className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Smart Text Refinement</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Domain dictionaries plus AI refinement preserve medical, church, and general terminology with precision.
                </p>
              </BentoCard>

              {/* Card 4: Multiple Transcript Types (wide) */}
              <BentoCard className="p-8" span="md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-5">
                      <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Built for Multiple Transcript Types</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      Optimized prompts for sermons, calls, and meetings improve accuracy by context.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { label: 'Sermon Transcript', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
                      { label: 'Call Record', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
                      { label: 'Meeting Record', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
                    ].map((type) => (
                      <span key={type.label} className={`px-4 py-2 rounded-xl text-sm font-medium ${type.color}`}>
                        {type.label}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>

              {/* Card 5: Fast Processing */}
              <BentoCard className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Fast Processing</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Long audio files are processed within minutes using auto-splitting and parallel handling.
                </p>
              </BentoCard>

              {/* Card 6: Korean + English */}
              <BentoCard className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Korean + English</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Supports both Korean and English with language-optimized dictionaries and correction logic.
                </p>
              </BentoCard>

              {/* Card 7: Export */}
              <BentoCard className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Flexible Exports</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Export as TXT or Word, copy to clipboard, and generate bulletin-ready summaries.
                </p>
              </BentoCard>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-slate-900 dark:bg-slate-800" />
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.4), transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3), transparent 50%)',
                }}
              />

              <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Start now
                </h2>
                <p className="text-lg text-slate-300 max-w-lg mx-auto mb-10">
                  Upload your audio and experience AI-generated transcripts.
                </p>
                <a
                  href={MALLOC24_URL}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get started with malloc24
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold text-slate-900 dark:text-white">OURS</span>
              <a href={MALLOC24_URL} className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                malloc24
              </a>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Copyright 2026. OURS All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
