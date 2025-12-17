const HomeButton = ({
  onClick,
  className = "",
  ariaLabel = "Open menu",
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        // container
        "group relative isolate overflow-hidden",
        // size/shape (K72-like: long bar)
        "h-16 w-40  md:h-[50px] md:w-[220px]",
        "bg-black",
        // layout
        "flex items-center justify-end pr-6 md:pr-8",
        // interaction
        "select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className,
      ].join(" ")}
    >
      {/* FILL BACKGROUND (LIME — TOP → BOTTOM) */}
      <span
        className="
          absolute
          inset-0
          bg-lime-300
          -translate-y-full
          transition-transform
          duration-[600ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-y-0
          z-0
          pointer-events-none
        "
      />

      {/* ICON (HAMBURGER) */}
      <span className="relative z-10 text-white transition-colors duration-300 ease-out group-hover:text-black">
      <svg width="84" height="31.5" viewBox="0 0 168 31.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke="currentColor" d="M3.5 7h161m-63 17.5h63"/></svg>
      </span>
    </button>
  );
};

export default HomeButton;
