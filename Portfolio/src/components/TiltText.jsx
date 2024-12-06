import React from 'react';

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-30">
          <h1 className="text-[4.1vw] leading-[1vw] uppercase font-[anzo1]">
            I am <span className="text-black">DARK MODE</span>™
          </h1>
          <h1 className="text-[6.8vw] leading-[3vw] font-[anzo]">DESIGNER</h1>
          <h1 className="text-[4.1vw] leading-[1vw] uppercase font-[anzo1]">
            To Hire
          </h1>
        </div>
  );
};

export default TiltText;
