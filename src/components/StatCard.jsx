import { motion } from 'framer-motion'

export default function StatCard({ item }) {
  const toneClass = `card-${item.tone}`

  return (
    <motion.div
      className={`stat-card ${toneClass}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="stat-icon">{item.icon}</div>
      <div className="stat-value">{item.value}</div>
      <div className="stat-label">{item.label}</div>
      <div className="sparkline" aria-hidden="true">
        <span />
      </div>
    </motion.div>
  )
}
