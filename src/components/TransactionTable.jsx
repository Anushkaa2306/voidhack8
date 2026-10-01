import { motion } from 'framer-motion'
import { transactions } from '../data/mockData'

export default function TransactionTable() {
  return (
    <div className="table-card">
      <div className="table-header">
        <div className="section-badge">▣</div>
        <h3>Transaction Evidence</h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Timestamp</th>
            <th>Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((row, index) => (
            <motion.tr
              key={row.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.25 }}
              whileHover={{ backgroundColor: 'rgba(238, 245, 255, 0.8)' }}
            >
              <td>
                <span className={`row-index ${index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : 'fourth'}`}>
                  {index + 1}
                </span>
                {row.id}
              </td>
              <td>{row.from}</td>
              <td>{row.to}</td>
              <td>₹{row.amount.replace('₹', '')}</td>
              <td>{row.timestamp}</td>
              <td>
                <span className={`mode-tag ${row.mode.toLowerCase()}`}>{row.mode}</span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
