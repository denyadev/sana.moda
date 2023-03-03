import React from 'react'
import Image from 'next/image'
import Project from '../Main/Project'

const Projects = () => {
  return (
    <div className="h-screen grid grid-cols-4 bg-black z-10 relative">
        <Project />
        <Project />
        <Project />
        <Project />
    </div>
  )
}

export default Projects