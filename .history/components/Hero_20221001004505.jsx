import React from 'react'
const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
     {/*overlay*/}
     <div className='absolute top-0 left-0 right-o bottom-0 '>
     <div className='text-white'>
     <h2 className='text-5xl font-bold'>{heading}</h2>
     <p className='py-5 text-xl'>{message}</p>
     <button className='px-8 py-2 border'>Book</button>
     </div>
     </div>
    </div>
  )
}

export default Hero
 