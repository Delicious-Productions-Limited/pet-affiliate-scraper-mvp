export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#09090b',
        color: '#f4f4f5',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 20px 72px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>Terms of Service</h1>
        <p style={{ color: '#d4d4d8', lineHeight: 1.7, marginBottom: 20 }}>
          By using GrowthAuditKit Pet Affiliate Scanner you agree to the following terms.
        </p>

        <section style={{ display: 'grid', gap: 14 }}>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Service</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              Pet Affiliate Scanner provides automated deal detection and affiliate link monitoring on a subscription basis. We reserve the right to modify or discontinue the service at any time with reasonable notice.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Billing</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              Subscriptions are billed monthly via Stripe. You may cancel at any time; access continues until the end of your current billing period. Refunds are not provided for partial months.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Liability</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              The service is provided as-is. We are not liable for missed deals, inaccurate data, or any indirect damages arising from use of the scanner. Affiliate earnings depend on third-party networks outside our control.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Contact</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              For questions about these terms, email support@growthauditkit.com.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
