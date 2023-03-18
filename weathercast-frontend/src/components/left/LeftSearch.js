import React from 'react'
import "../../App.css"

export const LeftSearch = () => {
  return (
    <div className="left-search-container">
        <div className="center-message">
            The One Stop Shop for Weather Forecast
            <div className="bar"></div>
        </div>
        <div className="search">
            <input placeholder="Enter Location"></input>
        </div>
    </div>
  )
}
