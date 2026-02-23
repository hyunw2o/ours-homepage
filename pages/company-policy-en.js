import Head from 'next/head'
import Link from 'next/link'

const LEGAL_DOC_VERSION = process.env.NEXT_PUBLIC_LEGAL_DOC_VERSION || 'v2026.02.23'

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

export default function CompanyPolicyEn({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - Company Policy</title>
        <meta name="description" content="OURS operational company policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/company-policy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              KR
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Last updated: February 23, 2026 · Doc version: {LEGAL_DOC_VERSION}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Company Policy</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS operates mallog24 under clear standards for reliability, security, and responsible AI use.
            </p>
          </div>

          <Section title="1. Product Operating Principles">
            <ul className="list-disc pl-5 space-y-1">
              <li>Keep workflows simple so users can quickly turn audio into reusable records.</li>
              <li>Prioritize transcript quality, security, and stability in roadmap decisions.</li>
            </ul>
          </Section>

          <Section title="2. Data Governance">
            <ul className="list-disc pl-5 space-y-1">
              <li>Process only the minimum data required to deliver core functionality.</li>
              <li>Source audio is handled in temporary storage and removed after processing by default policy.</li>
              <li>Role-based access control and audit logging are maintained for operational accountability.</li>
            </ul>
          </Section>

          <Section title="3. Security Operations">
            <ul className="list-disc pl-5 space-y-1">
              <li>Baseline controls include HTTPS, token verification, role separation, and request throttling.</li>
              <li>We monitor abuse patterns and security events with defined response procedures.</li>
              <li>During incidents, containment, analysis, and recovery steps are executed through internal playbooks.</li>
            </ul>
          </Section>

          <Section title="4. Quality and Accuracy Policy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Outputs are machine-generated; user review is recommended before final business use.</li>
              <li>Domain-specific prompts and terminology dictionaries are continuously refined.</li>
              <li>Quality issues are prioritized using reproducible logs and impact-based triage.</li>
            </ul>
          </Section>

          <Section title="5. Responsible AI Use">
            <ul className="list-disc pl-5 space-y-1">
              <li>Uploaded data is processed only for requested product functionality.</li>
              <li>Reported illegal or rights-infringing use may result in review and account/content restrictions.</li>
              <li>We do not expand sensitive-data usage beyond disclosed service scope without explicit notice.</li>
            </ul>
          </Section>

          <Section title="6. Paid Product Registration and Change Governance">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Before launch/change, we finalize product name, price, billing cycle, refund rules, and support contact as mandatory fields.</li>
              <li>We cross-check that payment-provider dashboard values match pricing and legal pages.</li>
              <li>Live billing is enabled only after test transactions (success/cancel/failure/refund) and log verification pass.</li>
              <li>Any material change is announced with reason, effective date, and document version.</li>
            </ol>
          </Section>

          <Section title="7. Support and Policy Communication">
            <ul className="list-disc pl-5 space-y-1">
              <li>Support contact: ours113814@gmail.com</li>
              <li>Major policy, feature, or incident notices are provided on web pages or in-app alerts.</li>
              <li>Security-related inquiries are handled with priority.</li>
            </ul>
          </Section>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/privacy-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="/en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
