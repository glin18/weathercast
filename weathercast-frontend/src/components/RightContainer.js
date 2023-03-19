import React, { useContext } from 'react'
import { TodayCard } from "./right/TodayCard"
import { DailyCard } from "./right/DailyCard"
import { DataContext } from "./Container"

export const RightContainer = () => {

    const data = useContext(DataContext)

  return (
    <div className="right-container">
        <div className="today">
            Today
        </div>
        <TodayCard/>
        <div className="daily">
            Daily
        </div>
        <div className="daily-card-container">
            {
                data?.forecast?.forecastday ? 
                data.forecast.forecastday.slice(1).map((data, index)=>(
                    <DailyCard key={index} data={data}/>
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
