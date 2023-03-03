import React from 'react'
import Lines from '../Lines'
import Socials from '../Socials'

const PortfolioHero = () => {
  return (
    <>    
        <div className="bg-portfolio bg-cover bg-top relative">
            <div className="bg-black/70">
                <Lines/>
                {/* Side Bar */}
                <div className="absolute bg-[#2B2B2B] w-44">
                    <div className="w-[23rem] h-[23.75rem] bg-[#2B2B2B]">
                        <div className="text-center pt-10">
                            <h1 className="font-extrabold text-[white] text-4xl">sana<span className="text-theme">.</span>moda</h1>
                            <h1 className="font-bold text-white left-[-300px] top-[260px] text-[140px] opacity-5 absolute">sana.moda</h1>
                        </div>
                        <div>
                        <hr className="bg-white/5 font-bold -rotate-90 tracking-[10px] uppercase text-[10px] whitespace-nowrap mt-16 w-12 ml-16"/>
                        <div className="absolute top-52 left-14">
                            <Socials />
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="container mx-auto relative h-[720px]">
                    <div className="flex h-full items-center justify-end -mr-5">
                        {/* Text Block */}
                        <div className="space-y-10">
                            <h2 className="text-7xl font-medium text-white uppercase tracking-[20px] font-oswald">Portfolio</h2>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}

export default PortfolioHero