import React from 'react'
import { TodayCard } from "./right/TodayCard"

export const RightContainer = () => {
  return (
    <div className="right-container">
        <div className="today">
            Today
        </div>
        <TodayCard/>
    </div>
  )
}
