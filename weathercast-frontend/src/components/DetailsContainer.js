import React, { useContext } from 'react'
import { HandlerContext } from './Container'
import { DetailsCard } from "./details/DetailsCard"
import { DetailsGraph } from "./details/DetailsGraph"
import { RainGraph } from "./details/RainGraph"
import { AstroCard } from "./details/AstroCard"
import NextArrow from "../images/next-arrow.png"

export const DetailsContainer = ({ data , page }) => {
    const { onClickReturnHandler, onPageTurnHandler } = useContext(HandlerContext)
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
        <div className="arrow-container">
          {page > 0 && <div className="next-arrow"><img src={NextArrow} onClick={()=>onPageTurnHandler(-1)}></img></div>}
          {page < 6 && <div className="next-arrow flip"><img src={NextArrow} onClick={()=>onPageTurnHandler(1)}></img></div>}
        </div>
       
        <div className="return" onClick={onClickReturnHandler}>Return</div>
        
    </div>
    
  )
}
