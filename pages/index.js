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
const MALLOG24_INFO_URL = '/mallog24'
const MALLOG24_GUIDE_URL = '/mallog24-guide'
const MALLOG24_PRICING_URL = `${MALLOG24_URL}/pricing`
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.mallog24.app&pcampaignid=web_share'
const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'OURS'
const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const LANDLINE_PHONE = process.env.NEXT_PUBLIC_REPRESENTATIVE_PHONE || process.env.NEXT_PUBLIC_LANDLINE_PHONE || '010-4798-3619'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || '김현우'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 경기도 광주시 초월읍 무들로 28'
const ECOMMERCE_REG_NUMBER = process.env.NEXT_PUBLIC_ECOMMERCE_REG_NUMBER || '제 2026-경기광주-0442 호'
const TRADEMARK_APPLICATION_NO = process.env.NEXT_PUBLIC_TRADEMARK_APPLICATION_NO || '40-2026-0040381'
const COPYRIGHT_REGISTRATION_NO = process.env.NEXT_PUBLIC_COPYRIGHT_REGISTRATION_NO || '제 C-2026-013549 호'
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'ours113814@gmail.com'
const HOURS_PROCESSED = process.env.NEXT_PUBLIC_LANDING_STATS_HOURS_PROCESSED || '집계 준비 중'
const BETA_USERS = process.env.NEXT_PUBLIC_LANDING_STATS_BETA_USERS || '확장 중'
const AVG_TURNAROUND = process.env.NEXT_PUBLIC_LANDING_STATS_AVG_TURNAROUND_KO || '60분 음성 기준 평균 3~5분'
const TIME_SAVING = process.env.NEXT_PUBLIC_LANDING_STATS_TIME_SAVING_KO || '수기 정리 대비 약 80% 시간 절감'
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
              href={MALLOG24_GUIDE_URL}
              className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors"
            >
              사용 가이드
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
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors"
            >
              앱 다운로드
            </a>
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

            <h1 className="ours-hero-title mb-5">
              녹음만 올리세요.<br className="hidden sm:block" />
              바로 쓸 수 있는 <span className="ours-gradient-word">구조화 문서가</span><br />나옵니다.
            </h1>

            <p className="text-base sm:text-xl ours-muted max-w-2xl mx-auto mb-14 leading-relaxed">
              설교, 회의, 통화에 특화된 2단계 엔진(Whisper + Gemini)으로
              전사, 교정, 요약, 기록본 저장까지 한 번에 처리합니다.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">무료 월 10시간</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">Pro 월 8,800원(VAT 포함) 무제한</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold ours-chip">오픈 베타 운영 중</span>
            </div>

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
                href={MALLOG24_PRICING_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                요금제 보기
              </a>
              <Link
                href={MALLOG24_GUIDE_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                사용 가이드
              </Link>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 ours-btn-secondary font-semibold rounded-2xl transition-all duration-200"
              >
                앱 다운로드
              </a>
            </div>
          </div>
        </section>

        <section className="pb-6 sm:pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">How it works</span>
              <h2 className="ours-section-title mt-2">몰입 없이도 이해되는 3단계 흐름</h2>
              <p className="ours-section-copy">
                mallog24는 업로드부터 결과 문서 저장까지 한 흐름으로 설계되어 있습니다.
                첫 방문자도 어떤 결과를 받는지 바로 이해할 수 있어야 합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                {[
                  ['1. 파일 업로드', '브라우저에서 먼저 음성 길이를 확인하고, 무료 한도 초과 여부를 즉시 안내합니다.'],
                  ['2. AI 전사 + 교정', 'Whisper와 Gemini가 화자, 문맥, 전문 용어를 함께 반영해 텍스트를 정리합니다.'],
                  ['3. 구조화 문서 저장', 'TXT, DOCX, 기록본 저장까지 같은 화면에서 이어집니다.'],
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
              <h2 className="ours-section-title mt-2">Before 음성 문장 → After 구조화 결과</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-muted mb-2">Before</p>
                  <p className="text-sm ours-muted leading-relaxed">
                    &ldquo;지난 주 광고 예산은 15% 초과됐고, 다음 주까지 수정안 다시 공유해주세요.&rdquo;
                  </p>
                  <p className="text-xs ours-muted mt-3">
                    &ldquo;진료 후 복약 설명은 1일 2회로 정리해서 보호자에게 문자로 보내겠습니다.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs font-semibold ours-muted mb-2">After</p>
                  <p className="text-sm font-semibold ours-title mb-2">회의 기록 요약</p>
                  <ul className="text-xs ours-muted space-y-1 leading-relaxed">
                    <li>- 안건: 광고 예산 초과(15%)</li>
                    <li>- 결정: 다음 주 수정안 재공유</li>
                    <li>- 후속 조치: 담당자 일정 재배정</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">Pricing</span>
              <h3 className="text-xl font-bold ours-title mt-2">가입 전에 확인하는 요금</h3>
              <div className="rounded-2xl ours-soft-card p-4 mt-4">
                <p className="text-xs ours-muted">Free</p>
                <p className="text-lg font-bold ours-title mt-1">월 10시간</p>
                <p className="text-xs ours-muted mt-2">전사 + 교정 + 기록본 저장 기본 제공</p>
              </div>
              <div className="rounded-2xl ours-soft-card p-4 mt-3">
                <p className="text-xs ours-muted">Pro</p>
                <p className="text-lg font-bold ours-title mt-1">월 8,800원(VAT 포함) / 무제한</p>
                <p className="text-[11px] ours-muted mt-1">공급가 8,000원 + 부가세 10%(800원)</p>
                <p className="text-xs ours-muted mt-2">우선 처리 + 고빈도 사용 팀 권장</p>
              </div>
              <a
                href={MALLOG24_PRICING_URL}
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold ours-link"
              >
                요금제 자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 mt-4">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">Operational facts</span>
              <h3 className="text-2xl font-bold ours-title mt-2 mb-4">가입 전에 확인할 수 있는 운영 기준</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs ours-muted">누적 처리 시간</p>
                  <p className="text-base ours-title font-semibold mt-2">{HOURS_PROCESSED}</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs ours-muted">베타 사용자</p>
                  <p className="text-base ours-title font-semibold mt-2">{BETA_USERS}</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs ours-muted">평균 처리 속도</p>
                  <p className="text-base ours-title font-semibold mt-2">{AVG_TURNAROUND}</p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-xs ours-muted">시간 절감 효과</p>
                  <p className="text-base ours-title font-semibold mt-2">{TIME_SAVING}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm ours-title font-semibold">원본 음성은 임시 처리 후 삭제</p>
                  <p className="text-xs ours-muted mt-2 leading-relaxed">
                    업로드된 원본 음성 파일은 변환 목적의 임시 저장 후 지체 없이 삭제하는 정책으로 운영합니다.
                  </p>
                </div>
                <div className="rounded-2xl ours-soft-card p-4">
                  <p className="text-sm ours-title font-semibold">무료 검증 후 유료 전환</p>
                  <p className="text-xs ours-muted mt-2 leading-relaxed">
                    월 10시간까지는 결제 없이 테스트할 수 있고, 반복 실무에 맞는 경우에만 Pro로 전환하면 됩니다.
                  </p>
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
              <h2 className="ours-section-title">정돈된 기록 흐름을 만드는 핵심 기능</h2>
              <p className="ours-section-copy">
                복잡한 기능 설명보다 실제 업무 흐름에 맞춘 카드 구성으로 필요한 기능을<br />빠르게 이해하고 바로 시작할 수 있도록 설계했습니다.
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
                      AI 기반 음성 인식 도구. 음성 파일을 올리면, 정돈된 녹취록을 받아보세요.<br />
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
                  Whisper + Gemini 2단계 엔진으로 높은 정확도의 음성 인식.<br />저음질 오디오도 문맥 기반으로 복원합니다.
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
                  전문 용어 사전 + AI 교정으로<br />의료, 교회, 일반 용어를 정확하게 변환합니다.
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
                      설교, 통화, 회의 등 상황에 최적화된 프롬프트로<br />더 정확한 결과를 제공합니다.
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
                  긴 음성 파일도 몇 분 안에 처리.<br />자동 분할 + 병렬 처리로 빠르게 결과를 받아보세요.
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
                  한국어와 영어 모두 지원.<br />각 언어에 최적화된 용어 사전과 교정 로직을 적용합니다.
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
                  TXT, Word 형식으로 내보내기.<br />클립보드 복사와 주보용 요약 생성도 지원합니다.
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
                  <Link
                    href={MALLOG24_GUIDE_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    사용 가이드 보기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6m-7 4h8m-8 4h8m-8 4h5M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </Link>
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
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 ours-cta-ghost-btn font-semibold rounded-2xl transition-all duration-200"
                  >
                    앱 다운로드
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

        <section className="pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-7">
              <span className="ours-section-kicker">FAQ</span>
              <h2 className="ours-section-title mt-2">도입 전에 자주 묻는 질문</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  ['음성 파일은 얼마나 보관되나요?', '원본 음성은 변환 목적의 임시 처리 후 삭제하고, 결과 텍스트와 기록본만 계정 기능 범위 안에서 관리합니다.'],
                  ['영어 음성도 지원하나요?', '한국어와 영어를 지원하며, 업로드 전에 언어를 직접 선택할 수 있습니다.'],
                  ['여러 화자 구분이 가능한가요?', '회의/통화 유형에서는 화자 구분 형식을 우선 적용합니다. 발화가 겹치지 않을수록 품질이 더 좋아집니다.'],
                  ['결제 전에 무료 검증이 가능한가요?', '가능합니다. 무료 플랜으로 월 10시간까지 실제 업로드와 구조화 결과를 확인한 뒤 Pro로 전환할 수 있습니다.'],
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
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
              <span className="text-sm font-bold ours-title">OURS</span>
              <Link href={MALLOG24_INFO_URL} className="inline-flex items-center transition-opacity hover:opacity-80">
                <Mallog24Logo className="h-5 w-auto" />
              </Link>
              <Link href="/privacy" className="text-sm ours-muted hover:opacity-85 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-sm ours-muted hover:opacity-85 transition-colors">
                이용약관
              </Link>
              <Link href="/company-policy" className="text-sm ours-muted hover:opacity-85 transition-colors">
                회사 정책
              </Link>
              <Link href={MALLOG24_GUIDE_URL} className="text-sm ours-muted hover:opacity-85 transition-colors">
                mallog24 사용 가이드
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
                상호: {BUSINESS_NAME}
              </p>
              <p className="text-xs ours-muted mt-1">
                사업자등록번호: {BUSINESS_REG_NUMBER}
              </p>
              <p className="text-xs ours-muted mt-1">
                대표자 전화번호: {LANDLINE_PHONE}
              </p>
              <p className="text-xs ours-muted mt-1">
                사업장 주소: {BUSINESS_ADDRESS}
              </p>
              <p className="text-xs ours-muted mt-1">
                대표: {REPRESENTATIVE_NAME}
              </p>
              <p className="text-xs ours-muted mt-1">
                통신판매신고번호: {ECOMMERCE_REG_NUMBER}
              </p>
              <p className="text-xs ours-muted mt-1">
                상표 출원번호: {TRADEMARK_APPLICATION_NO}
              </p>
              <p className="text-xs ours-muted mt-1">
                저작권 등록번호: {COPYRIGHT_REGISTRATION_NO}
              </p>
              <p className="text-xs ours-muted mt-1">
                비즈니스 문의 이메일: {BUSINESS_EMAIL}
              </p>
              <p className="text-xs ours-muted mt-1">
                1:1 문의 이메일: {BUSINESS_EMAIL}
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
