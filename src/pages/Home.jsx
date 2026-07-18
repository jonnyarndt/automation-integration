import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img className="hero-logo" src={logo} alt="Automation &amp; Integration Logo" />
        <p className="hero-eyebrow">Managed IT Services &amp; Network Solutions</p>
        <h1 className="hero-title">
          Automation &amp; <span>Integration</span>, LLC
        </h1>
        <p className="hero-sub">
          IT Solutions for Your Every Need — from infrastructure management to full-service MSP support.
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn-primary">Our Services</Link>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-chevron" />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">24<span>/7</span></div>
              <div className="stat-label">Remote Monitoring</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3<span>+</span></div>
              <div className="stat-label">Core Service Areas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6<span>+</span></div>
              <div className="stat-label">Client Verticals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><span>∞</span></div>
              <div className="stat-label">Scalable Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
            <div className="section-divider" />
          </div>
          <div className="services-grid">
            {/* Infrastructure */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM2 14a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM6 8a1 1 0 100-2 1 1 0 000 2zm1 6a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="service-title">Infrastructure Management</div>
              <p className="service-desc">
                Keep your organization connected with minimal downtime. We build and maintain the backbone
                that keeps your business running — silently and reliably.
              </p>
              <Link to="/services" className="service-link">Learn more →</Link>
            </div>
            {/* MSP */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="service-title">Managed Service Provider</div>
              <p className="service-desc">
                Your go-to MSP for hardware and software support, antivirus protection, remote management
                and monitoring — everything to keep your business running efficiently.
              </p>
              <Link to="/services" className="service-link">Learn more →</Link>
            </div>
            {/* Network */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
                    stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="service-title">Network Management</div>
              <p className="service-desc">
                Deploy cutting-edge network technology that empowers your team to collaborate and operate
                securely — without the need for onsite or live IT services.
              </p>
              <Link to="/services" className="service-link">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Who We Serve</p>
            <h2 className="section-title">Built for Your Industry</h2>
            <div className="section-divider" />
          </div>
          <div className="verticals-grid">
            <div className="vertical-card">
              <div className="vertical-icon">🏢</div>
              <div>
                <div className="vertical-name">Small Business</div>
                <div className="vertical-desc">Scalable IT without enterprise overhead</div>
              </div>
            </div>
            <div className="vertical-card">
              <div className="vertical-icon">🤝</div>
              <div>
                <div className="vertical-name">Non-Profit Organizations</div>
                <div className="vertical-desc">Mission-driven tech that fits your budget</div>
              </div>
            </div>
            <div className="vertical-card">
              <div className="vertical-icon">⛪</div>
              <div>
                <div className="vertical-name">Place of Worship</div>
                <div className="vertical-desc">Reliable infrastructure for your community</div>
              </div>
            </div>
            <div className="vertical-card">
              <div className="vertical-icon">☕</div>
              <div>
                <div className="vertical-name">Coffee House</div>
                <div className="vertical-desc">Secure guest networks &amp; POS support</div>
              </div>
            </div>
            <div className="vertical-card">
              <div className="vertical-icon">🍽️</div>
              <div>
                <div className="vertical-name">Restaurant</div>
                <div className="vertical-desc">Connected operations from kitchen to front-of-house</div>
              </div>
            </div>
            <div className="vertical-card">
              <div className="vertical-icon">🏠</div>
              <div>
                <div className="vertical-name">Residence</div>
                <div className="vertical-desc">Smart home networking &amp; security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container">
          <h2>Ready to simplify your IT?</h2>
          <p>Let's talk about what Automation &amp; Integration, LLC can do for your organization.</p>
          <Link to="/contact" className="btn-primary">Contact Us Today</Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
