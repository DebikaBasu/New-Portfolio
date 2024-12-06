import React, { useRef } from "react";
import gsap from "gsap";
import PageBottom1 from "../components/PageBottom1";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = tiltRef.current.getBoundingClientRect();
    const xVal = (clientX - rect.left - rect.width / 2) / 20; // Adjust sensitivity
    const yVal = -(clientY - rect.top - rect.height / 2) / 20;

    // Apply inline style for tilt effect
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  const mouseLeave = () => {
    // Animate back to original position with GSAP
    gsap.to(tiltRef.current, {
      transform: "rotateX(yVal) rotateY(xVal)",
      duration: 1,
      ease: "power4.out",
    });
  };

  return (
    <div
      id="page1"
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className="h-screen p-4 relative bg-white"
    >
      <div
        id="page1-in"
        className="relative p-24 shadow-xl shadow-gray-700 h-full w-full bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_606,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]"
      >
        <img
          className="h-16 mt-[-10px]"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt="logo image"
        />
        <TiltText abc={tiltRef} />
        <PageBottom1 />
      </div>
    </div>
  );
};

export default Page1;
