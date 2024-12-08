import React from 'react';

const Page5 = () => {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full overflow-hidden bg-black rounded-[50px]">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="/src/assets/moon.mp4"
        ></video>
      </div>
      <h1 className="font-[anzo5] text-[22vw] absolute bottom-12 top-12 left-20 text-white">
        ABOUT
      </h1>
    </div>
  );
};

export default Page5;
