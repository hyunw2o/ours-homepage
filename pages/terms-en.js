import Head from 'next/head'
import Link from 'next/link'

const LEGAL_DOC_VERSION = process.env.NEXT_PUBLIC_LEGAL_DOC_VERSION || 'v2026.05.23'

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
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Effective date: May 23, 2026 · Doc version: {LEGAL_DOC_VERSION}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              These Terms define rights and responsibilities for using mallog24 web and mobile services operated by OURS.
            </p>
          </div>

          <Section title="1. Scope">
            <p>These Terms apply to all users of mallog24 features, support channels, and related notices.</p>
          </Section>

          <Section title="2. Accounts and Authentication">
            <ul className="list-disc pl-5 space-y-1">
              <li>Users must provide accurate information and must not use another person&apos;s account without authorization.</li>
              <li>The service may provide email sign-in and external authentication through Google, Kakao, Apple ID, and other supported providers.</li>
              <li>Users are responsible for account credentials, session security, and sign-in devices.</li>
              <li>We may request additional verification or apply restrictions when suspicious activity is detected.</li>
            </ul>
          </Section>

          <Section title="3. Service Features and Characteristics">
            <ul className="list-disc pl-5 space-y-1">
              <li>The service includes audio upload, transcription, correction, summarization, and structured note storage on web, Android, and iOS apps.</li>
              <li>External APIs may be used, and response time or output quality may vary accordingly.</li>
              <li>Features and UX may change to improve quality, reliability, and security.</li>
            </ul>
          </Section>

          <Section title="4. Plans, Product Information, and Billing">
            <ul className="list-disc pl-5 space-y-1">
              <li>Free plans are subject to announced monthly usage limits.</li>
              <li>Paid product details are disclosed in the service UI (e.g., product name, monthly fee, service period, included features).</li>
              <li>Current paid plan baseline: <strong>mallog24 Pro Monthly Subscription (KRW 8,800/month, VAT included)</strong>, auto-renewed every month from payment approval time.</li>
              <li>On iOS, mallog24 Pro may be purchased through Apple App Store in-app subscriptions. Final pricing is displayed based on the user&apos;s App Store country/region and Apple checkout.</li>
              <li>Web/Android billing and iOS App Store subscriptions may differ in checkout path, cancellation method, and refund process.</li>
              <li>Payments and refunds follow applicable law, payment provider rules, and Apple App Store policies.</li>
            </ul>
          </Section>

          <Section title="5. Checkout and Subscription Registration Flow">
            <ol className="list-decimal pl-5 space-y-1">
              <li>The user logs in and selects a plan from the pricing page or app settings.</li>
              <li>On web/Android, the payment provider checkout displays product name, amount, billing cycle, payment method, and terms. On iOS, the Apple checkout sheet provides the purchase confirmation.</li>
              <li>Once payment is approved, subscription is activated immediately and billing period starts.</li>
              <li>To stop renewal, the user must cancel from the relevant platform&apos;s subscription management before the next billing date.</li>
            </ol>
          </Section>

          <Section title="6. Refund Policy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Full refund may be requested within 7 days after payment if no usage has occurred.</li>
              <li>If usage exists, partial refunds for the current cycle may be limited; cancellation takes effect from the next cycle.</li>
              <li>Duplicate charges or verified billing errors are fully refunded after verification.</li>
              <li>Refund requests and approval for Apple App Store in-app subscriptions follow Apple&apos;s policies and customer support process.</li>
              <li>Refund settlement timing depends on payment provider/card issuer policies.</li>
              <li>Mandatory consumer protection laws prevail over this policy where applicable.</li>
            </ul>
          </Section>

          <Section title="7. Product Registration and Change Procedure">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Before launch, we internally review paid-product name, price, billing cycle, refund rules, and support contact.</li>
              <li>The same values are registered in the payment provider dashboard or App Store Connect and cross-checked against checkout/Apple purchase UI and legal pages.</li>
              <li>After registration, we run test transactions (success/cancel/failure/refund) before enabling live billing.</li>
              <li>When product data changes, reason, effective date, and document version are announced in advance when material.</li>
            </ol>
          </Section>

          <Section title="8. Responsibility for Uploaded Content">
            <ul className="list-disc pl-5 space-y-1">
              <li>You must have lawful rights or permission to upload and process source audio/content.</li>
              <li>You must not upload content that infringes privacy, copyright, portrait rights, or other third-party rights.</li>
              <li>We may block or remove content when required by law or verified rights-infringement reports.</li>
            </ul>
          </Section>

          <Section title="9. Prohibited Conduct">
            <ul className="list-disc pl-5 space-y-1">
              <li>Unlawful content, malware distribution, abuse/attacks, bypass attempts, and abnormal automated traffic</li>
              <li>Reverse engineering, unauthorized resale, and policy circumvention</li>
              <li>Any conduct that harms service trust, operations, or third-party rights</li>
            </ul>
          </Section>

          <Section title="10. Suspension and Appeal Process">
            <ul className="list-disc pl-5 space-y-1">
              <li>Accounts may be restricted for policy violations or security threats, generally with prior notice.</li>
              <li>For urgent security incidents, immediate restriction may be applied with post-notification.</li>
              <li>Users may submit appeals through support email for review.</li>
            </ul>
          </Section>

          <Section title="11. Intellectual Property">
            <p>
              Service software, brand assets, and documentation belong to OURS. Ownership of uploaded source content remains with the user or lawful rights holder.
            </p>
          </Section>

          <Section title="12. Disclaimer and Limitation of Liability">
            <ul className="list-disc pl-5 space-y-1">
              <li>We are not liable for force majeure, telecom failures, or third-party API outages beyond our control.</li>
              <li>Generated outputs are assistive; users are responsible for final review and business/legal use.</li>
            </ul>
          </Section>

          <Section title="13. Changes to Terms">
            <p>We may update these Terms and will announce effective dates and key changes on the website or in-app notice.</p>
          </Section>

          <Section title="14. Governing Law and Contact">
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
