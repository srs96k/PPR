import Card from '../Card/Card'
import React from 'react'
import "./Houses.css"
import house from "../../assets/house.jpg"
import housekichen from "../../assets/housekichen.jpg"
import houseliving from "../../assets/houseliving.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa3 from "../../assets/villa3.jpg"
import ski from "../../assets/ski.jpg"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import roomnew from "../../assets/roomnew.jpg"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"

function Houses() {
  return (
    <div id="houses">
      <Card image1={house} image2={housekichen} image3={houseliving} title='2Bhk villa in pune' price={'25000'}/>
      <Card image1={villa} image2={villa1} image3={villa3} title='2Bhk villa in pune' price={'25000'}/>
      <Card image1={ski} image2={ski1} image3={ski2} title='3Bhk mountain in Manali ' price={'95000'}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title='1Bhk morden room in jhansi' price={'50000'}/>
    </div>
  )
}

export default Houses