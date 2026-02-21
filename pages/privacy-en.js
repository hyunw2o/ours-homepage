import Head from 'next/head'
import Link from 'next/link'

const BUSINESS_REG_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_REG_NUMBER || '696-08-03518'
const REPRESENTATIVE_NAME = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME || 'Hyunwoo Kim'
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '12735, 28 Mudeul-ro, Chowol-eup, Gwangju-si, Gyeonggi-do, Republic of Korea'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ours113814@gmail.com'
const LEGAL_DOC_VERSION = process.env.NEXT_PUBLIC_LEGAL_DOC_VERSION || 'v2026.02.21'

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

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyEn({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - Privacy Policy</title>
        <meta name="description" content="OURS Privacy Policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              KR
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Last updated: February 21, 2026 · Doc version: {LEGAL_DOC_VERSION}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS (mallog24) processes personal data in a minimal and secure manner for service delivery.
            </p>
          </div>

          <Section title="1. Personal Data We Process">
            <ul className="list-disc pl-5 space-y-1">
              <li>Account data: email, password (email login), user identifier (UID)</li>
              <li>Social login (Google, Kakao): email, name/nickname, profile image, provider identifier</li>
              <li>Service data: uploaded audio, transcript/corrected/summarized text, saved records</li>
              <li>Automatically collected data: IP, device/browser details, cookies, access/error logs</li>
            </ul>
          </Section>

          <Section title="2. Purpose of Processing">
            <ul className="list-disc pl-5 space-y-1">
              <li>Authentication, account security, and user support</li>
              <li>Core functionality: transcription, correction, summarization, record storage and retrieval</li>
              <li>Service reliability, abuse detection, incident response, and customer communication</li>
            </ul>
          </Section>

          <Section title="3. Collection Methods">
            <ul className="list-disc pl-5 space-y-1">
              <li>Information provided directly during sign-up/login and file upload</li>
              <li>Technical data generated automatically during app/web usage</li>
              <li>Data submitted through support and inquiry channels</li>
            </ul>
          </Section>

          <Section title="4. Retention and Deletion">
            <ul className="list-disc pl-5 space-y-1">
              <li>Account data: retained until account deletion, unless legal retention is required</li>
              <li>Original audio files: stored temporarily and deleted promptly after processing</li>
              <li>Transcripts and saved records: retained for product features, deleted on request/account closure</li>
              <li>Legally required records are retained only for statutory periods and then deleted</li>
            </ul>
          </Section>

          <Section title="5. Third-Party Sharing, Processors, and Overseas Processing">
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not sell or provide personal data to third parties without user consent, except when legally required.</li>
              <li>Processors: Supabase (auth/database), OpenAI (Whisper STT), Google (Gemini correction/summarization)</li>
              <li>Data may be transferred and processed on overseas infrastructure during API-based processing.</li>
            </ul>
          </Section>

          <Section title="6. Sensitive Data and Child Data Policy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Please do not upload unnecessary sensitive data (e.g., national ID numbers, financial passwords, biometrics).</li>
              <li>As a general policy, we do not intentionally collect data from children under age 14 without guardian consent.</li>
            </ul>
          </Section>

          <Section title="7. User Rights and How to Exercise">
            <ul className="list-disc pl-5 space-y-1">
              <li>You may request access, correction, deletion, or restriction of your personal data.</li>
              <li>Requests can be made via {CONTACT_EMAIL}, and we respond within a reasonable period.</li>
            </ul>
          </Section>

          <Section title="8. Cookies and Logs">
            <ul className="list-disc pl-5 space-y-1">
              <li>Cookies and logs may be used for session management, security, and product quality improvements.</li>
              <li>You can restrict cookie storage from browser/device settings.</li>
            </ul>
          </Section>

          <Section title="9. Security Measures">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTTPS encryption, token validation, least-privilege access control, and role separation</li>
              <li>Rate limiting, security headers, and log monitoring for anomaly detection</li>
              <li>Controlled access to operational accounts and periodic security checks</li>
            </ul>
          </Section>

          <Section title="10. Incident Response and Contact">
            <ul className="list-disc pl-5 space-y-1">
              <li>When a material security/privacy incident occurs, we investigate and notify users as required by law.</li>
              <li>Privacy contact and rights requests: {CONTACT_EMAIL}</li>
            </ul>
            <p className="mt-2">Business Name: OURS</p>
            <p>Business Registration No.: {BUSINESS_REG_NUMBER}</p>
            <p>Representative: {REPRESENTATIVE_NAME}</p>
            <p>Business Address: {BUSINESS_ADDRESS}</p>
            <p className="mt-2">Privacy Officer: {REPRESENTATIVE_NAME}</p>
          </Section>

          <div className="pt-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/terms-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Terms of Service
              </Link>
              <Link href="/company-policy-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Company Policy
              </Link>
              <Link href="/en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
