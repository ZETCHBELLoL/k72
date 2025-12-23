const MenuHeader = ({ onClose }) => {
  return (
    <div className="flex items-start justify-between px-6 pt-6">
      {/* LOGO */}
      <div className="text-3xl font-extrabold">K72</div>

      {/* LANGUAGE */}
      <div className="text-sm tracking-wide opacity-80 mt-1">
        EN / FR
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="w-9 h-9 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth=".5"
          strokeLinecap="round"
          className="w-9 h-9"
        >
          <path d="m8 8 8 8m0-8-8 8" />
        </svg>
      </button>
    </div>
  );
};

export default MenuHeader;
