import Head from 'next/head'
import Link from 'next/link'

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
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Last updated: February 20, 2026</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Company Policy</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              OURS follows these operating principles to provide a reliable AI speech documentation service.
            </p>
          </div>

          <Section title="1. Service Principles">
            <ul className="list-disc pl-5 space-y-1">
              <li>Keep workflows simple so users can move from recording to reusable notes quickly.</li>
              <li>Prioritize security, stability, and transcript quality in product decisions.</li>
            </ul>
          </Section>

          <Section title="2. Data Minimization">
            <ul className="list-disc pl-5 space-y-1">
              <li>Process only the minimum data required to provide core features.</li>
              <li>Original audio files are handled in temporary storage and removed promptly after processing by policy.</li>
            </ul>
          </Section>

          <Section title="3. Quality and Accuracy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Outputs are machine-generated and should be reviewed before final business use.</li>
              <li>Domain-specific prompting and terminology dictionaries are continuously refined.</li>
            </ul>
          </Section>

          <Section title="4. Security and Access Control">
            <ul className="list-disc pl-5 space-y-1">
              <li>HTTPS transport, token verification, and least-privilege access are baseline controls.</li>
              <li>Abuse signals are monitored; suspicious usage may be rate-limited or blocked.</li>
            </ul>
          </Section>

          <Section title="5. AI Ethics and Responsible Use">
            <ul className="list-disc pl-5 space-y-1">
              <li>Uploaded data is not used outside service-delivery purposes.</li>
              <li>Reported illegal or rights-infringing use is reviewed and handled under internal policy.</li>
            </ul>
          </Section>

          <Section title="6. Support and Policy Communication">
            <ul className="list-disc pl-5 space-y-1">
              <li>Support contact: ours113814@gmail.com</li>
              <li>Material policy updates are announced on web pages or in-app notices.</li>
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
