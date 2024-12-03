import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="max-w-[1440px] w-full mx-auto ">
  <div className=" justify-center items-center md:flex-row flex-col  text-[white] ">
        <div className='flex gap-20 mt-12 ml-72 text-white max-lg:flex-col max-md:items-center max-sm:ml-0 '>
            <div>
                <h1 className="lg:text-4xl md:text-3xl font-title  
                 font-extrabold pt-24 max-w-[300px] max-sm:text-center max-sm:items-center  max-sm:pt-0  max-sm:text-[23px]  ">
    {`Let’s talk business`}</h1>
   

       <p className="text-[10px]  mt-7 font-title max-sm:text-center max-lg:text-[10px] max-w-[320px] max-sm:text-[10px] max-sm:w-[300px] max-sm:mt-2 ">
       {`Now that you know a lot about me, let me know if you are interested to work with me.`}
         </p>
          
         </div>
         <div className='flex flex-col mt-24 flex-wrap  max-md:mt-0'>
            <label>Name</label>
            <input type="text" className='w-[598px] h-12 max-sm:w-[256px]' />
            <label className='mt-10 max-sm:mt-3 '>Email</label>
            <input type="text" className='w-[598px] h-14 max-sm:h-12 max-sm:w-[256px]'  />
            <label className='mt-10 max-sm:mt-3'>Massage</label>
            <input type="text"  className='w-[598px] h-20 max-sm:w-[256px] max-sm:h-12' />
            <button className=' btn1 mt-10 max-sm:mt-3  w-[598px] h-16 max-sm:w-[256px] max-sm:h-12 font-extrabold '>Lets Get Started</button>
         </div>
         </div>
         </div>
         </div>
    </div>
  )
}

export default Form