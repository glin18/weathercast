import React from 'react'

export const TodayCard = () => {
  return (
    <div className="today-card">
      <div>
        <div className="today-card-temperature">32°C</div>
        <div className="today-card-status">Sunny</div>
        <div className="today-card-date">Monday 27, July 20</div>
      </div>
      <div className="vertical-border"></div>
      <div className="today-card-right">
        <div>Real Feel</div>
        <div>Humidity</div>
        <div>UV Index</div>
      </div>
      
    </div>
  )
}
