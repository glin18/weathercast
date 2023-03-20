import React, { useState, createContext } from 'react';
import '../App.css';
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { DetailsContainer } from "./DetailsContainer";
import axios from "axios";

export const HandlerContext = createContext(null);
export const DataContext = createContext(null);

export const Container = () => {
    const BASE_URL = "http://api.weatherapi.com/v1"
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    const [data, setData] = useState({})

    // -1 for home page, 0 - 6 for today till next week
    const [page, setPage] = useState(-1)
    
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

    const onClickCardHandler = (day) => {
        console.log(day)
        setPage(day)
    }

    const onClickReturnHandler = () => {
        setPage(-1)
    }

  return (
    <div className="outer-container">
        <DataContext.Provider value={data}> 
            <HandlerContext.Provider value={{onSubmitHandler, onClickCardHandler, onClickReturnHandler}}>
                {page === -1 && 
                <>
                    <LeftContainer/>
                    <RightContainer/>
                </>
                }
                {page >= 0 && 
                <>
                    <DetailsContainer data={data} page={page}/>  
                </>
                
                }
                
            </HandlerContext.Provider> 
        </DataContext.Provider> 
    </div>
  )
}
