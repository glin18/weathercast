import React, { useContext } from 'react'
import { DataContext } from "../Container"
import "../../App.css"
import LocationIcon from "../../images/location-icon-black.png"

export const LeftNav = () => {
    const data = useContext(DataContext)

  return (
    <div className="left-nav-container">
        <div className="title">WeatherCast</div>
        <div className="location-container">
            <img src={LocationIcon}></img>
            <div className="location-inner-container">
                <div>Current Location</div>
                <div>{data?.location ? data.location.name + ", " + data.location.country : "No Location"}</div>
            </div>
        </div>
    </div>
  )
}
