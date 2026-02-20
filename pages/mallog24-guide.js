import Head from 'next/head'
import Link from 'next/link'
import HeaderMenuControls from '../components/HeaderMenuControls'

const MALLOG24_URL =
  process.env.NEXT_PUBLIC_MALLOG24_URL ||
  process.env.NEXT_PUBLIC_MALLOC24_URL ||
  'https://mallog24.com'
const BUSINESS_EMAIL = 'ours113814@gmail.com'
const BUSINESS_MAILTO = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('mallog24 사용 가이드 문의')}&body=${encodeURIComponent('안녕하세요 OURS 팀,\n\n가이드 관련 문의드립니다.\n')}`

function GuideStep({ number, title, body }) {
  return (
    <div className="rounded-2xl ours-soft-card p-5 sm:p-6">
      <p className="text-sm font-semibold ours-link mb-2">STEP {number}</p>
      <p className="text-xl font-bold ours-title mb-2">{title}</p>
      <p className="text-base ours-muted leading-relaxed whitespace-pre-line break-keep">{body}</p>
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

export default function Mallog24Guide({ darkMode, setDarkMode, uiTheme, setUiTheme, uiThemeMode, setUiThemeMode }) {
  return (
    <>
      <Head>
        <title>OURS - mallog24 사용 가이드</title>
        <meta name="description" content="mallog24를 빠르게 시작하고 정확도를 높이는 실전 사용 가이드입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 ours-header">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold ours-title tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/mallog24" className="hidden sm:block text-sm ours-muted hover:opacity-80 transition-colors">
              mallog24 소개
            </Link>
            <HeaderMenuControls
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              uiTheme={uiTheme}
              setUiTheme={setUiTheme}
              uiThemeMode={uiThemeMode}
              setUiThemeMode={setUiThemeMode}
              locale="kr"
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
            <h1 className="ours-section-title mb-4">mallog24 사용 가이드</h1>
            <p className="text-base sm:text-lg ours-muted leading-relaxed max-w-3xl">
              첫 사용자도 바로 적용할 수 있도록 로그인부터 업로드, 결과 검토, 기록본 저장까지<br />
              실제 사용 흐름 기준으로 정리했습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MALLOG24_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-primary font-semibold transition-opacity"
              >
                mallog24 열기
              </a>
              <a
                href={BUSINESS_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
              >
                가이드 문의하기
              </a>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-6">빠른 시작 순서</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
                <GuideStep number="1" title="로그인" body={"이메일 로그인 또는\n소셜 로그인(구글/카카오)으로 접속합니다."} />
                <GuideStep number="2" title="파일 업로드" body={"녹음 파일을 업로드하거나\n드래그앤드롭으로 추가합니다."} />
                <GuideStep number="3" title="유형 선택" body={"설교/통화/회의 중 목적에\n맞는 전사 유형을 선택합니다."} />
                <GuideStep number="4" title="변환 실행" body={"AI 전사와 교정 완료 후\n텍스트/요약 결과를 확인합니다."} />
                <GuideStep number="5" title="기록본 저장" body={"핵심 기록 초안을 생성하고\n편집 후 저장합니다."} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard title="권장 업로드 조건">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>파일 형식: mp3, wav, m4a, mp4, webm</li>
                <li>파일 크기: 최대 100MB</li>
                <li>권장 샘플링: 16kHz 이상, 너무 큰 배경 소음은 사전 제거</li>
                <li>화자 분리를 원하면 1명씩 또렷하게 말한 녹음이 유리합니다.</li>
              </ul>
            </InfoCard>
            <InfoCard title="정확도 높이는 방법">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>녹음 시작 전에 주제와 주요 고유명사를 짧게 발화해 주세요.</li>
                <li>회의에서는 발언자가 교차 발화할 때 발언 순서를 정리해 주세요.</li>
                <li>결과 확인 후 기록본 초안 기능으로 핵심만 분리 저장하면 재활용이 쉽습니다.</li>
                <li>필요 시 TXT/Word로 내보내 팀 문서 템플릿에 바로 붙여넣을 수 있습니다.</li>
              </ul>
            </InfoCard>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl ours-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold ours-title mb-4">자주 발생하는 상황</h2>
              <div className="space-y-3 text-sm ours-muted leading-relaxed">
                <p><span className="font-semibold ours-title">로그인이 느린 경우:</span> 네트워크 상태와 브라우저 캐시를 먼저 확인하고, 재로그인 후 다시 시도하세요.</p>
                <p><span className="font-semibold ours-title">전사가 멈춘 경우:</span> 파일 크기, 포맷, 업로드 상태를 확인한 뒤 다시 업로드하세요.</p>
                <p><span className="font-semibold ours-title">용어 인식이 어색한 경우:</span> 원문 텍스트를 기준으로 기록본 초안을 생성해 핵심 용어를 우선 정리해 주세요.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/mallog24"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  소개 페이지로 돌아가기
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ours-btn-secondary font-semibold transition-colors"
                >
                  개인정보처리방침 보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
