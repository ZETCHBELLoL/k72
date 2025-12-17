import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import Logo from '../components/common/Logo.jsx'
import HomeSideText from "../components/home/HomeSideText"
import HomeButton from "../components/common/HomeButton.jsx"


const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Video />
      </div>
      <div className="h-screen w-screen relative z-10 flex flex-col justify-between">
        <div className="absolute top-5 left-5 z-10">
          <Logo />
        </div>

        <div className="fixed top-0 right-0 z-20">
          <HomeButton onClick={() => console.log("menu clicked")} ariaLabel="Open menu" />
        </div>

        <HomeHeroText />
        <HomeSideText />
        <HomeBottomText />
      </div>
    </div>
  );
}

export default Home