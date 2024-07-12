"use client";
import { useEffect } from "react";

const MovingHeadline = () => {
  useEffect(() => {
    const headline = document.querySelector(".moving-headline");

    if (headline) {
      const animateHeadline = () => {
        const animation = headline.animate(
          [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
          ],
          {
            duration: 50000, // Longer duration for slower movement
            iterations: Infinity,
          }
        );
        return animation;
      };

      const animation = animateHeadline();

      const handleMouseEnter = () => {
        animation.pause();
      };

      const handleMouseLeave = () => {
        animation.play();
      };

      headline.addEventListener("mouseenter", handleMouseEnter);
      headline.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        animation.cancel();
        headline.removeEventListener("mouseenter", handleMouseEnter);
        headline.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="overflow-hidden bg-[#B12F1B]">
      <h1 className="mobile:w-full mobile:h-10 mobile:py-2 py-4 transform -translate-y-1/2   text-white moving-headline  hover:cursor-pointer mobile:whitespace-nowrap">
        Use Coupon NOIDA10 for 10% Inaugural Discount at the New HOD Noida
        Sec-19 for 3T MRI, CT Scan, Ultrasound, X-Ray, Blood Tests More.
      </h1>
    </div>
  );
};

export default MovingHeadline;
