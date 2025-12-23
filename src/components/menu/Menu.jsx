import MenuHeader from "./MenuHeader";
import MenuMiddle from "./MenuMiddle";
import MenuBottom from "./MenuBottom";

const Menu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden">

      {/* HEADER — ALWAYS ON TOP */}
      <div className="relative z-50">
        <MenuHeader onClose={onClose} />
      </div>

      {/* CONTENT AREA */}
      <div className="relative h-[calc(100vh-160px)]">

        {/* MIDDLE — VISUAL ONLY */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            bottom-[220px]
            px-4
            flex
            items-center
            justify-center
            translate-y-[40px]
            z-10
            pointer-events-none
          "
        >
          <MenuMiddle />
        </div>

        {/* FOOTER — INTERACTIVE */}
        <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
          <div className="pointer-events-auto">
            <MenuBottom />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
