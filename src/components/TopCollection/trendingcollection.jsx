import React from 'react'
// import { trendingdata } from './trendingdata';


function Trendingcollection({item}) {
  return (
    <div>
        <tr className="border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">10.</th>
            <td className="px-6 py-4">
                <div className="flex-shrink-5 flex items-center">
                    <div onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="">{item.image}</div>
                    <p className='pl-[15px] whitespace-nowrap'>{item.name}</p>
                </div>
            </td>
            <td className="px-6 py-4 md:inline-flex hidden">{item.Collection}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.MarketCap}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.FloorPrice}</td>
            <td className="px-6 py-4 md:inline-flex hidden">{item.TotalSupply}</td>
            <td className="px-6 py-4 md:inline-flex hidden">{item.Holders}</td>
        </tr>
    </div>
  )
}

export default Trendingcollection




// <tr>
//     {trendingdata.map((item) => (
//         <Trendingcollection item={item} key={item.id} />
//     ))}
// </tr>