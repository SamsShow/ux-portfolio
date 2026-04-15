import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
}

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const card = {
  backgroundColor: '#161616',
  borderRadius: 20,
  overflow: 'hidden',
}

export default function Home() {
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Navbar />

      {/* Row 2 — Hero + Worked For + Featured Work */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Hero Name Card */}
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 460, flexShrink: 0, height: 420, padding: 36 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: 80, height: 80, backgroundColor: '#1E1E1E', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 28, color: '#4A9EFF' }}>ST</span>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 52, color: '#FFFFFF', lineHeight: '58px', letterSpacing: '-0.02em', margin: 0 }}
            >
              SAKSHAM<br />TYAGI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: '22px', marginTop: 8 }}
            >
              UI/UX & Product Designer crafting<br />digital experiences that matter.
            </motion.p>
          </div>
        </motion.div>

        {/* Worked For Card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 20, padding: 28, width: 320, flexShrink: 0, height: 420 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>WORKED FOR</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
            {[
              { letter: 'G', color: '#4A9EFF', name: 'Google' },
              { letter: 'S', color: '#06D6A0', name: 'Spotify' },
              { letter: 'R', color: '#FFBE0B', name: 'Razorpay' },
              { letter: 'Z', color: '#FF006E', name: 'Zomato' },
              { letter: 'A', color: '#FB5607', name: 'Adobe' },
            ].map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: i < 4 ? 14 : 0, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div style={{ width: 36, height: 36, backgroundColor: '#1E1E1E', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 14, color: company.color }}>{company.letter}</span>
                </div>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#FFFFFF' }}>{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Work Card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, padding: 28, flex: 1, height: 420 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>FEATURED WORK</span>
          <div style={{ display: 'flex', gap: 12, flex: 1 }}>
            <Link to="/case-study/kitchenos" style={{ flex: 1, backgroundColor: '#1E1E1E', borderRadius: 14, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 16, position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(74,158,255,0.13), rgba(74,158,255,0.04))' }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 18, color: '#FFFFFF', display: 'block' }}>KitchenOS</span>
                <span style={{ fontFamily: "'Inter'", fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Smart home interface</span>
              </div>
            </Link>
            <Link to="/case-study/framer-xplore" style={{ flex: 1, backgroundColor: '#1E1E1E', borderRadius: 14, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 16, position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(255,0,110,0.13), rgba(255,0,110,0.04))' }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 18, color: '#FFFFFF', display: 'block' }}>Framer<br />Xplore</span>
                <span style={{ fontFamily: "'Inter'", fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Design system</span>
              </div>
            </Link>
          </div>
          <Link to="/case-study/kitchenos">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: '#4A9EFF', borderRadius: 12, padding: '12px 24px', alignSelf: 'flex-start', display: 'inline-flex', cursor: 'pointer' }}
            >
              <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 13, color: '#0A0A0A' }}>View All Projects →</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Row 3 — Testimonials + Email */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 20, padding: 28, width: 460, flexShrink: 0, height: 300 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>TESTIMONIALS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: 20, color: 'rgba(255,255,255,0.85)', lineHeight: '30px' }}>
              "Saksham transformed our product vision into an interface that users genuinely enjoy. His attention to detail is remarkable."
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, backgroundColor: '#4A9EFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: 12, color: '#FFFFFF' }}>AK</span>
              </div>
              <div>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 13, color: '#FFFFFF', display: 'block' }}>Ankit Kumar</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>CPO, TechCorp</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bento-card"
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, flex: 1, height: 300, position: 'relative', overflow: 'hidden' }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>EMAIL ME</span>
          <div>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 24, color: '#FFFFFF', lineHeight: '30px', display: 'block' }}>
              Let's work<br />together.
            </span>
            <a href="mailto:saksham@tyagi.design" style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: '#4A9EFF', marginTop: 8, display: 'inline-block' }}>
              saksham@tyagi.design ↗
            </a>
          </div>
          <img
            className="hover-img"
            src="/images/bananas.png"
            alt=""
            style={{ position: 'absolute', top: -20, right: -20, width: 324, height: 327, objectFit: 'cover', pointerEvents: 'none' }}
          />
        </motion.div>
      </div>

      {/* Row 4 — Toolbox + Motivation + Awards */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Toolbox */}
        <motion.div
          {...fadeUp}
          className="bento-card"
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 20, padding: 28, width: 320, flexShrink: 0, height: 220, position: 'relative', overflow: 'hidden' }}
        >
          <img
            className="hover-img"
            src="/images/toolbox.png"
            alt=""
            style={{ position: 'absolute', top: -40, right: -20, width: 235, height: 352, objectFit: 'contain', pointerEvents: 'none' }}
          />
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', position: 'relative' }}>TOOLBOX</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, position: 'relative' }}>
            {['Fg', 'Ai', 'Ps', 'Fr', 'Sk', 'Wf'].map((tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.1, backgroundColor: '#2a2a2a' }}
                style={{ width: 48, height: 48, backgroundColor: '#1E1E1E', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span style={{ fontFamily: "'Inter'", fontWeight: 700, fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motivation */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bento-card"
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, flex: 1, height: 220, position: 'relative', overflow: 'hidden' }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', position: 'relative', zIndex: 1 }}>MOTIVATION</span>
          <img
            className="hover-img"
            src="/images/steve-jobs.png"
            alt=""
            style={{ position: 'absolute', right: 0, top: -10, width: 158, height: 237, objectFit: 'cover', pointerEvents: 'none' }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: 28, color: '#FFFFFF', lineHeight: '36px', display: 'block' }}>
              "Design is not just what it looks like. Design is how it works."
            </span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, display: 'block' }}>— Steve Jobs</span>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bento-card"
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, padding: 28, width: 280, flexShrink: 0, height: 220, position: 'relative', overflow: 'hidden' }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', position: 'relative', zIndex: 1 }}>AWARDS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}>
            {[
              { color: '#4A9EFF', name: 'Awwwards SOTD' },
              { color: '#06D6A0', name: 'CSS Design Awards' },
              { color: '#FFBE0B', name: 'Behance Featured' },
            ].map((award) => (
              <div key={award.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, backgroundColor: award.color, borderRadius: '50%', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: '#FFFFFF' }}>{award.name}</span>
              </div>
            ))}
          </div>
          <img
            className="hover-img"
            src="/images/trophy.png"
            alt=""
            style={{ position: 'absolute', bottom: -30, right: -10, width: 166, height: 249, objectFit: 'contain', pointerEvents: 'none' }}
          />
        </motion.div>
      </div>

      {/* Row 5 — Expertise + Contact */}
      <div id="contact" style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          className="bento-card"
          style={{ ...card, display: 'flex', flexDirection: 'column', gap: 18, padding: 28, flex: 1, height: 200, position: 'relative', overflow: 'hidden' }}
        >
          <img
            className="hover-img"
            src="/images/gears.png"
            alt=""
            style={{ position: 'absolute', top: -40, right: 20, width: 216, height: 324, objectFit: 'contain', pointerEvents: 'none' }}
          />
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', position: 'relative', zIndex: 1 }}>EXPERTISE</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, position: 'relative', zIndex: 1 }}>
            {['Product Design', 'Design Systems', 'User Research', 'Interaction Design', 'Prototyping', 'Visual Design'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ backgroundColor: '#2a2a2a', scale: 1.05 }}
                style={{ backgroundColor: '#1E1E1E', borderRadius: 20, padding: '8px 18px', cursor: 'default' }}
              >
                <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, width: 360, flexShrink: 0, height: 200 }}
        >
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>CONTACT</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { platform: 'Twitter', handle: '@sakshamtyagi' },
              { platform: 'LinkedIn', handle: '/in/sakshamtyagi' },
              { platform: 'Dribbble', handle: 'sakshamtyagi' },
            ].map((social) => (
              <div key={social.platform} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{social.platform}</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: '#4A9EFF' }}>{social.handle}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        {...fadeUp}
        style={{ ...card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px' }}
      >
        <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 Saksham Tyagi. All rights reserved.</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Made with care in India</span>
          <div style={{ width: 6, height: 6, backgroundColor: '#06D6A0', borderRadius: '50%' }} />
          <motion.button
            whileHover={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Back to top ↑
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
