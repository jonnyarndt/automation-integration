import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand">
          <img src={logo} alt="A&amp;I Logo" />
          <span className="nav-brand-text">Automation &amp; Integration, LLC</span>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
