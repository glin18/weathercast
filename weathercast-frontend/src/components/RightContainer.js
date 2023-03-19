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
                    <DailyCard index={index} data={data}/>
                ))
                : 
                <>
                    <DailyCard index={0}/>
                    <DailyCard index={1}/>
                    <DailyCard index={2}/>
                    <DailyCard index={3}/>
                    <DailyCard index={4}/>
                    <DailyCard index={5}/>
                </>
            }
        </div>
        
    </div>
  )
}
