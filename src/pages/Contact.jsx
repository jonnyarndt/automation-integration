import { useState } from 'react'
import Footer from '../components/Footer'

const WORKER_URL = import.meta.env.VITE_CONTACT_WORKER_URL

const INITIAL = { firstName: '', lastName: '', email: '', org: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!WORKER_URL) {
      setErrorMsg('Contact endpoint not configured. Please reach out via email directly.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const payload = await res.json()
      if (res.ok && payload.success) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setErrorMsg(payload.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <p className="page-eyebrow">Contact Us</p>
        <h1 className="page-title">Let's Start a Conversation</h1>
        <p className="page-sub">Have a question or ready to get started? We'd love to hear from you.</p>
        <div className="page-divider" />
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="form-card">
              <div className="form-title">Send Us a Message</div>
              <div className="form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </div>

              {status === 'success' ? (
                <div style={{
                  padding: '32px', textAlign: 'center',
                  border: '1px solid rgba(59,159,220,0.3)', borderRadius: 'var(--radius)',
                  background: 'rgba(59,159,220,0.05)',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Message Sent</div>
                  <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
                    Thank you for reaching out. We'll be in touch within 1–2 business days.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" className="form-input" type="text"
                      placeholder="John" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" className="form-input" type="text"
                      placeholder="Smith" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" className="form-input" type="email"
                    placeholder="john@yourcompany.com" value={form.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="org">Organization / Business Name</label>
                  <input id="org" name="org" className="form-input" type="text"
                    placeholder="Your Company, LLC" value={form.org} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" className="form-select form-input"
                    value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select a service...</option>
                    <option>Infrastructure Management</option>
                    <option>Managed Service Provider</option>
                    <option>Network Management</option>
                    <option>General Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-textarea"
                    placeholder="Tell us about your organization and what you're looking for..."
                    value={form.message} onChange={handleChange} required />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#e05c5c', fontSize: '13px', marginBottom: '12px' }}>{errorMsg}</p>
                )}

                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                <p className="form-note">We typically respond within 1–2 business days.</p>
              </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="info-sidebar">

              <div className="response-card">
                <div className="response-icon">💬</div>
                <div>
                  <div className="response-title">We're here to help</div>
                  <p className="response-desc">
                    Whether you have a quick question or are ready to move forward, reach out — no
                    commitment required.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-title">Contact Information</div>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div>
                      <div className="info-label">Email</div>
                      <div className="info-value">
                        <a href="mailto:jonathan@automation-integration.com">
                          jonathan@automation-integration.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <div className="info-label">Address</div>
                      <div className="info-value">
                        2416 118th Dr NE<br />Lake Stevens, WA 98258
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div>
                      <div className="info-label">Business Hours</div>
                      <div className="info-value-muted">
                        Mon–Fri &nbsp;8:00 AM – 5:00 PM PT<br />
                        Emergency support available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <span className="map-icon">🗺️</span>
                <span className="map-location">Lake Stevens, WA 98258</span>
              </div>

              <div className="info-card" style={{ background: 'transparent' }}>
                <div className="info-card-title">Service Area</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.7' }}>
                  Primarily serving <strong style={{ color: 'var(--text)' }}>Snohomish County</strong> and
                  the greater <strong style={{ color: 'var(--text)' }}>Seattle metro area</strong>.
                  Remote IT support available nationwide.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
