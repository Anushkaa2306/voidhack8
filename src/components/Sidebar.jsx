import { motion } from 'framer-motion'
import { navItems } from '../data/mockData'

export default function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            className={`nav-item ${item.active ? 'active' : ''}`}
            type="button"
            whileHover={{ x: 4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.label === 'Victim Trace' && <span className="chevron">›</span>}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="sidebar-footer"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}
      >
        <div className="brand-mark">◉</div>
        <p>Follow the Money,<br />Stop the Crime.</p>
      </motion.div>

      <div className="status-pills">
        <motion.div
          className="status-pill offline"
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        >
          <span className="dot" />
          Offline Mode
          <small>Limited network access</small>
        </motion.div>
        <motion.div
          className="status-pill system"
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        >
          <span className="dot" />
          System Ready
          <small>Core services active</small>
        </motion.div>
      </div>
    </motion.aside>
  )
}
