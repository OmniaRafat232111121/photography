import React from 'react'
import { SliderData } from './SliderData'

const Slider = ({slides}) => {
  return (
    <div id="gallery">
    <h1>Gallery</h1>
    <div>
    {SliderData.map((sli))}
    </div>
      
    </div>
  )
}

export default Slider