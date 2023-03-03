import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="card-zoom cursor-pointer group">
        <div className="">
            <h4 className="absolute z-10 font-oswald uppercase text-2xl text-white top-0 left-0 p-16 tracking-[2px]">Modern Hotel In London</h4>
            <h6 className="absolute z-10 bottom-40 -left-10 uppercase text-white -rotate-90 tracking-[12px] font-oswald text-sm">Architecture</h6>
            <div className="opacity-40 group-hover:opacity-100">
                <Image className="card-zoom-image" src={require('../../public/4.jpg')} layout="fill" objectFit="cover"/>
            </div>
        </div>
    </div>
  )
}

export default Project