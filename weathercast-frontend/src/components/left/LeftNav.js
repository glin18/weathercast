import React from 'react'
import "../../App.css"
import LocationIcon from "../../images/location-icon-black.png"

export const LeftNav = () => {
  return (
    <div className="left-nav-container">
        <div className="title">WeatherCast</div>
        <div className="location-container">
            <img src={LocationIcon}></img>
            <div className="location-inner-container">
                <div>Current Location</div>
                <div>Taiwan, Taipei</div>
            </div>
        </div>
    </div>
  )
}
