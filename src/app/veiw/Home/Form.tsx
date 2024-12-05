import React from 'react'
import Image from "next/image";
import Cercle from '../../../../public/Image/Gradient(3).png'
const Form = () => {
  return (
    <div>
        <div className="max-w-[1440px] w-full mx-auto ">
  <div className=" justify-center items-center md:flex-row flex-col  text-[white] ">
        <div className='flex gap-16 mt-12 ml-72 text-white max-lg:flex-col  max-sm:ml-0 max-sm:flex  max-sm:justify-center max-sm:items-center  '>
            <div className='max-sm:ml-72px'>
                <h1 className="lg:text-3xl md:text-3xl font-title  
                 font-extrabold pt-24 max-w-[400px]   max-sm:pt-0  max-sm:text-[23px] max-sm:pl-[6px] ">
    {`Let’s talk business`}</h1>
   
   
    <p className="text-[12px]  mt-7 font-title  max-lg:text-[10px] max-w-[320px] max-sm:text-[10px] max-sm:w-[300px] max-sm:pl-[6px] max-sm:mt-2 ">
       {`Now that you know a lot about me, let me know if you are interested to work with me.`}
         </p>
          
         </div>
         <div className='flex flex-col mt-24 flex-wrap  max-md:mt-0 max-sm:border-2 max-sm:border-[#5B6876] max-sm:w-[300px] max-sm:px-10 max-sm:py-8 max-sm:rounded-t-lg max-sm:rounded-b-lg '>
            <label>Name</label>
            <input type="text" className='w-[598px] bg-[#181823] h-12 max-lg:w-[456px] max-sm:w-[220px]  max-sm:rounded-t-lg max-sm:rounded-b-lg' />
            <label className='mt-10 max-sm:mt-3 '>Email</label>
            <input type="text" className='w-[598px] bg-[#181823] h-14  max-lg:w-[456px] max-sm:h-12 max-sm:w-[220px] max-sm:rounded-t-lg max-sm:rounded-b-lg'  />
            <label className='mt-10 max-sm:mt-3'>Massage</label>
            <input type="text"className='w-[598px] bg-[#181823] h-20 max-lg:w-[456px] max-sm:w-[220px] max-sm:h-12 max-sm:rounded-t-lg max-sm:rounded-b-lg' />
            <button className='bg-[#763CAC] mt-12 max-sm:mt-10  w-[598px] h-16  max-lg:w-[456px] max-sm:w-[220px] hover:bg-[#8b3a8b] max-sm:h-12 font-extrabold max-sm:rounded-t-lg max-sm:rounded-b-lg'>Lets Get Started</button>
         </div>
         <div className="mt-[-240px]  ml-[40px] absolute   max-sm:ml-[150px]  max-sm:mt-[90px] " >
     <Image src={Cercle} 
      alt="my image" 
   className="h-[0px] w-[0px] max-sm:w-[300px] max-sm:h-[300px] "
      />
      
     </div>
         </div>
         </div>
         </div>
        

    </div>
  )
}

export default Form