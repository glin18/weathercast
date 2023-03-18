import React from 'react'
import "../App.css"
import WeatherBackground from "../images/weather-background2.png"
import { LeftNav } from "./left/LeftNav"
import { LeftSearch } from "./left/LeftSearch"

export const LeftContainer = () => {
  return (
    <div className="left-container">
        <LeftNav/>
        <LeftSearch/>
    </div>
  )
}
