import React, { useContext, useState } from 'react'
import "../../App.css"
import { HandlerContext } from "../Container"
import CurrentLocation from "../../images/current-location2.png";
 
export const LeftSearch = () => {
    const {onSubmitHandler, onCurrentLocationHandler } = useContext( HandlerContext );
    // const [message, setMessage] = useState("");

    // const onChangeHandler = (event) => {
    //     setMessage(event.target.value)
    // }

  return (
    <div className="left-search-container">
        <div className="center-message">
            The One Stop Shop for Weather Forecast
            <div className="bar"></div>
        </div>
        <div className="search">
            <form onSubmit={onSubmitHandler}  autoComplete="off">
                {/* <input id="search" placeholder="Enter Location" value={message} onChange={onChangeHandler}></input> */}
                <input id="search" placeholder="Enter Location" required></input>

            </form>
        </div>
        <img className="current-location" onClick={onCurrentLocationHandler} src={CurrentLocation}></img>

    </div>
  )
}
