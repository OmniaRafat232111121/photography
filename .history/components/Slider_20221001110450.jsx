import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
const [current,setCurrent]=useState(0);
const length=slides.length;
const nextSlide=()=>{
    setCurrent(current===length-1 ? 0:current+1)
}
const prevSlide=()=>{
    setCurrent(current===length-1 ? 0:current-1)
}
if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
          {SliderData.map((slide,index)=>{
            return(
             <div key={index} className={index===current ?'opacity-[1] ease-in duration-1000':'opacity-0'}>
            <FaArrowCircleLeft
            onClick={prevSlide}
            className="a"

             {index===current&&(
                <Image
                src={slide.image}
                alt='/'
                width='1440'
                height='600'
                objectFit='cover'
              />
            )}
             </div>
            )
          })}

          
               
    </div>
    </div>
  );
};

export default Slider;