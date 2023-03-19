import React, { useContext } from 'react'
import { TodayCard } from "./right/TodayCard"
import { DailyCard } from "./right/DailyCard"
import { DataContext } from "./Container"
import { HandlerContext } from './Container'

export const RightContainer = () => {

    const data = useContext(DataContext)
    const { onClickCardHandler } = useContext(HandlerContext)

  return (
    <div className="right-container">
        <div className="today">
            Today
        </div>
        <TodayCard onClickCardHandler={onClickCardHandler}/>
        <div className="daily">
            Daily
        </div>
        <div className="daily-card-container">
            {
                data?.forecast?.forecastday ? 
                data.forecast.forecastday.slice(1).map((data, index)=>(
                    <DailyCard key={index} data={data} onClickCardHandler={()=> onClickCardHandler(index + 1)}/>
                ))
                : 
                <>
                    <DailyCard/>
                    <DailyCard/>
                    <DailyCard/>
                    <DailyCard/>
                    <DailyCard/>
                    <DailyCard/>
                </>
            }
        </div>
        
    </div>
  )
}
