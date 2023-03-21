import React, { useContext } from 'react'
import { HandlerContext } from "../Container"


export const DailyCard = ({index, data}) => {
    const { onClickCardHandler } = useContext(HandlerContext)

  return (         
    <div className="daily-card" key={index} onClick={data?.day ? ()=>onClickCardHandler(index+1) : undefined}>
        {data?.day && 
        <>
            <div className="daily-card-temperature">
                {data?.day?.avgtemp_c + "°C" || "28°C"}
            </div>
            <div className="daily-card-status-container">
                <div className="daily-card-status">{data?.day?.condition?.text || "Rain"}</div>
                <img src={data?.day?.condition?.icon}></img>
            </div>
            <div className="daily-card-date">
                {data?.date || "Tue 28, July 20"}
            </div>
        </>
        }
    </div>
  )
}
