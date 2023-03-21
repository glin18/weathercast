import React from 'react'

export const AstroCard = ({ data, page }) => {
    const dayData = data.forecast.forecastday[page]

  return (
    <div className="astro-card">
        <div>
            <div>Sunrise: {dayData.astro.sunrise}</div>
            <div>Sunset: {dayData.astro.sunset}</div>
            <div>Moon Phase: {dayData.astro.moon_phase}</div>
            <div>Moon Rise: {dayData.astro.moonrise}</div>
            <div>Moon Set: {dayData.astro.moonset}</div>
            <div>Moon Illumination: {dayData.astro.moon_illumination}</div>
        </div>
        
    </div>
  )
}
