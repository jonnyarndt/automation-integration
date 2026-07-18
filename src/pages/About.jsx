import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <p className="page-eyebrow">About Us</p>
        <h1 className="page-title">Driven by Technology. Built on Trust.</h1>
        <p className="page-sub">
          A technology partner committed to delivering reliable, scalable IT solutions to
          organizations of every size.
        </p>
        <div className="page-divider" />
      </div>

      {/* MISSION */}
      <section>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-visual">
              <img className="mission-visual-logo" src={logo} alt="A&amp;I Logo" />
              <span className="mission-visual-text">Automation &amp; Integration, LLC</span>
            </div>
            <div className="mission-content">
              <div>
                <p className="section-eyebrow">Our Mission</p>
                <h2 className="section-title" style={{ marginBottom: '24px' }}>
                  Technology that works as hard as you do.
                </h2>
              </div>
              <p>
                At <strong>Automation &amp; Integration, LLC</strong>, our mission is simple: keep your
                organization running with technology that is reliable, secure, and invisible when it
                should be. We specialize in managed IT services designed to eliminate friction — so your
                team can focus on what matters most.
              </p>
              <p>
                Based in <strong>Lake Stevens, WA</strong>, we serve a wide range of clients from small
                businesses and non-profits to restaurants, coffee houses, and residences — bringing
                enterprise-grade thinking to every engagement, regardless of size.
              </p>
              <p>
                We believe that good IT infrastructure is not a luxury — it's a foundation. And we're
                here to build it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-eyebrow">Our Values</p>
            <h2 className="section-title">What We Stand For</h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--accent)', margin: '16px auto 0' }} />
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🔒</span>
              <div className="value-title">Security</div>
              <p className="value-desc">
                Security is not an afterthought — it's built into every recommendation, deployment, and
                policy we deliver. Your data and your users stay protected.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <div className="value-title">Partnership</div>
              <p className="value-desc">
                We're not a vendor you call when something breaks. We're a long-term partner invested in
                your goals, your growth, and your success.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">⚡</span>
              <div className="value-title">Reliability</div>
              <p className="value-desc">
                Consistent, dependable service you can count on. When issues arise — and they do — we
                respond quickly and resolve them thoroughly.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">📈</span>
              <div className="value-title">Scalability</div>
              <p className="value-desc">
                Solutions built to grow with you. Whether you're a one-person shop today or a multi-site
                organization tomorrow, we architect for where you're going.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">💡</span>
              <div className="value-title">Clarity</div>
              <p className="value-desc">
                No jargon, no upsells, no confusion. We explain what we do, why we do it, and what it
                means for your organization — in plain language.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎯</span>
              <div className="value-title">Precision</div>
              <p className="value-desc">
                We take the time to understand your environment before we recommend anything. Every
                solution is tailored — never one-size-fits-all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-grid">
            <div>
              <p className="section-eyebrow" style={{ marginBottom: '12px' }}>How We Work</p>
              <h2 className="section-title" style={{ marginBottom: '40px' }}>Our Approach</h2>
              <div className="approach-steps">
                <div className="approach-step">
                  <span className="step-num">01</span>
                  <div>
                    <div className="step-title">Discover</div>
                    <p className="step-desc">
                      We start by listening — understanding your current environment, pain points, and
                      goals before making a single recommendation.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-num">02</span>
                  <div>
                    <div className="step-title">Design</div>
                    <p className="step-desc">
                      We architect a solution tailored to your specific needs, budget, and future growth
                      — not a template pulled off a shelf.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-num">03</span>
                  <div>
                    <div className="step-title">Deploy</div>
                    <p className="step-desc">
                      Clean implementation with minimal disruption to your operations. We handle the
                      heavy lifting so you don't have to.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <span className="step-num">04</span>
                  <div>
                    <div className="step-title">Support</div>
                    <p className="step-desc">
                      Ongoing monitoring, management, and responsive support — we stay engaged well
                      beyond the initial deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="approach-aside">
              <div className="aside-block">
                <h3>Local Roots, Modern Reach</h3>
                <p>
                  We're a Washington-based company with the tools, infrastructure, and expertise to
                  support clients remotely or on-site — wherever you are.
                </p>
              </div>
              <div className="aside-block">
                <h3>No Long-Term Lock-In</h3>
                <p>
                  We earn your trust by delivering results — not by locking you into contracts. Our
                  relationships are built on performance, not obligation.
                </p>
              </div>
              <div className="aside-block">
                <h3>Certified &amp; Current</h3>
                <p>
                  Our team stays current with the latest technologies, threats, and best practices —
                  so you always benefit from up-to-date expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <div className="area-band">
        <div className="container">
          <h2>Serving the Pacific Northwest &amp; Beyond</h2>
          <p>
            Headquartered in Lake Stevens, WA — supporting clients locally and remotely across
            Washington State and the surrounding region.
          </p>
          <div className="area-pills">
            <span className="area-pill primary">Lake Stevens, WA</span>
            <span className="area-pill">Everett, WA</span>
            <span className="area-pill">Marysville, WA</span>
            <span className="area-pill">Snohomish County</span>
            <span className="area-pill">Seattle Metro</span>
            <span className="area-pill">Remote — Nationwide</span>
          </div>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container">
          <h2>Let's build something reliable.</h2>
          <p>
            Reach out today and let's talk about how we can support your organization's IT needs.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
