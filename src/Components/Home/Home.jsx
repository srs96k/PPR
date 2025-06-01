
import Card from '../Card/Card'
import React, { useContext } from 'react'
import "./Home.css"
import house from "../../assets/house.jpg"
import housekichen from "../../assets/housekichen.jpg"
import houseliving from "../../assets/houseliving.jpg"
import farmhouse2 from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse from "../../assets/farmhouse.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa3 from "../../assets/villa3.jpg"
import ski from "../../assets/ski.jpg"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import roomnew from "../../assets/roomnew.jpg"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain2.avif"
import { dataContext } from '../Context/Usercontext'

function Home() {
    let {
      title,
      setTitle,
      addListing,
      setaddListing,
      addImage1,
      setaddImage1,
      addImage2,
      setaddImage2,
      addImage3,
      setaddImage3,
      price,
      setprice
    }=useContext(dataContext)
  return (
    <div id="home">
      <Card image1={house} image2={housekichen} image3={houseliving} title='2Bhk villa in pune' price={'25000'}/>
      <Card image1={farmhouse2} image2={farmhouse1} image3={farmhouse} title='1Bhk Farm house in delhi' price={'60,000'}/>
      <Card image1={villa} image2={villa1} image3={villa3} title='2Bhk villa in pune' price={'25000'}/>
      <Card image1={ski} image2={ski1} image3={ski2} title='3Bhk mountain in Manali ' price={'95000'}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title='1Bhk morden room in jhansi' price={'50000'}/>
      <Card image1={mountain} image2={mountain1} image3={mountain2} title='2Bhk Private room in mumbai' price={'40000'}/>
      {addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}
    </div>
  )
}

export default Home