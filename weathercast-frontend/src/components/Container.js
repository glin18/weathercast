import React, { useState, createContext } from 'react';
import '../App.css';
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import axios from "axios";

export const HandlerContext = createContext(null);
export const DataContext = createContext(null);

export const Container = () => {
    const BASE_URL = "http://api.weatherapi.com/v1"
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    const [data, setData] = useState({})

    const onSubmitHandler = (event) => {
        const params = {
            "key":API_KEY,
            "q":event.target.elements.search.value,
            "days":7,
        }

        axios.get(BASE_URL + "/forecast.json", {params}).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })

        event.preventDefault()
        event.target.elements.search.value = ""
    }

  return (
    <div className="outer-container">
        <DataContext.Provider value={data}> 
            <HandlerContext.Provider value={onSubmitHandler}>
                <LeftContainer/>
                <RightContainer/>
            </HandlerContext.Provider> 
        </DataContext.Provider> 
    </div>
  )
}
