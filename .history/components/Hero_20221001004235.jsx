import React from 'react'
const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center jusify-center h-screen bg-fixed bg-center custom-img bg-cover'>
     {/*overlay*/}
     <div className='absolute top-0 left-0 right-o bottom-0 '>
     <div className='text-white'>
     <h2>{heading}</h2>
     <p>{message}</p>
     <button className='px-'>Book</button>
     </div>
     </div>
    </div>
  )
}

export default Hero
 