import React from 'react'

const Footer = () => {
  return (
    <footer className="container grid grid-cols-3 items-center mx-auto pb-16 text-white/50 relative">
        {/* <div className="container mx-auto grid grid-cols-3 h-full absolute">
            <div className="border-l border-[#373737]" />
            <div className="border-l border-[#373737]" />
            <div className="border-l border-r border-[#373737]" />
        </div> */}
        <h1 className="font-extrabold text-[white] text-4xl">kal<span className="text-theme">.</span>oyan</h1>
        <p className="text-xs text-center">by denyadev</p>
        <p className="text-xs text-right">© kal.oyan 2022. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer