const MenuItem = ({ label, path, onNavigate }) => {
  return (
    <div>
      <div
        onClick={() => onNavigate(path)}
        className="
          cursor-pointer 
          py-px 
          text-center 
          text-[clamp(3rem,10vw,5.5rem)] 
          font-extrabold 
          tracking-tight 
          leading-none
        "
      >
        {label}
      </div>

      <div className="w-full border-t border-white/20" />
    </div>
  );
};

export default MenuItem;
