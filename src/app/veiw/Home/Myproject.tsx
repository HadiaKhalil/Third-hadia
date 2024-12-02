import React from 'react'
import Image from "next/image";
import Image1 from '../../../../public/Image/Rectangle 41.png'
import Image2 from '../../../../public/Image/Rectangle 41(1).png'
import Image3 from '../../../../public/Image/Rectangle 41(2).png'
import Image4 from '../../../../public/Image/Rectangle 41(3).png'
const Myproject = () => {
  return (
    <div>
                   <div className="md:max-w-[85%]   mt-36 mx-auto w-full  max-w-[1440px] md:px-0 flex-wrap md:py-0 max-md:w-[75%]  ">
          
                
           
        <div className='text-white  font-title items-center  max-w-[790px] 
              max-md:mt-3 max-sm:mt-[-59px]  mx-auto max-md:items-center max-sm:ml-0    '>
                    <h1 className='text-[10px] max-sm:text-[8px]   '>MY PROJECTS</h1>
                    <h1 className='text-[26px]  max-w-[240px]   max-sm:text-[20px] font-bold font-title '>{`Work that I’ve done for the past 7 years`}</h1>
                
                </div>


                <div className='flex justify-center gap-11 max-sm:mt-1 max-sm:gap-1  max-md:flex-col  max-sm:items-center max-md:items-center '>
                <div className="div1 h-[499px] w-[370px]  mt-10 max-sm:w-[290px] max-md:h-[420px] max-md:w-[290px] ">
    <Image src={Image1} 
      alt="my image" 
      width={370}
      height={520}
      className=""
      />
      
      <p className=' mt-3 px-5 text-white font-title'>Restaurant Website Design</p>
      <p className='max-w-[360px] text-[11px] py-3 px-5 text-white'>I worked with the guys at CBRE to redesign their entire website
         and mobile app fro both Android and iOS. This project lasted for 
         4 months and was a very challenging one</p>
  </div>

  <div className="div1 h-[499px] w-[370px] mt-[-90px] max-sm:w-[290px]  max-md:w-[290px]  max-md:mt-9 max-md:h-[420px]  ">
    <Image src={Image2} 
      alt="my image" 
      width={370}
      height={520}
      className=""
      />
      <div >
           <p className=' mt-3 px-5 text-white'>CoinView Mobile App Design</p>
      <p className='max-w-[360px] text-[11px] py-3 px-5 text-white '>I worked with the guys at CBRE to redesign their
         entire website and mobile app fro both Android and iOS. This project
         lasted for 4 months and was a very challenging one.</p>
      </div>
     
  </div>
                </div>

                {/************************  second section **************************/}

                <div className='flex justify-center gap-11 max-sm:mt-24 max-sm:gap-2 max-md:flex-col max-sm:items-center max-md:items-center'>
                <div className="div1 mt-5 w-[370px] h-[499px] max-md:h-[420px] max-md:w-[290px] max-sm:mt-[-49px] ">
    <Image src={Image3} 
      alt="my image" 
      width={370}
      height={520}
      className=""
      />
      <p className=' mt-3 px-5 text-white font-title'>Restaurant Website Design</p>
      <p className='max-w-[360px] text-[11px] py-3 px-5 text-white'>I worked with the guys at CBRE to redesign their entire website
         and mobile app fro both Android and iOS. This project lasted for 
         4 months and was a very challenging one</p>
  </div>

  <div className="div1 h-[499px] w-[370px] mt-[-108px] max-md:mt-0  max-md:h-[420px] max-md:w-[290px] max-sm:mt-8  ">
    <Image src={Image4} 
      alt="my image" 
      width={370}
      height={520}
      className=""
      />
      <div >
           <p className=' mt-3 px-5 text-white'>CoinView Mobile App Design</p>
      <p className='max-w-[360px] text-[11px] py-3 px-5 text-white '>I worked with the guys at CBRE to redesign their
         entire website and mobile app fro both Android and iOS. This project
         lasted for 4 months and was a very challenging one.</p>
      </div>
     
  </div>
                </div>
                <div className='flex justify-center ml-[446px] mt-[-80px] max-md:ml-0 max-md:mt-10 '>
                    <a className=' button border text-[10px] py-3 px-6 text-white'>VIEW ALL PROJECTS</a>
                </div>
                
       </div>
     
        </div>
  )
}

export default Myproject