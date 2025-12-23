import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

let playStairsGlobal = null;
let manualNavigation = false; // 🔑 LOCK

export const playStairs = (onCover) => {
  manualNavigation = true;
  playStairsGlobal && playStairsGlobal(onCover);
};

const Stairs = () => {
  const wrapperRef = useRef(null);
  const location = useLocation();
  const firstLoad = useRef(true);

  const run = (onCover) => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(wrapperRef.current, {
          opacity: 0,
          pointerEvents: "none",
        });
        gsap.set(".stair", { y: "0%" });
        manualNavigation = false; // 🔓 unlock
      },
    });

    // BLOCK SCREEN
    gsap.set(wrapperRef.current, {
      opacity: 1,
      pointerEvents: "auto",
    });

    // STAIRS IN
    tl.fromTo(
      ".stair",
      { height: 0 },
      {
        height: "100%",
        stagger: { amount: -0.25 },
        ease: "power4.inOut",
        onComplete: onCover,
      }
    );

    // STAIRS OUT
    tl.to(".stair", {
      y: "100%",
      stagger: { amount: -0.25 },
      ease: "power4.inOut",
    });
  };

  // expose for manual triggers
  playStairsGlobal = run;

  // 👇 BACK / RELOAD HANDLER (SAFE NOW)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    if (manualNavigation) return; // ❌ ignore manual nav

    run(); // ✅ back / reload only
  }, [location.pathname]);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-50 opacity-0 pointer-events-none"
    >
      <div className="flex h-full">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="stair w-1/5 h-full bg-black" />
        ))}
      </div>
    </div>
  );
};

export default Stairs;
