import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useIsMobile from '../hooks/useIsMobile'

const dot = {
  width: 10,
  height: 10,
  backgroundColor: '#4A9EFF',
  borderRadius: '50%',
}

const links = [
  { label: 'Work', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: '#161616', borderRadius: 16, padding: isMobile ? '14px 18px' : '20px 28px' }}>
        <div style={dot} />
        <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: isMobile ? 12 : 14, color: '#FFFFFF', letterSpacing: '0.04em' }}>
          {isMobile ? 'SAKSHAM' : "SAKSHAM'S PORTFOLIO"}
        </span>
      </Link>

      {isMobile ? (
        <>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ backgroundColor: '#161616', borderRadius: 16, padding: '14px 18px', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ width: 18, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(3px)' : 'none' }} />
            <div style={{ width: 18, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <div style={{ width: 18, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-3px)' : 'none' }} />
          </motion.button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{ position: 'absolute', top: '100%', right: 0, marginTop: 8, backgroundColor: '#161616', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16, zIndex: 100, minWidth: 180 }}
              >
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 15, color: location.pathname === link.path ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, backgroundColor: '#161616', borderRadius: 16, padding: '20px 28px' }}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: location.pathname === link.path ? '#FFFFFF' : 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
