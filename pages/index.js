import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Mallog24Logo from '../components/Mallog24Logo'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://malloc24.vercel.app'
const MALLOG24_INFO_URL = '/mallog24'
const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || '김현우'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 경기도 광주시 초월읍 무들로 28'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('OURS 비즈니스 문의')}&body=${encodeURIComponent('안녕하세요 OURS 팀,\n\n문의 내용:\n')}`
const ONE_TO_ONE_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('OURS 1:1 문의')}&body=${encodeURIComponent('안녕하세요 OURS 팀,\n\n1:1 문의 내용:\n')}`

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
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs ours-muted font-medium">mallog24.vercel.app</span>
      </div>

      <div className="p-5">
        {step === 0 && (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full ours-soft-card flex items-center justify-center">
              <svg className="w-5 h-5 ours-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm ours-muted">음성 파일 업로드</p>
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
            <p className="text-xs ours-muted text-center">AI 음성 인식 중...</p>
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
            <p className="text-xs ours-muted text-center">텍스트 교정 완료</p>
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
              locale="kr"
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

            <h1 className="ours-hero-title ours-gradient-text mb-5">
              우리의 기술이 되다
            </h1>

            <p className="text-base sm:text-xl ours-muted max-w-2xl mx-auto mb-14 leading-relaxed">
              일하는 방식을 바꾸는 AI 도구를 만듭니다.
              <br className="hidden sm:block" />
              음성에서 시작하여, 모든 말에 닿습니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-primary font-semibold rounded-2xl transition-all duration-200"
              >
                mallog24 시작하기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={MALLOG24_INFO_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                mallog24 소개
              </a>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="products" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="ours-section-kicker">Products</span>
              <h2 className="ours-section-title">정돈된 기록 흐름을 만드는 핵심 기능</h2>
              <p className="ours-section-copy">
                복잡한 기능 설명보다 실제 업무 흐름에 맞춘 카드 구성으로 필요한 기능을 빠르게 이해하고
                바로 시작할 수 있도록 설계했습니다.
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
                      AI 기반 음성 인식 도구. 음성 파일을 올리면, 정돈된 녹취록을 받아보세요.
                      설교, 강의, 회의 등 다양한 음성 콘텐츠를 빠르고 정확하게 텍스트로 변환합니다.
                    </p>
                  </div>

                  <div className="flex-1 flex items-end">
                    <div className="w-full max-w-md">
                      <MockupWindow />
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 ours-link font-semibold text-sm group-hover:gap-3 transition-all">
                    mallog24 소개 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </BentoCard>

              {/* Card 2: AI 음성 인식 */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">AI 음성 인식</h3>
                <p className="ours-feature-copy">
                  Whisper + Gemini 2단계 엔진으로 높은 정확도의 음성 인식. 저음질 오디오도 문맥 기반으로 복원합니다.
                </p>
              </BentoCard>

              {/* Card 3: 스마트 교정 */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">스마트 텍스트 교정</h3>
                <p className="ours-feature-copy">
                  전문 용어 사전 + AI 교정으로 의료, 교회, 일반 용어를 정확하게 변환합니다.
                </p>
              </BentoCard>

              {/* Card 4: 다양한 녹취 유형 (wide) */}
              <BentoCard className="p-8" span="md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1">
                    <div className="ours-feature-icon mb-5">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="ours-feature-title">다양한 녹취 유형 지원</h3>
                    <p className="ours-feature-copy">
                      설교, 통화, 회의 등 상황에 최적화된 프롬프트로 더 정확한 결과를 제공합니다.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {['설교 녹취', '통화 기록', '회의 기록'].map((label) => (
                      <span key={label} className="ours-type-chip">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>

              {/* Card 5: 빠른 처리 */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">빠른 처리</h3>
                <p className="ours-feature-copy">
                  긴 음성 파일도 몇 분 안에 처리. 자동 분할 + 병렬 처리로 빠르게 결과를 받아보세요.
                </p>
              </BentoCard>

              {/* Card 6: 한국어 + 영어 */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">한국어 + English</h3>
                <p className="ours-feature-copy">
                  한국어와 영어 모두 지원. 각 언어에 최적화된 용어 사전과 교정 로직을 적용합니다.
                </p>
              </BentoCard>

              {/* Card 7: 내보내기 */}
              <BentoCard className="p-8">
                <div className="ours-feature-icon mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="ours-feature-title">다양한 내보내기</h3>
                <p className="ours-feature-copy">
                  TXT, Word 형식으로 내보내기. 클립보드 복사와 주보용 요약 생성도 지원합니다.
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
                  지금 바로 시작하세요
                </h2>
                <p className="ours-cta-copy mb-10">
                  음성 파일을 올리고, AI가 만드는 녹취록을 경험하세요.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={MALLOG24_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-btn-primary font-semibold rounded-2xl transition-all duration-200"
                  >
                    mallog24 시작하기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href={BUSINESS_MAILTO}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    비즈니스 문의하기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href={ONE_TO_ONE_MAILTO}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    1:1 문의하기
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
              <Link href="/privacy" className="text-sm ours-muted hover:opacity-85 transition-colors">
                개인정보처리방침
              </Link>
              <a href={BUSINESS_MAILTO} className="text-sm ours-muted hover:opacity-85 transition-colors">
                비즈니스 문의
              </a>
              <a href={ONE_TO_ONE_MAILTO} className="text-sm ours-muted hover:opacity-85 transition-colors">
                1:1 문의
              </a>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs ours-muted">
                사업자등록번호: {BUSINESS_REG_NUMBER}
              </p>
              <p className="text-xs ours-muted mt-1">
                대표자: {REPRESENTATIVE_NAME}
              </p>
              <p className="text-xs ours-muted mt-1">
                사업장 주소: {BUSINESS_ADDRESS}
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
