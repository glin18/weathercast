import React from 'react'

export const DailyCard = () => {
  return (
    <div className="daily-card">
        <div className="daily-card-temperature">
            28°C
        </div>
        <div>
            <div className="daily-card-status">Rain</div>
            <div></div>
        </div>
        <div className="daily-card-date">
            Tue 28, July 20
        </div>
    </div>
  )
}
