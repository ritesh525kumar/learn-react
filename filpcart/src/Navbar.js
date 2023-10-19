import React from 'react'
import { useState } from 'react'
import { Cart } from './Cart'
import logo from '../src/Img/flipcart.png'
import { FaHeart } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

export const Navbar = () => {
  const [values, setvalues] = useState(false)
  const getdata = () => {
    // console.log(values)
    setvalues(!values)
  }
  return (
    <>
      <div className="navbar bg-orange-500 w-full h-16 flex justify-between items-center cursor-pointer">
        <img src={logo} alt="" className='md:w-24 h-8 md:ml-20' />
        <input type="search" placeholder='Search for anythings' className='w-[590px] p-2 outline-none rounded-sm ml-16 ' />
        <div className='text-2xl bg-yellow-400 px-5 py-2 w-16 md:-mx-24  '><AiOutlineSearch /></div>
        <div className=' flex justify-between md:mx-20 items-center w-56'>
          <div className=' text-white text-lg px-5 w-44 hover:text-gray-500'>Sujeet</div>
          <div className=' text-white text-2xl px-5 w-44 '><FaHeart /></div>
          <div className=' text-white text-2xl px-5 w-44'>
            <BsCart onClick={getdata} />
            {values === true ? <Cart {...{ setvalues }} /> : null}
          </div>
        </div>
      </div>
    </>
  )
}
