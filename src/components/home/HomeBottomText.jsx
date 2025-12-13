import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 uppercase ">
      <Link className='text-[6.5vw] leading-[6vw] border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] border-white rounded-full px-10 pt-3 mb-1 ' to='/work'>Work</Link>
      <Link className='text-[6.5vw] leading-[6vw] border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] border-white rounded-full px-10 pt-3 mb-1 ' to='/agency'>Agency</Link>
    </div>
  )
}

export default HomeBottomText