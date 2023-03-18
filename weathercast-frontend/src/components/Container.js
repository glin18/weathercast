import React from 'react'
import '../App.css';
import { LeftContainer } from "./LeftContainer"
import { RightContainer } from "./RightContainer"

export const Container = () => {
  return (
    <div className="outer-container">
        <LeftContainer/>
        <RightContainer/>
    </div>
  )
}
