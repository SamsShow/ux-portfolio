import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}

const logoCard = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  backgroundColor: '#161616',
  borderRadius: 16,
  padding: '20px 28px',
}

const navLinks = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  backgroundColor: '#161616',
  borderRadius: 16,
  padding: '20px 28px',
}

const dot = {
  width: 10,
  height: 10,
  backgroundColor: '#4A9EFF',
  borderRadius: '50%',
}

export default function Navbar() {
  const location = useLocation()

  const links = [
    { label: 'Work', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      style={navStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={logoCard}>
        <div style={dot} />
        <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 14, color: '#FFFFFF', letterSpacing: '0.04em' }}>
          SAKSHAM'S PORTFOLIO
        </span>
      </Link>
      <div style={navLinks}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            style={{
              fontFamily: "'Inter'",
              fontWeight: 400,
              fontSize: 13,
              color: location.pathname === link.path ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
