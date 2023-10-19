import React, { useContext } from 'react'
import { datacontext } from './Dataget'
import { AiOutlineClose } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
export const Cart = ({ setvalues }) => {
    const { cart } = useContext(datacontext)

    return (
        <>
            <div className=' bg-gray-100 w-80 h-96 absolute right-0 mt-5  text-black  '>
                <div className='flex justify-between mx-7 items-center mt-2'>
                    <div className='text-xl'>Shopping Cart</div>
                    <div><AiOutlineClose className='cursor-pointer' onClick={() => setvalues(false)} /></div>
                </div>

                <div className="w-full h-72 overflow-y-scroll ">
                    {cart && cart.map(e => (
                        <>
                            <div className='text-[15px] mx-4 bg-gray-300 w-[70px] mt-3 text-center rounded-md text-white'>50% off</div>
                            <div className='flex  mt-4 w-full justify-items-center mx-2'>
                                <img src={e.url} alt="" className='w-24 border-gray-300 border py-3 px-1 rounded-md ' />

                                <div className='text-[17px] mx-7'>
                                    <div className='text-[14px] w-20'>{e.Name}</div>
                                    <h1 className='text-[14px]'>Rainbow</h1>
                                    <h1>Qty {e.qty} </h1>
                                </div>
                                <div className='text-[17px] flex w-20 -ml-3'>
                                    <BiRupee className='my-2' />
                                    <div className='flex-col'>
                                        <div>{e.rs}</div>
                                        <div className='text-blue-600  rounded-md mt-8 -mx-5'>Remove</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 mx-3'><hr /></div>
                        </>
                    ))}
                </div>

            </div>
        </>
    )
}
