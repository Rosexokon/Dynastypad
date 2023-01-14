import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NearChart from '../components/NearChart'

function Home() {
  return (
    <div>
        <Navbar/>
        <NearChart/>
        <Hero/>
    </div>
  )
}

export default Home