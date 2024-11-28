

import Image from "next/image";
 import image from '../../../../public/Image/img1.png'
 import Cercle from '../../../../public/Image/Gradient(3).png'
 import Line from '../../../../public/Image/Line 1.png'
const Hero = () => {
  return (
    <div>
   <div className="max-w-[1440px] w-full mx-auto ">
   <div className="flex justify-between items-center md:flex-row flex-col  text-[white]">
   <div className="  h-full md:w-1/2 w-full max-lg:px-7 max-sm:px-0  ">
   <div className="md:max-w-[70%]  mx-auto md:px-0  md:py-0 max-md:w-[75%]  relative">
  
    <h1 className="lg:text-5xl md:text-3xl font-title  text-2xl  font-bold pt-24 max-w-[440px] max-lg:text-[25px] max-sm:pt-9  ">
      I am your <span className="text-sky-200">{`full-stack`}</span>  {`wizard,`} turning <span className="text-sky-200">web dreams</span>  into reality.
     </h1>
     <div className="mt-[-240px] ml-[80px] absolute  max-sm:ml-[20px]  max-sm:mt-[-120px] " >
     <Image src={Cercle} 
      alt="my image" 
   className="h-[250px] w-[250px] max-sm:w-[150px] max-sm:h-[150px] "
      />
      
     </div>
       <p className="lg:text-lg md:text-base text-sm mb-12 mt-12 font-title  max-lg:text-[14px] ">
       Crafting seamless digital experiences from{` front-end elegance to back-end robustness, `}
       I bring your web visions to life as a versatile  {`full-stack developer`}
         </p>
         <a className="text-[black]  hover:text-[black]  hover:bg-white bg-[#B1C7FF]   flex justify-center transition-all duration-300 ease-in-out items-center
     max-w-[148px] w-[160px] h-[43px]  px-2 mb-6 pt-[10px]  pb-2 font-title max-sm:mt-[-12px]  rounded">project</a>
    </div>
  </div>
  
  <div className="md:w-1/2 w-full">
    <Image src={image} 
      alt="my image" 
      className="w-full h-full"
      />
  </div>
 

   </div>
   <div className="line flex justify-center items-center flex-wrap mt-[-190px]  max-md:hidden ">
    <Image src={Line} 
      alt="my image" 
      height={500}
      width={1000}
      className=""
      />
  </div>
   </div>

 

   </div>
  
 
  )
}

export default Hero






 
