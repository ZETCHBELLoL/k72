const MenuBottom = () => {
  return (
    <div className="font-[font2] absolute bottom-4 left-0 right-0 text-white">
      <div className="relative flex items-center w-full">
        {/* ───── LEGAL LINKS (CENTER) ───── */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            flex
            gap-4
            px-16
            text-[11px]
            tracking-wide
            uppercase
            opacity-80
          "
        >
          {[
  "Privacy Policy",
  "Privacy Notice",
  "Ethics Report",
  "Consent Choices",
].map((item) => (
  <span
    key={item}
    className="
      relative
      cursor-pointer
      transition-colors duration-200
      hover:text-[#d3fd50]
    "
  >
    {item}
  </span>
))}

        </div>

        {/* ───── SOCIAL LINKS (TRUE RIGHT CORNER) ───── */}
        <div className="ml-auto pr-4 flex gap-3">
          {["FB", "IG", "IN", "BE"].map((item) => (
            <div
              key={item}
              className="
                h-10
                min-w-[64px]
                px-4
                border-2
                border-white
                rounded-full
                flex
                items-center
                justify-center
                text-[32px]
                font-bold
                leading-none
                cursor-pointer
                transition-colors duration-200
                hover:text-[#d3fd50]
                hover:border-[#d3fd50]
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBottom;
