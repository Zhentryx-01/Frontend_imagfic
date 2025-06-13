import React from 'react'
import Zhentryx from '../Zhentryx.png'
import bgimage from '../bgimage.png'
import Frame7 from '../Frame 761.png'
import image1 from '../Pictures/image1.png'
import image2 from '../Pictures/image2.png'
import image3 from '../Pictures/image3.png'
import image4 from '../Pictures/image4.png'
import image5 from '../Pictures/image5.png'
import image6 from '../Pictures/image6.png'
import image8 from '../Pictures/image8.png'

const Navbar = () => {
  return (
  
<div>
        <section className='justify-center'>
            <div>
            <img
    src={bgimage}
    alt="Background image"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
            </div>
            <div>
                
            </div>

<div className="absolute inset-0 bg-black bg-opacity-75"></div>

<div className=' relative flex justify-center pt-8 items-center h-full'>
    <img src={Zhentryx} alt="" className='w-52 md:w-80 h-24 md:h-32 z-20 ' />
</div>
            <div className=' text-white z-20  flex-col max-w-[700px] flex items-start leading-normal text-left'
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
      
      <section className='bg-blue-800 py-16 px-6  ' style={{ width:'100%'}}>
        <div className='text-center mx-auto max-w-7xl border-blue-800' style={{
            width:'100%'
        }}>
            <h2 className='text-2xl font-semibold mb-4'>
                Create Your Best Work, with High Quality Images
            </h2>
            <p className='mx-auto mb-12'>
            Unique hand-picked photos, affordable HD and 4K video clips, editable vectors—and much, much more. You'll find it all, right here.
            </p>

            <div className='flex flex-wrap gap-6 justify-center mb-6'>
                <img src={image1} alt="" className='w-[250px] h-auto' />
                <img src={image2} alt="" className='w-[250px] h-auto' />
                <img src={image3}  alt="" className='w-[250px] h-auto' />
            
            <div className='flex flex-wrap gap-6 justify-center mb-6'>
                <img src={image4} alt="" className='w-[250px] h-auto' />
                <img src={image5} alt="" className='w-[250px] h-auto' />
                <img src={image6}  alt=""  className='w-[250px] h-auto'/>
                </div>

                <div>
                    <img src={image8} alt="" />
                </div>
            </div>
            
                
            
        </div>

      </section>
        </div>  

        

  )
}

export default Navbar