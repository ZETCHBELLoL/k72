// src/components/menu/MenuMiddle.jsx

import { MENU_ITEMS } from "./menuData";
import MenuMarquee from "./MenuMarquee";

const MenuMiddle = () => {
  return (
    <div className="font-[font2] w-full text-white">
      <div className="border-t border-white/20" />

      {MENU_ITEMS.map((item) => (
        <div
          key={item.label}
          className="group relative h-[115px] overflow-hidden border-b border-white/20"
        >
          {/* LABEL (default visible) */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-150 group-hover:opacity-0">
            <span className="text-[clamp(3.4rem,9vw,8.2rem)] font-medium translate-y-1.5">
              {item.label}
            </span>
          </div>

          {/* MARQUEE (hidden → visible on hover) */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              bg-[#d3fd50]
              translate-y-full
              group-hover:translate-y-0
              transition-transform
              duration-500
              ease-out
            "
          >
            <MenuMarquee item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuMiddle;
