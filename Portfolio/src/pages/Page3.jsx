import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-white'>
        <img className='z-20 absolute'src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png'></img>
        <video  loop muted autoPlay="true" className='z-10 h-[60vh] w-[50vw] relative object-cover' src='/src/assets/file.mp4'></video>
        <div className='h-0.5 w-3/5 top-[40%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-4/5 top-[58%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-full top-[76%] absolute z-0 bg-black'></div>
    </div>
  )
}

export default Page3