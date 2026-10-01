import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import FlowDiagram from './components/FlowDiagram'
import TransactionTable from './components/TransactionTable'
import TimelineChart from './components/TimelineChart'
import RightPanel from './components/RightPanel'
import { statCards } from './data/mockData'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="workspace">
        <Header />

        <div className="stats-grid">
          {statCards.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>

        <div className="content-grid">
          <div className="middle-column">
            <div className="panel-header">
              <h2>Money Trail: 4-Hop Investigation</h2>

              <div className="action-group">
                <button type="button" className="action-btn">Zoom In</button>
                <button type="button" className="action-btn">Zoom Out</button>
                <button type="button" className="action-btn">Reset View</button>
                <button type="button" className="action-btn">Isolate Subgraph</button>
              </div>
            </div>

            <FlowDiagram />
            <TransactionTable />
            <TimelineChart />
          </div>

          <RightPanel />
        </div>
      </div>
    </div>
  )
}
