import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      className="topbar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="brand-block">
        <motion.div className="brand-icon" whileHover={{ rotate: 8, scale: 1.04 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }}>
          ◈
        </motion.div>
        <div>
          <div className="brand-title">Abhedya-Chakra</div>
          <div className="brand-subtitle">Cybercrime Financial Investigation</div>
        </div>
      </div>

      <motion.div className="search-box" whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
        <span className="search-icon">⌕</span>
        <span>Enter Victim Account ID</span>
      </motion.div>

      <div className="header-actions">
        <motion.button type="button" className="primary-action" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          Trace Money
        </motion.button>
        <div className="state-badges">
          <span className="badge badge-red">● Offline Mode</span>
          <span className="badge badge-green">● Indexed</span>
          <span className="badge badge-blue">● System Ready</span>
        </div>
        <motion.div className="user-pill" whileHover={{ y: -2, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }}>
          <span className="avatar-mini">◔</span>
          <span>Cyber Cell Analyst</span>
        </motion.div>
      </div>
    </motion.header>
  )
}
