import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="A&amp;I" />
          <span className="footer-brand-name">Automation &amp; Integration, LLC</span>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Automation &amp; Integration, LLC. All rights reserved.</span>
        <span>
          Lake Stevens, WA&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="mailto:jonathan@automation-integration.com">
            jonathan@automation-integration.com
          </a>
        </span>
      </div>
    </footer>
  )
}
