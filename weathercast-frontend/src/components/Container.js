import React, { useState, createContext } from 'react';
import '../App.css';
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { DetailsContainer } from "./DetailsContainer";
import axios from "axios";

export const HandlerContext = createContext(null);
export const DataContext = createContext(null);

export const Container = () => {
    const BASE_URL = "//api.weatherapi.com/v1"
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    const [data, setData] = useState({})

    // -1 for home page, 0 - 6 for today till next week
    const [page, setPage] = useState(-1)

    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmitHandler = (event) => {

        const params = {
            "key":API_KEY,
            "q":event.target.elements.search.value,
            "days":7,
        }

        axios.get(BASE_URL + "/forecast.json", {params}).then((response)=>{
            setData(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })

        event.preventDefault()
        event.target.elements.search.value = ""
    }

    const onCurrentLocationHandler = (event) => {
        if (navigator.geolocation) {
            setIsLoading(true)
            document.body.classList.add("blur")
            navigator.geolocation.getCurrentPosition(function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);

                const params = {
                    "key":API_KEY,
                    "q": position.coords.latitude + ", " + position.coords.longitude,
                    "days":7,
                    }
    
                axios.get(BASE_URL + "/forecast.json", {params}).then((response)=>{
                    setData(response.data)
                    console.log(response.data)
                }).catch((error)=>{
                    console.log(error)
                    document.body.classList.remove("blur")
                    setIsLoading(false)
                })
                document.body.classList.remove("blur")
                setIsLoading(false)
            });
        }
    }

    const onClickCardHandler = (day) => {
        console.log(day)
        setPage(day)
    }

    const onClickReturnHandler = () => {
        setPage(-1)
    }

    const onPageTurnHandler = (num) => {
        setPage((prevPage)=>(prevPage + num))
    }

  return (
    <div className={"outer-container" + (isLoading ? " blur" : "")}>
        <DataContext.Provider value={data}> 
            <HandlerContext.Provider value={{onSubmitHandler, onClickCardHandler, onClickReturnHandler, onPageTurnHandler, onCurrentLocationHandler}}>
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
        
        { isLoading && <div className="spinner"></div> }
    
        
    </div>
  )
}
