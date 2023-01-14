/* eslint-disable jsx-a11y/anchor-is-valid */
// import axios from 'axios';
import React, { useState } from 'react';
import image from "../../assets/images/image.gif"
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.png"
import image3 from "../../assets/images/image3.webp"
import image4 from "../../assets/images/image4.webp"  


const PopularCollection = (props) => {

    // const [data, setData] = useState(null)

    // const url = 'https://api-v2-mainnet.paras.id/collection-stats?'

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setData(response.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    // console.log(data)

    // if (!data) return null

    //Search function

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    // const filteredData = data.filter((el) => {
    //     //if no input the return the original
    //     if (props.input === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })



    return (

        <div className="container mb-[20px]">
            <div className="mb-[20px] general-header">
                <h1 className="text-[30px] font-[600] font-[syne]">Trending Collection</h1>
                <input type="search" name="search" placeholder='search' id="" onChange={inputHandler} />
            </div>
            <div className='overflow-x-scroll scrollbar-hide'>
                <table className="text-sm font-[grotesk] text-left w-full">
                    <thead className="text-sm font-bold bg-blue-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Collections
                            </th>
                            <th scope="col" className="px-6 py-3 md:inline-flex hidden">
                                Market Cap
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Volume
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Floor Price
                            </th>
                            <th scope="col" className="px-6 py-3 md:inline-flex hidden">
                                Total Supply
                            </th>
                            <th scope="col" className="px-6 py-3 md:inline-flex hidden">
                                Holders
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-[grotesk]" input={inputText}>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">1.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image2} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>Antisocial Apes Club</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$1,086,851</td>
                            <td className="px-6 py-4 whitespace-nowrap">290,837.35</td>
                            <td className="px-6 py-4 whitespace-nowrap">58 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">3,329</td>
                            <td className="px-6 py-4 md:inline-flex hidden">1,245</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">2.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>NEARNauts</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$1,219,643</td>
                            <td className="px-6 py-4 whitespace-nowrap">138,682.85</td>
                            <td className="px-6 py-4 whitespace-nowrap">24.9 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">7,777</td>
                            <td className="px-6 py-4 md:inline-flex hidden">1,889</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">3.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image4} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>Secret Skellies Society</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$736,981</td>
                            <td className="px-6 py-4 whitespace-nowrap">95,257.75</td>
                            <td className="px-6 py-4 whitespace-nowrap">170 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">748</td>
                            <td className="px-6 py-4 md:inline-flex hidden">142</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">4.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image1} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>BOO Monsters</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$426,173</td>
                            <td className="px-6 py-4 whitespace-nowrap">23,379.47</td>
                            <td className="px-6 py-4 whitespace-nowrap">1700 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">43</td>
                            <td className="px-6 py-4 md:inline-flex hidden">43</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">5.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image3} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>Mara Gen 0</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$408,100</td>
                            <td className="px-6 py-4 whitespace-nowrap">39,464.32</td>
                            <td className="px-6 py-4 whitespace-nowrap">700 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">100</td>
                            <td className="px-6 py-4 md:inline-flex hidden">80</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">6.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image2} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>NPunks</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$349,800</td>
                            <td className="px-6 py-4 whitespace-nowrap">29,746.63</td>
                            <td className="px-6 py-4 whitespace-nowrap">6.49 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">10,000</td>
                            <td className="px-6 py-4 md:inline-flex hidden">2,122</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">7.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image3} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>Aurora Doves</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$314,820</td>
                            <td className="px-6 py-4 whitespace-nowrap">7,787.69</td>
                            <td className="px-6 py-4 whitespace-nowrap">6.5 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">9,000</td>
                            <td className="px-6 py-4 md:inline-flex hidden">1,648</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">8.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image4} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>The Near Box</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$336,810</td>
                            <td className="px-6 py-4 whitespace-nowrap">111.11</td>
                            <td className="px-6 py-4 whitespace-nowrap">2,222 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">28</td>
                            <td className="px-6 py-4 md:inline-flex hidden">6</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">9.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>SkullingHam Estates</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$190,903</td>
                            <td className="px-6 py-4 whitespace-nowrap">6,409.41</td>
                            <td className="px-6 py-4 whitespace-nowrap">295 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">111</td>
                            <td className="px-6 py-4 md:inline-flex hidden">10</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">10.</th>
                            <td className="px-6 py-4">
                                <div className="flex-shrink-5 flex items-center">
                                    <img src={image1} onContextMenu={(e) => e.preventDefault()} className="rounded md:rounded-lg w-10 md:w-32 lg:w-10" alt="" />
                                    <p className='pl-[15px] whitespace-nowrap'>The Undead Army</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 md:inline-flex hidden">$181,359</td>
                            <td className="px-6 py-4 whitespace-nowrap">54,051.2</td>
                            <td className="px-6 py-4 whitespace-nowrap">7.35 NEAR</td>
                            <td className="px-6 py-4 md:inline-flex hidden">4,444</td>
                            <td className="px-6 py-4 md:inline-flex hidden">700</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default PopularCollection;
