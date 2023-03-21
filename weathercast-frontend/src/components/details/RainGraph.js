import React from 'react'
import { BarChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label, Bar, Legend } from 'recharts';

export const RainGraph = ({data, page}) => {

    const graphData = data.forecast.forecastday[page].hour

  return (
    <div className="rain-graph-card">
        <div className="rain-graph-container">
        <BarChart width={660} height={220} data={graphData}>
            <XAxis dataKey="time" tickFormatter={(data)=>(
                    data.slice(11)
                )}>
                {/* <Label value="Time" offset={0} position="bottom"/> */}
            </XAxis>
            <YAxis dataKey="precip_mm" tickFormatter={(data)=>(data + " mm")}>
                {/* <Label value="°C" offset={0} angle={-90} position="center" /> */}
            </YAxis>
            <Bar dataKey="precip_mm" fill="#318CE7"/>
            <Legend verticalAlign="top" height={36}/>
            <Tooltip formatter={(label)=>(label + " mm")}/>
        </BarChart>
        </div>
    </div>
  )
}
