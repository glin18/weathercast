import React, { useContext } from 'react'
import { HandlerContext } from './Container'
import { DetailsCard } from "./details/DetailsCard"
import { DetailsGraph } from "./details/DetailsGraph"
import { RainGraph } from "./details/RainGraph"
import { AstroCard } from "./details/AstroCard"

export const DetailsContainer = ({ data , page }) => {
    const { onClickReturnHandler } = useContext(HandlerContext)
  return (
    <div className="details-container">
        {data?.forecast ? 
        <>
            <div className="details-title">{data.location.country}, {data.location.region}, {data.location.tz_id}</div>
            <div className="details-title">{data.forecast.forecastday[page].date}</div>
            <div>
              <div className="details-cards-container">
                <DetailsCard data={ data } page={page}/>
                <RainGraph data={data} page={page}/>
              </div>
              <div className="details-cards-container">
                <DetailsGraph data={data} page={page}/>
                <AstroCard data={data} page={page}/>
              </div>
              
            </div>
            
        </>
        : <></>}
        <div className="return" onClick={onClickReturnHandler}>Return</div>
    </div>
    
  )
}
