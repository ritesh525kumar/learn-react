import React from 'react'
import logo from '../Img/flipcart.png'
import { FaHeart } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { FcFlashAuto } from 'react-icons/fc'
import cycle from '../Img/cycle.png'
import camera from '../Img/camea.png'
import destop from '../Img/des.png'
import earth from '../Img/earth.png'
import { BsStarFill } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import copy from '../Img/copy.png'

function Navbar() {
    const nagigation = () => {

    }
    return (
        <>
            <div className="navbar bg-orange-500 w-full h-16 flex justify-between items-center">
                <img src={logo} alt="" className='md:w-24 h-8 md:ml-20' />
                <input type="search" placeholder='Search for anythings' className='w-[590px] p-2 outline-none rounded-sm ml-16 ' />
                <div className='text-2xl bg-yellow-400 px-4 py-2 md:-ml-32 '><AiOutlineSearch /></div>
                <div className=' flex justify-between md:mx-20 items-center'>
                    <div className='px-5 text-white text-lg '>Sujeet</div>
                    <div className='px-5 text-white text-2xl'><FaHeart /></div>
                    <div className='px-5 text-white text-2xl'><BsCart /></div>
                </div>
            </div>
            <div className='flex mt-6'>
                <div className='text-4xl mx-2'><FcFlashAuto /></div>
                <div className='text-2xl font-medium'>Flash Deals</div>
            </div>
            <div className='flex mt-6 px-4 '>
                <div className="cart w-1/4  pb-3 border-solid border-2 mx-2 rounded-md bg-red-400">
                    <p className='bg-yellow-400 w-20 px-2 py-2 text-center rounded-md m-4'>50% off</p>
                    <img src={cycle} alt="" className='w-60 h-56 md:mx-1' />
                    <p className='text-white mt-2 mx-3 font-medium'>Hero Cycle</p>
                    <div className='text-yellow-300 mx-3 flex'><BsStarFill />
                        <div className='px-3'><BsStarFill /></div>
                        <div><BsStarFill /></div>
                    </div>

                    <div className='flex mt-1 mx-3'>
                        <div className='text-yellow-400 my-2 text-2xl'><BiRupee /></div>
                        <p className='text-yellow-400 text-2xl font-medium'>78,00</p>
                    </div>
                </div>
                <div className="cart w-1/4 pb-3 border-solid border-2 mx-2 bg-red-400 rounded-md  " >
                    <p className='bg-yellow-400 w-20 px-2 py-2 rounded-md m-4 text-center'>50% off</p>
                    <img src={camera} alt="" className='w-56 md:mx-3' />
                    <p className='text-white mt-2 mx-3 font-medium'>Hd Camera</p>
                    <div className='text-yellow-300 mx-3 flex'><BsStarFill />
                        <div className='px-3'><BsStarFill /></div>
                        <div><BsStarFill /></div>
                    </div>
                    <div className='flex mt-1 mx-3'>
                        <div className='text-yellow-400 my-2 text-2xl'><BiRupee /></div>
                        <p className='text-yellow-400 text-2xl font-medium'>45,599</p>
                    </div>
                </div>
                <div className="cart w-1/4 pb-3 border-solid border-2 mx-2 bg-red-400 rounded-md ">
                    <p className='bg-yellow-400 w-20 px-2 py-2 rounded-md m-4 text-center'>50% off</p>
                    <img src={destop} alt="" className='w-60 md:mx-1' />
                    <p className='text-white mt-2 mx-3 font-medium'>Moniter</p>
                    <div className='text-yellow-300 mx-3 flex'><BsStarFill />
                        <div className='px-3'><BsStarFill /></div>
                        <div><BsStarFill /></div>
                    </div>
                    <div className='flex mt-1 mx-3'>
                        <div className='text-yellow-400 my-2 text-2xl'><BiRupee /></div>
                        <p className='text-yellow-400 text-2xl font-medium'>99,99</p>
                    </div>

                </div>
                <div className="cart w-1/4 pb-3 border-solid border-2 mx-2 bg-red-400 rounded-md">
                    <p className='bg-yellow-400 w-20 px-2 py-2 rounded-md m-4 text-center'>50% off</p>
                    <img src={earth} alt="" className='w-60 md:mx-1 ' />
                    <p className='text-white mt-2 mx-3 font-medium'>Earth Puzzle</p>
                    <div className='text-yellow-300 mx-3 flex'><BsStarFill />
                        <div className='px-3'><BsStarFill /></div>
                        <div><BsStarFill /></div>
                    </div>
                    <div className='flex mt-1 mx-3'>
                        <div className='text-yellow-400 my-2 text-2xl'><BiRupee /></div>
                        <p className='text-yellow-400 text-2xl font-medium'>900</p>
                    </div>
                </div>

                <div className="cart w-1/4 pb-3 border-solid border-2 mx-2 bg-red-400 rounded-md">
                    <p className='bg-yellow-400 w-20 px-2 py-2 rounded-md m-4 text-center'>50% off</p>
                    <img src={copy} alt="" className='w-60 md:mx-1 ' />
                    <p className='text-white mt-2 mx-3 font-medium'>Earth Puzzle</p>
                    <div className='text-yellow-300 mx-3 flex'><BsStarFill />
                        <div className='px-3'><BsStarFill /></div>
                        <div><BsStarFill /></div>
                    </div>
                    <div className='flex mt-1 mx-3'>
                        <div className='text-yellow-400 my-2 text-2xl'><BiRupee /></div>
                        <p className='text-yellow-400 text-2xl font-medium'>900</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar