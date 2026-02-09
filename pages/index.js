import Head from 'next/head'
import { useEffect, useRef } from 'react'

const STTUDIO_URL = process.env.NEXT_PUBLIC_STTUDIO_URL || 'http://localhost:3000'

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
      { threshold: 0.1 }
    )

    el.style.opacity = '0'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function ScrollReveal({ children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function Home({ darkMode, setDarkMode }) {
  const productRef = useScrollReveal()
  const featuresRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <>
      <Head>
        <title>OURS - AI Technology for Everyone</title>
        <meta name="description" content="OURS builds AI tools that transform how you work. Meet STTudio, our AI-powered speech-to-text tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OURS - AI Technology for Everyone" />
        <meta property="og:description" content="OURS builds AI tools that transform how you work." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#sttudio"
              className="hidden sm:block text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              STTudio
            </a>
            <a
              href="#features"
              className="hidden sm:block text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Features
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 py-24 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-700 dark:text-brand-300">AI Technology</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              OURS
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-4">
              우리의 기술이 되다.
            </p>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
              일하는 방식을 바꾸는 AI 도구를 만듭니다.
              <br className="hidden sm:block" />
              음성에서 시작하여, 모든 말에 닿습니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={STTUDIO_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 transition-all duration-200"
              >
                STTudio 시작하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#sttudio"
                className="inline-flex items-center gap-2 px-8 py-4 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
              >
                자세히 보기
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 flex justify-center">
              <a href="#sttudio" className="animate-bounce">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Product Section - STTudio */}
        <section id="sttudio" className="py-24 sm:py-32">
          <div ref={productRef} className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left - Info */}
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 rounded-full mb-4">
                  Our First Product
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  STTudio
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  AI 기반 음성 인식 도구. 음성 파일을 올리면, 정돈된 녹취록을 받아보세요.
                  설교, 강의, 회의 등 다양한 음성 콘텐츠를 빠르고 정확하게 텍스트로 변환합니다.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    { icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', label: 'AI 음성 인식', desc: '최신 AI 모델로 정확한 음성-텍스트 변환' },
                    { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', label: '스마트 텍스트 교정', desc: '전문 용어 자동 교정 및 구조화' },
                    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: '자동 요약 생성', desc: '핵심 내용을 한눈에 파악할 수 있는 요약' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{item.label}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={STTUDIO_URL}
                  className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:gap-3 transition-all"
                >
                  STTudio 바로가기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Right - UI Mockup */}
              <div className="relative">
                <div className="animate-float">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-200 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
                    {/* Mockup header */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-2 text-xs text-slate-400 font-medium">STTudio</span>
                    </div>

                    {/* Mockup upload zone */}
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center mb-4">
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-400">Drop your audio file here</p>
                    </div>

                    {/* Mockup progress */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="w-8 h-0.5 bg-green-400 rounded" />
                      <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">2</span>
                      </div>
                      <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-700 rounded" />
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <span className="text-[10px] text-slate-400 font-bold">3</span>
                      </div>
                    </div>

                    {/* Mockup result */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 space-y-1.5">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-4/5" />
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4" />
                      <div className="h-2 bg-brand-200 dark:bg-brand-800 rounded-full w-1/4 mt-3" />
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-100 dark:bg-brand-900/20 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
          <div ref={featuresRef} className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why STTudio?
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                음성을 텍스트로 변환하는 가장 간편한 방법
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  title: '높은 정확도',
                  desc: '최신 AI 모델이 음성을 텍스트로 변환합니다. 전문 용어 교정으로 완성도를 높입니다.',
                },
                {
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  title: '빠른 처리',
                  desc: '긴 음성 파일도 몇 분 안에 처리됩니다. 업로드 후 기다리기만 하면 됩니다.',
                },
                {
                  icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                  title: '간편한 사용',
                  desc: '파일을 끌어다 놓고, 변환 버튼을 누르세요. 그게 전부입니다.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div ref={ctaRef} className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-brand-600 to-blue-600 dark:from-brand-500 dark:to-blue-500 rounded-3xl p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto mb-10">
                음성 파일을 올리고, AI가 만드는 녹취록을 경험하세요.
              </p>
              <a
                href={STTUDIO_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-brand-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                STTudio 시작하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold text-slate-900 dark:text-white">OURS</span>
              <a href={STTUDIO_URL} className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                STTudio
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
