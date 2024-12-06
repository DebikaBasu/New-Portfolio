import React from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(function() {
        gsap.from(".rotateText",{
            transform: 'rotateX(-80deg)',
            opacity:0,
            duration:1,
            ScrollTrigger:{
                trigger:'.rotateText',
                markers:'true',
                stagger:'1',
                start:'top 60%',
                end:'top -300%',
                scrub:2
            }
        })
    })

  return (
    <div id="section2" className="bg-white text-black text-center p-20">
      <h3 className="text-gray-500 font-[anzo3] mb-10">
        © anzo.studio 2024 | designed and developed
      </h3>
      <div className=" rotateText">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          DESIGN
        </h1>
      </div>
      <div className=" rotateText">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          IS THE
        </h1>
      </div>
      <div className=" rotateText">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          DESIGN
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          THAT
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[38vw] text-black font-[anzo5] leading-[0.8] m-0 p-0">
          WORKS!
        </h1>
      </div>
    </div>
  );
};

export default Page2;
