import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const DetailsGraph = ({data , page }) => {

    const graphData = data.forecast.forecastday[page].hour

  return (
    <div className="details-graph-container">
        <LineChart width={730} height={220} data={graphData}>
            <XAxis dataKey="time"/>
            <YAxis dataKey="temp_c"/>
            <Line dataKey="temp_c"/>
        </LineChart>
    </div>
  )
}
