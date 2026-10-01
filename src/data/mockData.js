export const statCards = [
  { label: 'Transactions', value: '2,000,000', tone: 'blue', icon: '▣', trend: 'up' },
  { label: 'Mule Candidates', value: '1,500', tone: 'amber', icon: '◌', trend: 'up' },
  { label: '4-Hop Trace', value: '1.42 sec', tone: 'green', icon: '⚡', trend: 'up' },
  { label: 'Critical Accounts', value: '87', tone: 'rose', icon: '⚠', trend: 'up' },
]

export const navItems = [
  { label: 'Dashboard', icon: '⌂', active: false },
  { label: 'Victim Trace', icon: '⌕', active: true },
  { label: 'Mule Network', icon: '◎', active: false },
  { label: 'Timeline', icon: '◔', active: false },
  { label: 'Reports', icon: '▣', active: false },
  { label: 'Settings', icon: '⚙', active: false },
]

export const transactions = [
  { id: 'TX1001', from: 'Victim Account', to: 'Collector', amount: '₹50,000', timestamp: '10:00:05', mode: 'UPI' },
  { id: 'TX1002', from: 'Collector', to: 'Distributor A', amount: '₹20,000', timestamp: '10:04:11', mode: 'IMPS' },
  { id: 'TX1003', from: 'Collector', to: 'Distributor B', amount: '₹15,000', timestamp: '10:06:24', mode: 'UPI' },
  { id: 'TX1004', from: 'Distributor A', to: 'Terminal Cash-Out', amount: '₹18,000', timestamp: '10:13:02', mode: 'NEFT' },
]

export const flowNodes = [
  { name: 'Victim Account', account: 'xxxx-xxxx-5678', amount: '₹50,000', time: '10:00', role: 'victim', color: 'blue' },
  { name: 'Layer 1 Collector', account: 'xxxx-xxxx-1234', amount: '₹20,000', time: '10:04', role: 'collector', color: 'amber' },
  { name: 'Layer 2 Distributor A', account: 'xxxx-xxxx-4321', amount: '₹15,000', time: '10:06', role: 'distributor', color: 'gold' },
  { name: 'Layer 2 Distributor B', account: 'xxxx-xxxx-2198', amount: '₹8,000', time: '10:12', role: 'distributor', color: 'gold' },
  { name: 'Layer 3 Distributor C', account: 'xxxx-xxxx-2298', amount: '₹8,000', time: '10:12', role: 'distributor', color: 'gold' },
  { name: 'Terminal Cash-Out', account: 'xxxx-xxxx-7788', amount: '₹18,000', time: '10:13', role: 'terminal', color: 'red' },
  { name: 'Crypto P2P Wallet', account: 'xxxx-xxxx-5566', amount: '₹12,000', time: '10:09', role: 'wallet', color: 'red' },
  { name: 'Normal Account', account: 'xxxx-xxxx-6677', amount: '₹6,000', time: '10:08', role: 'normal', color: 'gray' },
  { name: 'Normal Account', account: 'xxxx-xxxx-9988', amount: '₹9,000', time: '10:12', role: 'normal', color: 'gray' },
  { name: 'Normal Account', account: 'xxxx-xxxx-3344', amount: '₹1,000', time: '10:12', role: 'normal', color: 'gray' },
]

export const riskPills = ['High Fan-In', 'Rapid Pass-Through', 'Multiple Beneficiaries', 'New Account Links']

export const accountStats = [
  { label: 'Incoming Senders', value: '31', icon: '▣', tone: 'blue', detail: '31' },
  { label: 'Total Received', value: '₹12,40,000', icon: '₹', tone: 'blue', detail: '₹12,40,000' },
  { label: 'Forwarded Quickly', value: '90.3%', icon: '➜', tone: 'blue', detail: '90.3%' },
  { label: 'Downstream Accounts', value: '8', icon: '◌', tone: 'blue', detail: '8' },
  { label: 'Average Delay', value: '6.2 min', icon: '◔', tone: 'blue', detail: '6.2 min' },
]

export const timelineDays = ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 10', 'Day 12', 'Day 15']
