import React from 'react'
import Image from "next/image";
 import Image1 from '../../../../public/Image/Skills(1).png'
const Skills = () => {
  return (
    <div>
        <div className=' mx-auto w-full max-w-[1440px] '>
             <h1 className='  text-white  font-bold font-title  text-[40px] text-center pt-20 max-sm:text-[30px] '>Skills</h1>
        <div className=' flex justify-center items-center mt-16 max-sm:my-8  max-sm:px-6 '>
            <Image src={Image1} alt='img'
        width={750}
        height={750}
className='max-sm:w-[280px]'
        /> 
        </div> 
        </div>
      
       
    </div>
  )
}

export default Skills