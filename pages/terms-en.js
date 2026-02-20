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

export default function TermsEn({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>OURS - Terms of Service</title>
        <meta name="description" content="OURS Terms of Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            OURS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              KR
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <div className="text-center mb-8">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Effective date: February 20, 2026</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              These Terms govern your use of mallog24 web and mobile services provided by OURS.
            </p>
          </div>

          <Section title="1. Scope">
            <p>These Terms apply to all users of mallog24 and related support channels provided by OURS.</p>
          </Section>

          <Section title="2. Accounts and Access">
            <ul className="list-disc pl-5 space-y-1">
              <li>You must provide accurate information for sign-up and social login.</li>
              <li>You are responsible for account credentials and session security.</li>
              <li>We may apply additional verification or restrictions for suspicious activity.</li>
            </ul>
          </Section>

          <Section title="3. Service Features">
            <ul className="list-disc pl-5 space-y-1">
              <li>Audio upload, transcription, correction, summarization, and structured note storage.</li>
              <li>Features and UX may change to improve quality and security.</li>
            </ul>
          </Section>

          <Section title="4. Plans, Quotas, and Billing">
            <ul className="list-disc pl-5 space-y-1">
              <li>Free plans are subject to announced monthly usage limits.</li>
              <li>Paid plans, checkout, and billing terms are provided separately when enabled.</li>
              <li>Refund and cancellation follow applicable law and payment provider policies.</li>
            </ul>
          </Section>

          <Section title="5. User Obligations">
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not upload unlawful content or material that infringes third-party rights.</li>
              <li>Do not attempt abuse, bypass, scraping, reverse engineering, or service disruption.</li>
              <li>Do not resell or redistribute the service without prior authorization.</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              The service software, brand, and documentation belong to OURS. User ownership of uploaded source content remains with the user or lawful rights holder.
            </p>
          </Section>

          <Section title="7. Disclaimer and Limitation of Liability">
            <ul className="list-disc pl-5 space-y-1">
              <li>We are not liable for delays/failures caused by force majeure, external API outages, or telecom failures.</li>
              <li>Transcription output is an assistive tool; final review and use are your responsibility.</li>
            </ul>
          </Section>

          <Section title="8. Suspension and Termination">
            <ul className="list-disc pl-5 space-y-1">
              <li>We may suspend or terminate accounts for serious policy violations or security risks.</li>
              <li>You may request account deletion at any time.</li>
            </ul>
          </Section>

          <Section title="9. Changes to Terms">
            <p>We may update these Terms and provide notice of effective date and key changes on our website or in-app notice.</p>
          </Section>

          <Section title="10. Governing Law and Contact">
            <p>These Terms are governed by the laws of the Republic of Korea.</p>
            <p className="mt-2">Contact: ours113814@gmail.com</p>
          </Section>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/privacy-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/company-policy-en" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Company Policy
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
