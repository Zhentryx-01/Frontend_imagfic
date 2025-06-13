import React from 'react'
import Zhentryx from '../assets/Zhentryx.png'
import bgimage from '../assets/bgimage.png'
import Frame7 from '../assets/Frame 761.png'

const LandingPage:React.FC = () => {
  return (
        <section className=' relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col '
        style={{backgroundImage: `url(${bgimage})`}} >

<div className="absolute inset-0 bg-black bg-opacity-75"></div>

<div className='z-20 flex justify-center pt-8'>
    <img src={Zhentryx} alt="" className='w-52 md:w-80 h-24 md:h-32' />
</div>
            <div className=' text-white z-20 flex flex-col max-w-[700px] flex items-start leading-normal text-left'
            style={{marginTop:'700px',marginLeft:'10px'}} >
                <h2 className='text-5xl md:text-6xl font-castoro leading-tight mb-6 justify-items-end'>
                    GALLERY OF 
                </h2>
                <h2 className='ext-5xl md:text-6xl font-castoro leading-tight mb-4'>
                LIFE AND DEATH
                </h2>
                <p className='font-roboto leading-relaxed max-w-[800px] mb-4 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae iure accusantium quasi laudantium voluptate repellendus nulla?
                </p>

                <div className='flex gap-4'>
                <button className='text-white border-2 rounded w-40 h-12'>
                    LOG IN
                </button>
                <button className='text-white border-0 rounded w-40 h-12 bg-[#1B10A4] ' >
                    SIGN UP
                </button>
                </div>
                <div>
                    <img src={Frame7} alt="" style={{
                        marginLeft:'500px', top:'-400px', position:'relative'
                    }} />
                </div>
            </div>
        </section>

  )
}

export default LandingPage