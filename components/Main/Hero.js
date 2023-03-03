import React from 'react'
import Socials from '../Socials'

const Hero = () => {
  return (
    <>
    <div className="bg-slide2 bg-cover bg-center relative">
        {/* Side Bar */}
        <div className="h-screen absolute bg-[#2B2B2B] w-44">
            <div className="w-[23rem] h-[23.75rem] bg-[#2B2B2B]">
                <div className="text-center pt-10">
                    <h1 className="font-extrabold text-[white] text-4xl">sana<span className="text-theme">.</span>moda</h1>
                    <h1 className="font-bold text-white left-[-300px] top-[260px] text-[140px] opacity-5 absolute">sana.moda</h1>
                    <h2 className="mr-16 text-theme text-[76px] mt-16 tracking-[5px] font-oswald">01<span className="ml-5 mt-8 text-white opacity-10 text-lg absolute top-[110px] tracking-[2px]">/&nbsp;&nbsp;03</span></h2>
                </div>
            </div>
            <h4 className="text-white font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-28">Architecture Buro</h4>
            <hr className="bg-white/5 font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-32 w-12 ml-16"/>
            <div className="absolute bottom-12 left-14">
                <Socials />
            </div>
        </div>
        <div className="container mx-auto relative h-screen">
            <div className="flex h-full items-center text-right justify-end">
                {/* Text Block */}
                <div className="space-y-10 mt-32">
                    <h2 className="text-5xl text-white uppercase tracking-[20px] font-oswald -mr-5">Modern Hotel In London</h2>
                    <h3 className="text-lg text-white font-normal ml-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, while being commonly used everywhere.</h3>
                    <button className="text-lgl text-white bg-theme font-mont font-bold py-3 px-8 rounded-full uppercase tracking-widest">Look More &#8594;</button>
                </div>

            </div>
        </div>  
    </div>
    </>
  )
}

export default Hero