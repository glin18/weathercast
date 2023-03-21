import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label, Legend } from 'recharts';

export const DetailsGraph = ({data , page }) => {

    const graphData = data.forecast.forecastday[page].hour

  return (
    <div className="details-graph-card">
        <div className="details-graph-container">
            <LineChart width={730} height={220} data={graphData}>
                <XAxis dataKey="time" tickFormatter={(data)=>(
                    data.slice(11)
                )}>
                    {/* <Label value="Time" offset={0} position="bottom"/> */}
                </XAxis>
                <YAxis dataKey="temp_c" tickFormatter={(data)=>(data + "°C")}>
                    {/* <Label value="°C" offset={0} angle={-90} position="center" /> */}
                </YAxis>
                <Legend verticalAlign="top" height={36}/>
                <Line name="temperature" dataKey="temp_c"/>
                <Line name="real feel" dataKey="feelslike_c" stroke="green"/>
                <Tooltip formatter={(label)=>(label + "°C")}/>
            </LineChart>
        </div>
    </div>
  )
}
