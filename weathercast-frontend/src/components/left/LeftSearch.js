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
            <form>
                <input placeholder="Enter Location"></input>
            </form>
        </div>
    </div>
  )
}
