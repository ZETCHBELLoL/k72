// src/components/menu/MenuMarquee.jsx

import HeartIcon from "../common/HeartIcon";

const MenuMarquee = ({ item }) => {
  return (
    <div className="flex items-center whitespace-nowrap animate-marquee h-full text-black">
      {[0, 1].map((loopIndex) => (
        <div key={loopIndex} className="flex items-center">
          
          {/* TEXT */}
          <span className="px-6 text-[6vw] uppercase font-medium">
            {item.text}
          </span>

          {/* IMAGE 1 / HEART */}
          {item.type === "images" ? (
            <div
              className="
                mx-6
                h-[96px]
                w-[260px]
                rounded-full
                bg-cover
                bg-center
                flex-shrink-0
              "
              style={{
                backgroundImage: `url(/images/${item.images[0]})`,
              }}
            />
          ) : (
            <HeartIcon className="mx-6 w-[88px] h-[88px] flex-shrink-0 text-black" />
          )}

          {/* TEXT AGAIN */}
          <span className="px-6 text-[6vw] uppercase font-medium">
            {item.text}
          </span>

          {/* IMAGE 2 / HEART */}
          {item.type === "images" ? (
            <div
              className="
                mx-6
                h-[96px]
                w-[260px]
                rounded-full
                bg-cover
                bg-center
                flex-shrink-0
              "
              style={{
                backgroundImage: `url(/images/${item.images[1]})`,
              }}
            />
          ) : (
            <HeartIcon className="mx-6 w-[88px] h-[88px] flex-shrink-0 text-black" />

          )}

        </div>
      ))}
    </div>
  );
};

export default MenuMarquee;
