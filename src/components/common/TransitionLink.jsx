import { useNavigate } from "react-router-dom";
import { playStairs } from "./Stairs";

const TransitionLink = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    playStairs(() => {
      // navigation ONLY after stairs fully cover
      navigate(to);
    });
  };

  return (
    <button
      onClick={handleClick}
      className="
        font-[font2] uppercase
        text-[6.5vw] leading-[6vw]
        border-3 border-white rounded-full
        px-10 pt-3 mb-1
        transition-colors duration-300
        hover:border-[#d3fd50] hover:text-[#d3fd50]
      "
    >
      {label}
    </button>
  );
};

export default TransitionLink;
