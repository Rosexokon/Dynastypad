import React from 'react'
import Nearchart from '../components/Main/Nearchart'
import Navbar from '../components/Navbar'
import HomeHero from '../components/Main/HomeHero'
import PopularCollection from '../components/TopCollection/PopularCollection'
import HotItemsList from '../components/HotItems/HotItemsList'
import PopularCuratorsList from '../components/PopularCurators/PopularCuratorsList'
import TopGallery from '../components/TopGallery/Topgallery'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Nearchart/>
        <HomeHero/>
        <TopGallery/>
        <PopularCollection/>
        <HotItemsList/>
        <PopularCuratorsList/>
        <Footer/>
    </div>
  )
}

export default Home