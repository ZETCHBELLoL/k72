const MenuMiddle = () => {
  return (
    <div className="font-[font1] flex justify-center w-full text-white">
      <div className="font-[font2] w-full">

        <div className=" w-full border-t border-white/20" />

        {["WORK", "AGENCY", "CONTACT", "BLOG"].map((item) => (
          <div key={item}>
            {/* ROW */}
            <div
              className="
                h-[115px]
                flex
                items-center
                justify-center
                text-center
                text-[clamp(3.4rem,9vw,8.2rem)]
                font-medium
                tracking-tight
                leading-none
                translate-y-1.5
              "
            >
              {item}
            </div>

            <div className="w-full border-t border-white/20" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default MenuMiddle;
