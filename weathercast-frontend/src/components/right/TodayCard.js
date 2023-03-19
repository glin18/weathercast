import React, { useContext } from 'react'
import { DataContext } from '../Container'

export const TodayCard = ( {onClickCardHandler}) => {
  const data = useContext(DataContext);

  return (
    <div className="today-card" onClick = {() => onClickCardHandler(0)}>
      
        {data?.current && 
        <>
          <div>
            <div className="today-card-temperature">{data.current.temp_c + "°C" || ""}</div>
            <div className="today-card-status">{ data?.current?.condition?.text || ""}</div>
            <div className="today-card-date">{data?.current?.last_updated || ""}</div>
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
        </>
        }
    </div>
  )
}
