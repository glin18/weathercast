import React from 'react'

export const DetailsCard = ({ data , page }) => {
    const dayData = data.forecast.forecastday[page]

  return (
    <div className="details-card">
        <div>
            <div>Avg: {dayData.day.avgtemp_c} °C</div>
            <div>High: {dayData.day.maxtemp_c} °C</div>
            <div>Low: {dayData.day.mintemp_c} °C</div>
            
            <div className="details-card-status-container">
                <div>{dayData.day.condition.text}</div>
                <img src={dayData.day.condition.icon}></img>
            </div>
        </div>
        <div className="details-bar"></div>
        <div className="details-right">
            <div>Chance of Rain: {dayData.day.daily_chance_of_rain} %</div>
            <div>Humidity: {dayData.day.avghumidity} %</div>
            <div>Visibility: {dayData.day.avgvis} km</div>
            <div>UV Index: {dayData.day.uv}</div>
            <div>Max Wind: {dayData.day.maxtemp_c}</div>
            <div>Min Wind: {dayData.day.mintemp_c}</div>
            <div>Sunrise: {dayData.astro.sunrise}</div>
            <div>Sunset: {dayData.astro.sunset}</div>
        </div>
        
    </div>
  )
}
