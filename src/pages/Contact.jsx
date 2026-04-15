import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'

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

const inputStyle = {
  width: '100%',
  height: 48,
  backgroundColor: '#1E1E1E',
  borderRadius: 12,
  border: '1px solid transparent',
  padding: '0 16px',
  fontFamily: "'Inter'",
  fontWeight: 400,
  fontSize: 14,
  color: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const labelStyle = {
  fontFamily: "'Inter'",
  fontWeight: 500,
  fontSize: 12,
  color: 'rgba(255,255,255,0.5)',
  display: 'block',
  marginBottom: 8,
}

const projectTypes = ['Product Design', 'Design System', 'UX Audit', 'Other']

const faqs = [
  { q: "What's your typical project timeline?", a: "Most projects take 6–12 weeks depending on scope. A design sprint can be done in 1–2 weeks, while a full product redesign might take 3+ months." },
  { q: "Do you work with startups or enterprises?", a: "Both! I've designed for early-stage startups building their first product and large enterprises redesigning legacy systems. The approach adapts to the context." },
  { q: "What tools do you use?", a: "Figma for design, Framer for prototyping, Maze for testing, and Notion for documentation. I adapt to whatever your team already uses." },
  { q: "Can you work with my existing dev team?", a: "Absolutely. I provide detailed specs, design tokens, and component documentation. I'm comfortable working in agile sprints alongside engineers." },
]

const socials = [
  { abbr: 'Dr', name: 'Dribbble', url: '#' },
  { abbr: 'Li', name: 'LinkedIn', url: '#' },
  { abbr: 'Tw', name: 'Twitter / X', url: '#' },
  { abbr: 'Be', name: 'Behance', url: '#' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer', padding: '18px 0', borderBottom: index < faqs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 15, color: '#FFFFFF' }}>{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 18, color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginLeft: 16 }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: '22px', marginTop: 12 }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Contact() {
  const [selectedType, setSelectedType] = useState('Product Design')

  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Navbar />

      {/* Row 1 — Header + Availability + Response */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 48, flex: 1, height: 320 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>GET IN TOUCH</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 52, color: '#FFFFFF', lineHeight: '58px', letterSpacing: '-0.02em', margin: 0 }}
            >
              Have a project<br />in mind?
            </motion.h1>
            <p style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: '26px', maxWidth: 480 }}>
              I'd love to hear about it. Whether it's a full product redesign or a quick design sprint — let's talk and make something great.
            </p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360, flexShrink: 0 }}>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, flex: 1 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>AVAILABILITY</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 10, height: 10, backgroundColor: '#06D6A0', borderRadius: '50%' }}
                />
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, color: '#06D6A0' }}>Open to projects</span>
              </div>
              <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Accepting new clients for Q2 2026</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, flex: 1 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>RESPONSE TIME</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 36, color: '#4A9EFF' }}>~2hrs</span>
              <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Average email response time</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Row 2 — Form + Email + Socials */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 24, padding: 36, flex: 1 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>SEND A MESSAGE</span>

          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                placeholder="Your name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#4A9EFF'}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#4A9EFF'}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Project type</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {projectTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedType(type)}
                  style={{
                    backgroundColor: selectedType === type ? '#4A9EFF' : '#1E1E1E',
                    borderRadius: 10,
                    padding: '10px 18px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Inter'",
                    fontWeight: 500,
                    fontSize: 13,
                    color: selectedType === type ? '#0A0A0A' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              style={{
                ...inputStyle,
                height: 120,
                padding: 16,
                resize: 'none',
                fontFamily: "'Inter'",
              }}
              onFocus={(e) => e.target.style.borderColor = '#4A9EFF'}
              onBlur={(e) => e.target.style.borderColor = 'transparent'}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: '#4A9EFF',
              borderRadius: 14,
              padding: 16,
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Inter'",
              fontWeight: 600,
              fontSize: 15,
              color: '#0A0A0A',
              width: '100%',
            }}
          >
            Send Message →
          </motion.button>
        </motion.div>

        {/* Right column — Email + Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 380, flexShrink: 0 }}>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, height: 140 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>EMAIL</span>
            <div>
              <a href="mailto:saksham@tyagi.design" style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 16, color: '#4A9EFF', display: 'block' }}>saksham@tyagi.design</a>
              <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Preferred method of contact</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, padding: 28, flex: 1 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>FIND ME ON</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingBottom: i < socials.length - 1 ? 12 : 0,
                    borderBottom: i < socials.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, backgroundColor: '#1E1E1E', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{social.abbr}</span>
                    </div>
                    <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 14, color: '#FFFFFF' }}>{social.name}</span>
                  </div>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: '#4A9EFF' }}>↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Row 3 — FAQ + Location */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 20, padding: 36, flex: 1 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>FREQUENTLY ASKED</span>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, width: 380, flexShrink: 0 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>LOCATION</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 24, color: '#FFFFFF' }}>New Delhi, India</span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>IST (UTC +5:30)</span>
            <p style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: '20px', marginTop: 4 }}>
              Open to remote collaboration globally. I've worked across US, EU, and APAC timezones.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
