import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeSideText from "../components/home/HomeSideText";
import Logo from "../components/common/Logo";

const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Video />
      </div>

      <div className="relative z-10 h-screen flex flex-col justify-between">
        <div className="absolute top-5 left-5">
          <Logo />
        </div>

        <HomeHeroText />
        <HomeSideText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
