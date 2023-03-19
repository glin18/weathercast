import React, { useState, createContext } from 'react';
import '../App.css';
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import axios from "axios";

export const HandlerContext = createContext(null);

export const Container = () => {
    const BASE_URL = "http://api.weatherapi.com/v1"
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    const onSubmitHandler = (event) => {
        // axios.get(BASE_URL).then((response)=>{
        //     console.log(response.data)
        // })
        event.preventDefault()
        console.log(event.target.elements)
        console.log(event.target.elements.search.value)
        event.target.elements.search.value = ""
    }

  return (
    <div className="outer-container">
        <HandlerContext.Provider value={onSubmitHandler}>
            <LeftContainer/>
        </HandlerContext.Provider>    
        <RightContainer/>
          
    </div>
  )
}
