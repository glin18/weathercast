import React, { useContext } from 'react'
import { DataContext } from '../Container'

export const TodayCard = () => {
  const data = useContext(DataContext);

  return (
    <div className="today-card">
      <div>
        <div className="today-card-temperature">{data?.current?.temp_c + "°C" || "32°C"}</div>
        <div className="today-card-status">{ data?.current?.condition?.text || "Sunny"}</div>
        <div className="today-card-date">{data?.current?.last_updated || "Monday 27, July 20"}</div>
      </div>
      <div className="vertical-border"></div>
      <div className="today-card-right">
        <div>Real Feel: {data?.current?.feelslike_c + "°C" || ""}</div>
        <div>Humidity: {data?.current?.humidity + "%" || ""}</div>
        <div>UV Index: {data?.current?.uv || ""}</div>
        <div>Wind: {data?.current?.wind_dir + " " + data?.current?.wind_kph + " kph" || ""} </div>
        <div>Visibility: {data?.current?.vis_km + " km" || ""}</div>
        <div>Cloud Cover: {data?.current?.cloud + "%" || ""}</div>
      </div>
      
    </div>
  )
}
