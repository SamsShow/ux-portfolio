import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useIsMobile from '../hooks/useIsMobile'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
}

const card = {
  backgroundColor: '#161616',
  borderRadius: 20,
  overflow: 'hidden',
}

const testimonials = [
  {
    quote: '"Saksham transformed our product vision into an interface that users genuinely enjoy. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable."',
    name: 'Ankit Kumar',
    role: 'CPO, TechCorp',
    initials: 'AK',
    color: '#4A9EFF',
  },
  {
    quote: '"Working with Saksham was a game-changer. He didn\'t just design screens — he understood our users deeply and crafted experiences that drove real business results."',
    name: 'Priya Sharma',
    role: 'Founder, HealthSync',
    initials: 'PS',
    color: '#06D6A0',
  },
  {
    quote: '"His design system work saved us months of development time. Clean, scalable, and beautifully documented."',
    name: 'Rahul Verma',
    role: 'CTO, Razorpay',
    initials: 'RV',
    color: '#FB5607',
  },
  {
    quote: '"Saksham brings a rare combination of strategic thinking and pixel-perfect execution. A true partner, not just a designer."',
    name: 'Neha Mehta',
    role: 'VP Design, Spotify India',
    initials: 'NM',
    color: '#FF006E',
  },
  {
    quote: '"The redesign increased our conversion rate by 35%. Saksham\'s user-first approach made all the difference."',
    name: 'Deepak Gupta',
    role: 'CEO, FinFlow',
    initials: 'DG',
    color: '#FFBE0B',
    darkText: true,
  },
]

const featured = {
  quote: '"In 10 years of building products, Saksham is the best designer I\'ve ever worked with. He thinks in systems, communicates with clarity, and ships with craft."',
  name: 'Vikram Rao',
  role: 'Head of Product, Google India',
  initials: 'VR',
  color: '#4A9EFF',
}

function TestimonialCard({ t, fontSize = 22, height, lineHeight = '32px', m }) {
  return (
    <motion.div
      {...fadeUp}
      whileHover={{ scale: 1.01 }}
      style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: m ? 24 : 32, flex: 1, height: m ? 'auto' : height, minHeight: m ? 200 : undefined }}
    >
      <span style={{ fontFamily: "'Inter'", fontSize: 14, color: '#FFBE0B' }}>★★★★★</span>
      <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: m ? Math.min(fontSize, 18) : fontSize, color: 'rgba(255,255,255,0.85)', lineHeight: m ? '26px' : lineHeight, marginTop: m ? 12 : 0, marginBottom: m ? 12 : 0 }}>
        {t.quote}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, backgroundColor: t.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: 14, color: t.darkText ? '#0A0A0A' : '#FFFFFF' }}>{t.initials}</span>
        </div>
        <div>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#FFFFFF', display: 'block' }}>{t.name}</span>
          <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t.role}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const m = useIsMobile()

  return (
    <div style={{ padding: m ? 16 : 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Navbar />

      {/* Header */}
      <motion.div
        {...fadeUp}
        style={{ ...card, display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'flex-end', padding: m ? 24 : 48, gap: m ? 20 : 0 }}
      >
        <div>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', display: 'block', marginBottom: 12 }}>TESTIMONIALS</span>
          <h1 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: m ? 28 : 48, color: '#FFFFFF', lineHeight: m ? '34px' : '54px', letterSpacing: '-0.02em', margin: 0 }}>
            What people say<br />about working with me.
          </h1>
        </div>
        <div style={{ textAlign: m ? 'left' : 'right' }}>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: m ? 36 : 56, color: '#4A9EFF', lineHeight: m ? '36px' : '56px', display: 'block' }}
          >
            12+
          </motion.span>
          <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Happy clients</span>
        </div>
      </motion.div>

      {/* Row 1 — 2 large cards */}
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16 }}>
        <TestimonialCard t={testimonials[0]} height={320} m={m} />
        <TestimonialCard t={testimonials[1]} height={320} m={m} />
      </div>

      {/* Row 2 — 3 medium cards */}
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16 }}>
        {testimonials.slice(2).map((t) => (
          <TestimonialCard key={t.name} t={t} fontSize={19} lineHeight="28px" height={280} m={m} />
        ))}
      </div>

      {/* Featured Review */}
      <motion.div
        {...fadeUp}
        style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: m ? 24 : 40, height: m ? 'auto' : 300, position: 'relative', gap: m ? 16 : 0 }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(74,158,255,0.05), transparent)', borderRadius: 20 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>FEATURED REVIEW</span>
          <span style={{ fontFamily: "'Inter'", fontSize: 14, color: '#FFBE0B' }}>★★★★★</span>
        </div>
        <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: m ? 20 : 28, color: 'rgba(255,255,255,0.9)', lineHeight: m ? '30px' : '40px', maxWidth: 700, position: 'relative' }}>
          {featured.quote}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
          <div style={{ width: 48, height: 48, backgroundColor: '#4A9EFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: 16, color: '#FFFFFF' }}>VR</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, color: '#FFFFFF', display: 'block' }}>{featured.name}</span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{featured.role}</span>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp} style={{ ...card, display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'stretch' : 'center', justifyContent: 'space-between', padding: m ? '24px' : '36px 40px', gap: m ? 20 : 0 }}>
        <div>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: m ? 22 : 28, color: '#FFFFFF', lineHeight: '34px', display: 'block' }}>Want to be next?</span>
          <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 4, display: 'block' }}>Let's create something great together.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12 }}>
          <motion.a
            href="mailto:saksham@tyagi.design"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#4A9EFF', borderRadius: 14, padding: '14px 28px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textDecoration: 'none' }}
          >
            Get in Touch →
          </motion.a>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#1E1E1E', borderRadius: 14, padding: '14px 28px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              View Projects
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
