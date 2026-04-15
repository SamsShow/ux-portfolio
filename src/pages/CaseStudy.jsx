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

export default function CaseStudy() {
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Navbar />

      {/* Hero */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div
          {...fadeUp}
          style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 40, flex: 1, height: 440 }}
        >
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ backgroundColor: 'rgba(74,158,255,0.12)', borderRadius: 20, padding: '6px 14px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: '#4A9EFF', letterSpacing: '0.04em' }}>CASE STUDY</span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '6px 14px', fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>SMART HOME</span>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 64, color: '#FFFFFF', lineHeight: '70px', letterSpacing: '-0.02em', margin: 0 }}
            >
              KitchenOS
            </motion.h1>
            <p style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: '28px', maxWidth: 520, marginTop: 16 }}>
              Redesigning the smart kitchen experience — from cluttered controls to a unified, intuitive interface that feels like home.
            </p>
          </div>
        </motion.div>

        {/* Meta */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360, flexShrink: 0 }}>
          <div style={{ ...card, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'CLIENT', value: 'SmartHome Inc.' },
              { label: 'ROLE', value: 'Lead Product Designer' },
              { label: 'TIMELINE', value: '12 Weeks' },
              { label: 'YEAR', value: '2025' },
            ].map((item, i) => (
              <div key={item.label}>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', display: 'block' }}>{item.label}</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 15, color: '#FFFFFF', marginTop: 4, display: 'block' }}>{item.value}</span>
                {i < 3 && <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)', marginTop: 16 }} />}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <motion.div whileHover={{ scale: 1.03 }} style={{ flex: 1, backgroundColor: '#4A9EFF', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 28, color: '#0A0A0A' }}>40%</span>
              <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 11, color: 'rgba(10,10,10,0.6)' }}>More Engagement</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} style={{ flex: 1, backgroundColor: '#1E1E1E', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 28, color: '#FFFFFF' }}>4.8</span>
              <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>App Store Rating</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mockup */}
      <motion.div
        {...fadeUp}
        style={{ ...card, width: '100%', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(74,158,255,0.06), rgba(6,214,160,0.06), rgba(255,0,110,0.04))' }} />
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', position: 'relative' }}>
          {[
            { title: 'KitchenOS', color: '#4A9EFF', h: 400 },
            { title: 'Dashboard', color: '#4A9EFF', h: 420 },
            { title: 'Recipes', color: '#06D6A0', h: 400 },
          ].map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                width: i === 1 ? 240 : 220, height: screen.h, backgroundColor: '#1E1E1E', borderRadius: 28,
                border: `2px solid rgba(255,255,255,${i === 1 ? 0.1 : 0.08})`, display: 'flex', flexDirection: 'column', padding: 16, gap: 12,
              }}
            >
              <div style={{ width: 60, height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, alignSelf: 'center' }} />
              <div style={{ height: 40, backgroundColor: `${screen.color}1a`, borderRadius: 10, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 12, color: screen.color }}>{screen.title}</span>
              </div>
              <div style={{ flex: 1, backgroundColor: `${screen.color}0f`, borderRadius: 14, display: 'flex', flexDirection: 'column', padding: 14, gap: 8 }}>
                <div style={{ width: '100%', height: 80, backgroundColor: `${screen.color}1a`, borderRadius: 10 }} />
                <div style={{ width: '80%', height: 8, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 4 }} />
                <div style={{ width: '60%', height: 8, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
              </div>
              {i === 0 && (
                <div style={{ height: 36, backgroundColor: '#4A9EFF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: '#0A0A0A' }}>Start Cooking</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Problem + Solution */}
      <div style={{ display: 'flex', gap: 16 }}>
        {[
          {
            label: 'THE PROBLEM', title: 'Smart kitchens felt anything but smart.',
            desc: 'Users were overwhelmed by fragmented apps — one for the oven, one for the fridge, another for recipes. No unified experience. 73% of users reported frustration with managing multiple kitchen apps simultaneously.',
            stats: [{ value: '73%', label: 'User frustration rate', color: '#FB5607' }, { value: '5+', label: 'Apps to manage', color: '#FB5607' }],
          },
          {
            label: 'THE SOLUTION', title: 'One app. Every appliance. Zero friction.',
            desc: 'KitchenOS unifies all smart kitchen devices into a single, beautifully designed interface. Context-aware controls surface what you need, when you need it — from preheating the oven to tracking grocery lists.',
            stats: [{ value: '1', label: 'Unified interface', color: '#06D6A0' }, { value: '3s', label: 'Avg. task time', color: '#06D6A0' }],
          },
        ].map((section) => (
          <motion.div key={section.label} {...fadeUp} style={{ ...card, flex: 1, padding: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{section.label}</span>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 26, color: '#FFFFFF', lineHeight: '34px' }}>{section.title}</span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: '24px' }}>{section.desc}</span>
            <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
              {section.stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ scale: 1.03 }} style={{ flex: 1, backgroundColor: `${stat.color}1a`, borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 24, color: stat.color }}>{stat.value}</span>
                  <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Design Process */}
      <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        <div style={{ ...card, padding: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>DESIGN PROCESS</span>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 32, color: '#FFFFFF', lineHeight: '40px' }}>How I got there</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
            { num: '01', color: '#4A9EFF', title: 'Research', desc: 'Conducted 24 user interviews and competitive analysis across 8 smart kitchen products to identify pain points.' },
            { num: '02', color: '#06D6A0', title: 'Ideation', desc: 'Ran design sprints with cross-functional teams. Created user flows, wireframes, and tested 3 concept directions.' },
            { num: '03', color: '#FFBE0B', title: 'Design', desc: 'High-fidelity prototypes in Figma with a custom design system. Iterated through 4 rounds of usability testing.' },
            { num: '04', color: '#FF006E', title: 'Deliver', desc: 'Handed off specs with Zeplin, supported dev team during implementation. Shipped to 50K+ beta users.' },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ ...card, flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div style={{ width: 44, height: 44, backgroundColor: `${step.color}1a`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 18, color: step.color }}>{step.num}</span>
              </div>
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 18, color: '#FFFFFF' }}>{step.title}</span>
              <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: '21px' }}>{step.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Screens */}
      <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        <div style={{ ...card, padding: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>KEY SCREENS</span>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 32, color: '#FFFFFF', lineHeight: '40px' }}>The final product</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
            { title: 'Home Dashboard', desc: 'Unified control center for all devices', gradient: 'rgba(74,158,255,0.12), rgba(74,158,255,0.03)' },
            { title: 'Recipe Mode', desc: 'Step-by-step with auto device sync', gradient: 'rgba(6,214,160,0.12), rgba(6,214,160,0.03)' },
            { title: 'Device Controls', desc: 'Contextual knobs and presets', gradient: 'rgba(255,190,11,0.12), rgba(255,190,11,0.03)' },
          ].map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{ flex: 1, height: 360, ...card, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(160deg, ${screen.gradient})`, borderRadius: 20 }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 20, color: '#FFFFFF', display: 'block' }}>{screen.title}</span>
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{screen.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div {...fadeUp} style={{ ...card, padding: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>RESULTS & IMPACT</span>
        <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 26, color: '#FFFFFF', lineHeight: '34px' }}>The numbers speak</span>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
            { value: '40%', label: 'Increase in daily active users after redesign launch', color: '#06D6A0' },
            { value: '4.8★', label: 'App Store rating, up from 3.2 before redesign', color: '#4A9EFF' },
            { value: '62%', label: 'Reduction in support tickets related to navigation', color: '#FFBE0B' },
          ].map((result) => (
            <motion.div key={result.value} whileHover={{ scale: 1.02 }} style={{ flex: 1, backgroundColor: `${result.color}14`, borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 40, color: result.color }}>{result.value}</span>
              <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{result.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learnings + Next Project */}
      <div style={{ display: 'flex', gap: 16 }}>
        <motion.div {...fadeUp} style={{ ...card, flex: 1, padding: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>KEY LEARNINGS</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { color: '#4A9EFF', text: 'Context-aware interfaces reduce cognitive load more than simplified UIs' },
              { color: '#06D6A0', text: 'Early hardware team collaboration prevented 3 major redesign cycles' },
              { color: '#FFBE0B', text: 'Users preferred gesture controls over button taps for quick adjustments' },
            ].map((learning) => (
              <div key={learning.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, backgroundColor: learning.color, borderRadius: '50%', marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: '22px' }}>{learning.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...card, width: 400, flexShrink: 0, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(145deg, rgba(255,0,110,0.07), rgba(255,0,110,0.02))', borderRadius: 20 }} />
          <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', position: 'relative' }}>NEXT PROJECT</span>
          <div style={{ position: 'relative' }}>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 32, color: '#FFFFFF', lineHeight: '38px', display: 'block' }}>Framer Xplore</span>
            <span style={{ fontFamily: "'Inter'", fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.45)', display: 'block', marginTop: 8 }}>Design system & component library</span>
            <Link to="/case-study/framer-xplore" style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 14, color: '#4A9EFF', marginTop: 16, display: 'inline-block' }}>
              View Case Study →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
