import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <p className="page-eyebrow">Our Services</p>
        <h1 className="page-title">IT Solutions for Your Every Need</h1>
        <p className="page-sub">
          End-to-end managed IT services tailored to keep your organization running at its best.
        </p>
        <div className="page-divider" />
      </div>

      {/* SERVICE PANELS */}
      <section>
        <div className="container">

          {/* 1. Infrastructure */}
          <div className="service-panel">
            <div className="panel-image">
              <div className="img-placeholder">
                <span className="icon-lg">🖥️</span>
                <span className="caption">Infrastructure</span>
              </div>
            </div>
            <div className="panel-content">
              <div className="panel-number">01</div>
              <div className="panel-title">Infrastructure Management</div>
              <p className="panel-desc">
                In today's hyperconnected world, organizations are challenged to keep devices online and
                connected with minimal downtime. Your infrastructure is the spinal cord that keeps the
                body moving — without you even knowing it exists. With our end-to-end solutions, we
                ensure your day-to-day operations run without IT-related interruptions.
              </p>
              <ul className="panel-features">
                <li>Server setup, maintenance &amp; monitoring</li>
                <li>Hardware lifecycle management</li>
                <li>Patch management &amp; system updates</li>
                <li>Business continuity &amp; disaster recovery</li>
              </ul>
            </div>
          </div>

          {/* 2. MSP */}
          <div className="service-panel reverse">
            <div className="panel-image">
              <div className="img-placeholder">
                <span className="icon-lg">💻</span>
                <span className="caption">Managed Services</span>
              </div>
            </div>
            <div className="panel-content">
              <div className="panel-number">02</div>
              <div className="panel-title">Managed Service Provider</div>
              <p className="panel-desc">
                Automation &amp; Integration, LLC is your go-to MSP for all your IT needs. We offer a
                wide range of services including hardware and software support, antivirus protection,
                remote management and monitoring, and much more — so you can trust your business to keep
                running smoothly and efficiently.
              </p>
              <ul className="panel-features">
                <li>Remote management &amp; monitoring (RMM)</li>
                <li>Antivirus &amp; endpoint security</li>
                <li>Help desk &amp; IT support</li>
                <li>Software licensing &amp; procurement</li>
              </ul>
            </div>
          </div>

          {/* 3. Network */}
          <div className="service-panel">
            <div className="panel-image">
              <div className="img-placeholder">
                <span className="icon-lg">📡</span>
                <span className="caption">Network</span>
              </div>
            </div>
            <div className="panel-content">
              <div className="panel-number">03</div>
              <div className="panel-title">Network Management</div>
              <p className="panel-desc">
                Deploying cutting-edge technologies to your team is not only essential but critical for
                attaining business success. Our adaptable network management solutions empower your
                organization to collaborate and operate securely — without the need for onsite or live
                IT services. A&amp;I, LLC is dedicated to assisting you at every step.
              </p>
              <ul className="panel-features">
                <li>Wired &amp; wireless network design</li>
                <li>Firewall configuration &amp; security</li>
                <li>VPN &amp; secure remote access</li>
                <li>Network performance monitoring</li>
              </ul>
            </div>
          </div>

          {/* DIFFERENTIATORS */}
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-icon">🔒</div>
              <div className="diff-title">Security First</div>
              <p className="diff-desc">
                Every solution is built with security at its core — protecting your data and your users.
              </p>
            </div>
            <div className="diff-item">
              <div className="diff-icon">⚡</div>
              <div className="diff-title">Rapid Response</div>
              <p className="diff-desc">
                Fast, reliable support when you need it most — minimizing disruption to your operations.
              </p>
            </div>
            <div className="diff-item">
              <div className="diff-icon">📈</div>
              <div className="diff-title">Scalable</div>
              <p className="diff-desc">
                Solutions that grow with your organization — from single office to multi-site deployments.
              </p>
            </div>
            <div className="diff-item">
              <div className="diff-icon">🤝</div>
              <div className="diff-title">Dedicated Partner</div>
              <p className="diff-desc">
                We're not a vendor — we're a long-term technology partner invested in your success.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container">
          <h2>Not sure which service fits?</h2>
          <p>Let's discuss your specific needs and build a tailored solution together.</p>
          <Link to="/contact" className="btn-primary">Start the Conversation</Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
