const MenuFooter = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
      {/* LEGAL */}
      <div className="text-[11px] leading-5 tracking-wide uppercase opacity-80 mb-5">
        <p>Privacy Policy</p>
        <p>Privacy Notice</p>
        <p>Ethics Report</p>
        <p>Consent Choices</p>
      </div>

      {/* SOCIAL */}
      <div className="flex justify-center gap-3">
        {["FB", "IG", "IN", "BE"].map((item) => (
          <div
            key={item}
            className="
              px-5 
              h-10 
              border 
              border-white 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-[15px] 
              font-medium
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFooter;
