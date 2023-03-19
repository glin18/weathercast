import React, { useContext, useState } from 'react'
import "../../App.css"
import { HandlerContext } from "../Container"
 
export const LeftSearch = () => {
    const onSubmitHandler = useContext( HandlerContext );
    const [message, setMessage] = useState("");

    const onChangeHandler = (event) => {
        setMessage(event.target.value)
    }

  return (
    <div className="left-search-container">
        <div className="center-message">
            The One Stop Shop for Weather Forecast
            <div className="bar"></div>
        </div>
        <div className="search">
            <form onSubmit={onSubmitHandler}  autocomplete="off">
                <input id="search" placeholder="Enter Location" value={message} onChange={onChangeHandler}></input>
            </form>
        </div>
    </div>
  )
}
