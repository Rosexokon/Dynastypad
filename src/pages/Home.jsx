import React from 'react'
import Nearchart from '../components/nearchart'
import Navbar from '../components/navbar'
import HomeHero from '../components/hero'
import Footer from '../components/footer'
import PopularCollection from '../components/topcollection/PopularCollection'
// import TopGallery from '../components/topgallery/Topgallery'
// import PopularCuratorsList from '../components/popularcurator/PopularCuratorsList'
// import HotItemsList from '../components/hotitems/HotItemsList'
import RecentListing from '../components/recentlisting/RecentListing'
import FeaturedCollection from '../components/upcominglisting/UpcomingList'

function Home() {
  return (
    <div className='bg-bg-dark text-white'>
      <Navbar />
      <Nearchart />
      <HomeHero />
      {/* <TopGallery/> */}
      <PopularCollection />
      {/* <HotItemsList/> */}
      <FeaturedCollection />
      <RecentListing />
      {/* <PopularCuratorsList/> */}
      <Footer />
    </div>
  )
}

export default Home