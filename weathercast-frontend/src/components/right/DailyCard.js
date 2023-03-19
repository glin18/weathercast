import React from 'react'

export const DailyCard = ({index, data}) => {
  return (
    <div className="daily-card" key={index}>
        <div className="daily-card-temperature">
            {data?.day?.avgtemp_c + "°C" || "28°C"}
        </div>
        <div>
            <div className="daily-card-status">{data?.day?.condition?.text || "Rain"}</div>
            <div></div>
        </div>
        <div className="daily-card-date">
            {data?.date || "Tue 28, July 20"}
        </div>
    </div>
  )
}
