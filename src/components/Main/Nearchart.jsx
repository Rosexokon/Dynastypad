/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import '../styles/NearChart.css'

const Nearchart = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&community_data=true&developer_data=true'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)

    if(!data) return null

    return (
        <div className=''>
            <div className='bg-white drop-shadow mt-0'>
               <marquee behavior="scroll" direction="left" scrollamount="8">
                <div className='flex text-sm justify-center text-center'>
                    <div className='m-2 content'><span>Coins: </span><a href='' className='text-[#4176FF]'>{data.name}</a></div>
                    <div className='m-2 content'><span>Exchanges: </span><a href='' className='text-[#4176FF]'>{data.market_data.current_price.usd}</a></div>
                    <div className='m-2 content'><span>Market Cap: </span><a href='' className='text-[#4176FF]'>{data.market_data.market_cap.usd}</a></div>
                    <div className='m-2 content'><span>Volume: </span><a href='' className='text-[#4176FF]'>${data.market_data.total_volume.usd}</a></div>
                    <div className='m-2 content'><span>Total Supply: </span><a href='' className='text-[#4176FF]'>{data.market_data.max_supply}</a></div>
                    <div className='m-2 content'><span>Circulating Supply: </span><a href='' className='text-[#4176FF]'>{data.market_data.circulating_supply}</a></div>
                    <div className='m-2 content'><span>Explorer: </span><a href='https://explorer.near.org/' className='text-[#4176FF]' >{data.links.blockchain_site[0]}</a></div>
                </div>
               </marquee> 
            </div>
        </div>
    );
}

export default Nearchart;
