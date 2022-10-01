import React from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
const Slider = ({slides}) => {
  return (
    <div id="gallery">
    <h1>Gallery</h1>
    <div>
    {SliderData.map((slide,index)=>{
        return(
     <Image src={slide.image}/>
    )
    })}
    </div>
      
    </div>
  )
}

export default Slider
