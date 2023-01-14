import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";



function NearChart() {
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&community_data=true&developer_data=true'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!data) return null
    return (
        <div className=''>
            <div className='border-t border-b mt-0'>
                <Marquee speed={50} behavior="scroll" direction="left" scrollAmount="8" gradientColor={[28, 30, 30, 1]} gradientWidth={300} >
                    <div className='flex text-sm justify-center text-center items-center space-x-10 py-[10px] '>
                        <div className='m-2 content'><span>Coins: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>{data.name}</a></div>
                        <div className='m-2 content'><span>Price: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>{data.market_data.current_price.usd}</a></div>
                        <div className='m-2 content'><span>Market Cap: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>{data.market_data.market_cap.usd}</a></div>
                        <div className='m-2 content'><span>Volume: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>${data.market_data.total_volume.usd}</a></div>
                        <div className='m-2 content'><span>Total Supply: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>{data.market_data.max_supply}</a></div>
                        <div className='m-2 content'><span>Circulating Supply: </span><a href='https://explorer.near.org/' className='text-[#4176FF]'>{data.market_data.circulating_supply}</a></div>
                        <div className='m-2 content'><span>Explorer: </span><a href='https://explorer.near.org/' className='text-[#4176FF]' >{data.links.blockchain_site[0]}</a></div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default NearChart