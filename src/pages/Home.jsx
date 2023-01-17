import React from 'react'

import Nearchart from '../components/NearChart/index'
import Navbar from '../components/Navbar/index'
import HomeHero from '../components/hero/index'
import Footer from '../components/Footer/index'
import PopularCollection from '../components/TopCollection/PopularCollection'
import TopGallery from '../components/TopGallery/Topgallery'
import PopularCuratorsList from '../components/popularcurator/PopularCuratorsList'
import HotItemsList from '../components/HotItems/HotItemsList'
import CTA from "../components/CTA/index"

 

function Home() {
  return (
    <div className='bg-bg-dark text-white'>
        <Navbar/>
        <Nearchart/>
        <HomeHero/>
        {/* <TopGallery/> */}
        <PopularCollection/>
        <HotItemsList/>
        <PopularCuratorsList/>
        <CTA/>

        <Footer/>
    </div>
  )
}

export default Home