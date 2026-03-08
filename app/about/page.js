export default function AboutPage() {
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
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>About</h1>
        <p style={{ color: '#d4d4d8', lineHeight: 1.7, marginBottom: 20 }}>
          GrowthAuditKit Pet Affiliate Scanner helps pet affiliate marketers catch high-commission deals before the window closes.
        </p>

        <section style={{ display: 'grid', gap: 14 }}>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>What we do</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              We monitor affiliate networks for pet product deals, coupons, and flash sales — then deliver real-time alerts so you never miss a commission opportunity.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Who it's for</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              Pet niche affiliate marketers who want automated deal detection, broken link alerts, and a clean dashboard to track active opportunities across networks.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Contact</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              Questions or feedback? Reach us at support@growthauditkit.com.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
