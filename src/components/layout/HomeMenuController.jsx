import { useState } from "react";
import HomeButton from "../common/HomeButton";
import Menu from "../menu/Menu";
import { playStairs } from "../common/Stairs";

const HomeMenuController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    playStairs(() => setIsMenuOpen(true));
  };

  const closeMenu = () => {
    playStairs(() => setIsMenuOpen(false));
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-40">
        <HomeButton onClick={openMenu} />
      </div>

      {isMenuOpen && <Menu onClose={closeMenu} />}
    </>
  );
};

export default HomeMenuController;
