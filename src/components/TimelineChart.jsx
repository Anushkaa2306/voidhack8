import { timelineDays } from '../data/mockData'

export default function TimelineChart() {
  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <div className="section-badge">◔</div>
        <h3>15-Day Transaction Playback</h3>
      </div>

      <div className="timeline-visual">
        <div className="playback-button">▶</div>
        <div className="timeline-track" />
        <div className="timeline-markers">
          {timelineDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
