import React from 'react'
import Video from '../components/home/video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import Logo from '../components/common/Logo.jsx'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <div className="absolute top-5 left-5 z-10">
          <Logo />
        </div>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home