
import React, { useContext } from 'react'
import { FcFlashAuto } from 'react-icons/fc'
import { BsStarFill } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import { MdShoppingBasket } from 'react-icons/md'
import { datacontext } from './Dataget'
import { Navbar } from './Navbar'
import { Carousel } from './Carousel'

export const Card = () => {
    const { setcart, cart } = useContext(datacontext)
    const card = [
        {
            Name: "Cycle",
            id: 1,
            qty: 1,
            rs: 7800,
            url: 'https://rukminim1.flixcart.com/image/416/416/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
        },
        {
            Name: "Camera",
            id: 1,
            qty: 1,
            rs: 61000,
            url: 'https://rukminim1.flixcart.com/image/312/312/ktlu9ow0/dslr-camera/r/y/j/alpha-zv-e10-24-2-megapixel-with-interchangeable-lens-aps-c-original-imag6wxxhxrv9htc.jpeg?q=70'
        },
        {
            Name: "Moniter",
            id: 1,
            qty: 1,
            rs: 8899,
            url: 'https://rukminim1.flixcart.com/image/416/416/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70'
        },
        {
            Name: "Puzzle Earth",
            id: 1,
            qty: 1,
            rs: 1050,
            url: 'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70'
        },
        {
            Name: "Moblile",
            id: 1,
            qty: 1,
            rs: 21999,
            url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/q/k/-original-imagkp8f9vrfqtfg.jpeg?q=70'
        },
        {
            Name: "Watch",
            id: 1,
            qty: 1,
            rs: 4500,
            url: 'https://rukminim1.flixcart.com/image/312/312/ky1vl3k0/smartwatch/r/8/j/-original-imagadf4tykrzxy9.jpeg?q=70'
        },
        {
            Name: "Dell Laptop",
            id: 1,
            qty: 1,
            rs: 61000,
            url: 'https://rukminim1.flixcart.com/image/312/312/l58iaa80/computer/q/s/w/inspiron-3511-laptop-dell-original-imagfycrbnpu2nbh.jpeg?q=70'
        },
        {
            Name: "Campus",
            id: 1,
            qty: 1,
            rs: 3299,
            url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/g/m/z/-original-imaggcaxvjhavwxa.jpeg?q=70'
        },



    ]
    return (
        <>
            <Navbar />
            <Carousel />
            <div className='flex mt-6'>
                <div className='text-4xl mx-2'><FcFlashAuto /></div>
                <div className='text-2xl font-medium'>Flash Deals</div>
            </div>
            <div className='card'>
                <div className=' flex  flex-wrap  justify-center'>
                    {card.map(e => (
                        <div className='border-2 mx-2 w-1/5 min-w-[280px] mt-6 '>
                            <p className='bg-yellow-400 w-20 px-2 py-2 rounded-md m-4 text-center'>50% off</p>
                            <div className='flex justify-center'><img src={e.url} key={e.Name} alt="" className=' h-36  py-4' />
                            </div>
                            <p className=' mx-4 font-medium'>{e.Name}</p>
                            <div className='text-orange-500 mx-4 flex'><BsStarFill />
                                <div className='px-3'><BsStarFill /></div>
                                <div><BsStarFill /></div>
                            </div>
                            <div className='flex mt-1 mx-2'>
                                <div className='text-orange-500 my-2 text-2xl'><BiRupee /></div>
                                <p className='text-orange-500 text-2xl font-medium'>{e.rs}</p>
                                <p className='ml-32 mt-2 text-2xl cursor-pointer'><MdShoppingBasket onClick={() => setcart([...cart, e])} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
