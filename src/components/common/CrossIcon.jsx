const CrossIcon = ({ size = 36, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7.5 7.5 9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth=".2"
      strokeLinecap="round"
      width={size}
      height={size}
      className={className}
    >
      <path d="m8 8 8 8m0-8-8 8" />
    </svg>
  );
};

export default CrossIcon;
