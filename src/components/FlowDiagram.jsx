import { motion } from 'framer-motion'

const nodeData = [
  { id: 'victim', name: 'Victim Account', account: 'xxxx-xxxx-5678', amount: '₹50,000', time: '10:00', role: 'victim', color: 'blue' },
  { id: 'collector', name: 'Layer 1 Collector', account: 'xxxx-xxxx-1234', amount: '₹20,000', time: '10:04', role: 'collector', color: 'amber' },
  { id: 'dist-a', name: 'Layer 2 Distributor A', account: 'xxxx-xxxx-4321', amount: '₹15,000', time: '10:06', role: 'distributor', color: 'gold' },
  { id: 'dist-b', name: 'Layer 2 Distributor B', account: 'xxxx-xxxx-2198', amount: '₹8,000', time: '10:12', role: 'distributor', color: 'gold' },
  { id: 'terminal', name: 'Terminal Cash-Out', account: 'xxxx-xxxx-7788', amount: '₹18,000', time: '10:13', role: 'terminal', color: 'red' },
  { id: 'wallet', name: 'Crypto P2P Wallet', account: 'xxxx-xxxx-5566', amount: '₹12,000', time: '10:09', role: 'wallet', color: 'red' },
  { id: 'normal-a', name: 'Normal Account', account: 'xxxx-xxxx-6677', amount: '₹6,000', time: '10:08', role: 'normal', color: 'gray' },
  { id: 'normal-b', name: 'Normal Account', account: 'xxxx-xxxx-9988', amount: '₹9,000', time: '10:12', role: 'normal', color: 'gray' },
  { id: 'normal-c', name: 'Normal Account', account: 'xxxx-xxxx-3344', amount: '₹1,000', time: '10:12', role: 'normal', color: 'gray' },
]

function Node({ item }) {
  return (
    <motion.div
      className={`trace-node ${item.role}`}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
    >
      <div className="node-avatar">{item.name.split(' ')[0].slice(0, 1)}</div>
      <div className="node-amount">{item.amount}</div>
      <div className="node-time">{item.time}</div>
      <div className="node-name">{item.name}</div>
      <div className="node-account">{item.account}</div>
    </motion.div>
  )
}

export default function FlowDiagram() {
  return (
    <div className="flow-diagram">
      <div className="diagram-row row-main">
        <Node item={nodeData[0]} />
        <Node item={nodeData[1]} />
        <Node item={nodeData[2]} />
      </div>
      <div className="diagram-row row-sub">
        <Node item={nodeData[3]} />
        <Node item={nodeData[4]} />
        <Node item={nodeData[5]} />
      </div>
      <div className="diagram-row row-bottom">
        <Node item={nodeData[6]} />
        <Node item={nodeData[7]} />
        <Node item={nodeData[8]} />
      </div>
    </div>
  )
}
