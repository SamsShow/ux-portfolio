import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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

export default function About() {
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Navbar />

      {/* Row 1 — Photo + Intro */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Photo Card */}
        <motion.div
          {...fadeUp}
          style={{ ...card, width: 420, height: 480, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: 280, height: 280, backgroundColor: '#1E1E1E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 80, color: '#4A9EFF' }}>ST</span>
          </motion.div>
          <div style={{ position: 'absolute', bottom: 28, left: 28, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>BASED IN</span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 15, color: '#FFFFFF' }}>New Delhi, India</span>
          </div>
          <div style={{ position: 'absolute', bottom: 28, right: 28, display: 'flex', alignItems: 'center', gap: 6 }}>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 8, height: 8, backgroundColor: '#06D6A0', borderRadius: '50%' }}
            />
            <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 12, color: '#06D6A0' }}>Available for work</span>
          </div>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 40, flex: 1, height: 480 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>ABOUT ME</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 40, color: '#FFFFFF', lineHeight: '48px', letterSpacing: '-0.02em', margin: 0 }}
            >
              I design products<br />that people actually<br />want to use.
            </motion.h1>
            <p style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: '26px' }}>
              I'm Saksham — a product designer with 4+ years of experience turning complex problems into simple, beautiful interfaces. I believe great design is invisible: it just works. Currently focused on building design systems and leading product design at scale.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { value: '4+', label: 'Years Experience', color: '#4A9EFF' },
              { value: '30+', label: 'Projects Shipped', color: '#06D6A0' },
              { value: '12+', label: 'Happy Clients', color: '#FFBE0B' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 32, color: stat.color }}>{stat.value}</span>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{stat.label}</span>
                </motion.div>
                {i < 2 && <div style={{ width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.06)' }} />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 2 — What I Do + Education + Philosophy */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* What I Do */}
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, height: 340 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>WHAT I DO</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: '01', color: '#4A9EFF', title: 'Product Design', desc: 'End-to-end product thinking from research to pixel-perfect delivery' },
              { num: '02', color: '#06D6A0', title: 'Design Systems', desc: 'Scalable component libraries and brand guidelines' },
              { num: '03', color: '#FFBE0B', title: 'UX Strategy', desc: 'User research, journey mapping, and data-driven decisions' },
            ].map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, paddingBottom: i < 2 ? 16 : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div style={{ width: 44, height: 44, backgroundColor: `${service.color}1a`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 16, color: service.color }}>{service.num}</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 15, color: '#FFFFFF', display: 'block' }}>{service.title}</span>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: '20px' }}>{service.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column — Education + Philosophy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 380, flexShrink: 0 }}>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ ...card, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>EDUCATION</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#FFFFFF', display: 'block' }}>B.Des in Interaction Design</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>NID Ahmedabad — 2018–2022</span>
              </div>
              <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />
              <div>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#FFFFFF', display: 'block' }}>UX Certification</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Google — 2023</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ ...card, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}
          >
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>MY PHILOSOPHY</span>
            <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: 22, color: 'rgba(255,255,255,0.85)', lineHeight: '32px' }}>
              "Simplicity is the ultimate sophistication. I strip away the unnecessary until only what matters remains."
            </span>
          </motion.div>
        </div>
      </div>

      {/* Row 3 — Beyond Design + Currently */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, padding: 28, width: 440, flexShrink: 0, height: 260 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>BEYOND DESIGN</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { emoji: '📸', label: 'Photography' },
              { emoji: '🎮', label: 'Gaming' },
              { emoji: '✈️', label: 'Travel' },
              { emoji: '☕', label: 'Coffee' },
              { emoji: '📚', label: 'Reading' },
              { emoji: '🎵', label: 'Lo-fi Beats' },
            ].map((hobby) => (
              <motion.div
                key={hobby.label}
                whileHover={{ scale: 1.05, backgroundColor: '#2a2a2a' }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#1E1E1E', borderRadius: 14, padding: '10px 18px', cursor: 'default' }}
              >
                <span style={{ fontSize: 18 }}>{hobby.emoji}</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{hobby.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, padding: 28, flex: 1, height: 260 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>CURRENTLY</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, justifyContent: 'center' }}>
            {[
              { emoji: '📖', color: '#4A9EFF', title: 'Reading', sub: "Don't Make Me Think — Steve Krug" },
              { emoji: '🎧', color: '#06D6A0', title: 'Listening', sub: 'Lofi Girl — Chill Beats Playlist' },
              { emoji: '🛠️', color: '#FFBE0B', title: 'Building', sub: 'A design tool for non-designers' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: i < 2 ? 14 : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div style={{ width: 40, height: 40, backgroundColor: `${item.color}1a`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 16 }}>{item.emoji}</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#FFFFFF', display: 'block' }}>{item.title}</span>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 4 — CTA */}
      <motion.div
        {...fadeUp}
        style={{ ...card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 40 }}
      >
        <div>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 32, color: '#FFFFFF', lineHeight: '38px', display: 'block' }}>
            Let's build something<br />great together.
          </span>
          <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 8, display: 'block' }}>
            I'm always open to discussing new projects and creative ideas.
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <motion.a
            href="mailto:saksham@tyagi.design"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#4A9EFF', borderRadius: 14, padding: '14px 28px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#0A0A0A', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
          >
            Say Hello →
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#1E1E1E', borderRadius: 14, padding: '14px 28px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            Download CV
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
