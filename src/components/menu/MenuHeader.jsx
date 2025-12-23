import Logo from "../common/Logo";
import CrossIcon from "../common/CrossIcon";

const MenuHeader = ({ onClose }) => {
  return (
    <div className="relative font-[font2] w-full h-[160px]">
      {/* LOGO */}
      <div className="absolute top-3 left-3">
        <Logo className="h-12.5 w-auto text-white" />
      </div>

      

      {/* CLOSE ICON */}
      <button
  onClick={onClose}
  aria-label="Close menu"
  className="
    absolute
    top-[82px]
    right-[16px]
    -translate-y-1/2
    text-white/90
    hover:text-[#d3fd50]
    transition-colors
  "
>
  <CrossIcon size={128} />
</button>

    </div>
  );
};

export default MenuHeader;
