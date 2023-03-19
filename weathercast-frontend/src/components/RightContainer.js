import React from 'react'
import { TodayCard } from "./right/TodayCard"
import { DailyCard } from "./right/DailyCard"

export const RightContainer = () => {
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
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
            <DailyCard/>
        </div>
        
    </div>
  )
}
