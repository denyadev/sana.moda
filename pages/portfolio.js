import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactBox from '../components/Main/ContactBox'
import Lines from '../components/Lines'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import Projects from '../components/Main/Projects'

const portfolio = () => {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <main className="font-mont bg-[#272727] h-screen scrollbar-thin scrollbar-thumb-theme scrollbar-track-[#272727]">
            <Lines />
            <Header />
            <PortfolioHero />
            <Projects />
            <Projects />
            <ContactBox />
            <Footer />
        </main>
    </div>
  )
}

export default portfolio