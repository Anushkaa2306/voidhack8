import { motion } from 'framer-motion'
import { riskPills, accountStats } from '../data/mockData'

export default function RightPanel() {
  return (
    <motion.aside className="right-panel" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      <motion.div className="account-investigation" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
        <h3>Account Investigation</h3>

        <div className="account-card">
          <div className="account-avatar">◔</div>
          <div className="account-meta">
            <div>Layer 1 Collector</div>
            <small>Account ID: XXXX-XXXX-1234</small>
          </div>
        </div>

        <div className="risk-meter">
          <motion.div className="ring" animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="ring-inner">
              <div className="ring-score">87</div>
              <div className="ring-label">/100</div>
            </div>
          </motion.div>
          <strong>High Risk</strong>
        </div>

        <div className="risk-pills">
          {riskPills.map((pill) => (
            <motion.span key={pill} className="risk-pill" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              {pill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div className="statistics-panel" whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
        <h3>Account Statistics</h3>
        <div className="stats-grid-mini">
          {accountStats.map((stat) => (
            <motion.div key={stat.label} className="mini-stat" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="mini-icon">{stat.icon}</div>
              <div className="mini-value">{stat.value}</div>
              <div className="mini-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="report-actions" whileHover={{ y: -2 }}>
        <motion.button type="button" className="primary-report" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
          Generate Case Diary
        </motion.button>
        <div className="info-note">Generated only from verified transaction records</div>
      </motion.div>
    </motion.aside>
  )
}
