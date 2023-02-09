import React from 'react'
import Newsletter from '../components/Newsletter/Index'
import Nearchart from '../components/NearChart/index'
import Navbar from '../components/Navbar/index'
import HomeHero from '../components/hero/index'
import Footer from '../components/Footer/index'
import PopularCollection from '../components/TopCollection/PopularCollection'
// import TopGallery from '../components/topgallery/Topgallery'
// import PopularCuratorsList from '../components/popularcurator/PopularCuratorsList'
// import HotItemsList from '../components/hotitems/HotItemsList'
import RecentListing from '../components/RecentListing/RecentListing'
import FeaturedCollection from '../components/upcominglisting/UpcomingList'
import CTA from '../components/CTA'
import Cart from '../components/Cart/index'


function Home() {
  return (
    <div className='bg-bg-dark text-white'>
      <Navbar />
      {/* <Cart /> */}
      <Nearchart />
      <HomeHero />
      {/* <TopGallery/> */}
      <PopularCollection />
      {/* <HotItemsList/> */}
      <FeaturedCollection />
      <RecentListing />
      {/* <PopularCuratorsList/> */}
      <CTA />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Home