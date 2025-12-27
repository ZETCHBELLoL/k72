const HeartIcon = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M50 94 8 50V30L30 8l15 12 5 4 5-4L70 8l22 22v20Z" />
    </svg>
  );
};

export default HeartIcon;
