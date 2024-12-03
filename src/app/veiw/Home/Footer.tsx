import React from 'react'
import Image from "next/image";
import Image1 from '../../../../public/Image/icon-park-solid_click.png'
import Image2 from '../../../../public/Image/bi_linkedin.png'
import Image3 from '../../../../public/Image/uil_skype.png'

const Footer = () => {
  return (
    <div> <div className="bg-[#763CAC]  text-white">
    <div className='flex justify-between max-w-[1440px] flex-wrap mt-24  p-0 w-full mx-auto box-border py-9 px-20 max-sm:px-12 
      h-[100px] m-auto '>

        <div className='flex  '>
        <div className='text-[35px] font-semibold'>
        HK
      </div>
      <div className='leading-[15px] pt-3 font-serif'>
      <p >Full Stack</p>
        <p >Web Developer</p>
      </div>
      </div>
      
      

      <div className=' gap-2  max-sm:flex max-sm:flex-col  md:flex  font-serif  max-sm:mt-[-23px]  '>
      
      <div className=''>
                        <Image src={Image1} alt='img'
                            width={30}
                            height={30}
                       className='max-sm:w-6 '  />
                    </div>
                    <div className=''>
                        <Image src={Image2} alt='img'
                            width={30}
                            height={30}
                            className='max-sm:w-6' />
                    </div>
                    <div className=''>
                        <Image src={Image3} alt='img'
                            width={30}
                            height={30}
                            className='max-sm:w-6' />
                    </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Footer