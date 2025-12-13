import React from 'react'
import Video from './Video.jsx'

const HomeHeroText = () => {
  return (
    
    <div className="font-[font1] pt-5 text-center">
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>The spark for</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-start'>all <div className="h-[7vw] w-[16vw] rounded-full  overflow-hidden"><Video/></div> things</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>creative</div>
    </div>

  )
}

export default HomeHeroText