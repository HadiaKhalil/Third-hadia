import React from 'react'
import Image from "next/image";
import Image1 from '../../../../public/Image/Mask group.png'
import Image2 from '../../../../public/Image/Gradient(3).png'
import Image3 from '../../../../public/Image/Vector(2).png'
import Image4 from '../../../../public/Image/Group.png'
const Project = () => {
    return (
        <div>
            <div >
                <div className='text-white  font-title mt-44 pl-80 mx-auto w-full max-w-[1440px] 
             flex-wrap  max-md:w-[75%]  max-md:pl-0 max-md:mt-11 '>
                    <h1 className=' text0 text-[17px] max-sm:text-[12px]'>Featured  Project</h1>
                    <h1 className='text-[26px]  max-sm:text-[20px] font-bold font-title'>Example Project</h1>
                </div>
                <div className='relative flex justify-center '>
                    <div className='ml-[530px]  mt-[-100px] absolute  max-md: max-sm:ml-[20px] max-sm:mt-[40px] '>
                        <Image src={Image2} alt='img'
                            width={350}
                            height={200}
                        />
                    </div>
                    <div className='ml-[350px] mt-[-100px] absolute max-sm:hidden  max-md:ml-[-10px] max-md:mt-9
         flex-wrap'>
                        <Image src={Image2} alt='img'
                            width={350}
                            height={200}
                        />
                    </div>
                </div>
                <div className='flex justify-center relative max-md:flex-col max-md:items-center'>
                    <div className='containtr  text-[13px] text-white max-w-[460px] w-[800px] rounded-t-lg rounded-b-lg
             h-[140px] py-7 px-10 mt-12 max-sm:w-[320px] max-sm:py-4 max-sm:px-10 max-sm:text-[12px] max-sm:mt-8 '>
                        {`A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.`}
                    </div>
                    <div className='max-sm:w-[300px]'>
                        <Image src={Image1} alt='img'
                            width={350}
                            height={200}
                        />
                    </div>
                </div>
                <div className='flex  gap-3 ml-[-700px] justify-center max-sm:ml-52 max-sm:mt-4 max-sm:gap-3'>
                    <div className=''>
                        <Image src={Image3} alt='img'
                            width={20}
                            height={20}

                        />
                    </div>
                    <div className=''>
                        <Image src={Image4} alt='img'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
            {/* second section flip */}
            <div >
                <div className='text-white text-center font-title mt-44 pl-[480px] mx-auto  w-full max-w-[1440px] 
             flex-wrap  max-md:w-[75%] max-md:text-center max-md:pl-28 max-md:mt-11 '>
                    <h1 className=' text0 text-[17px] max-sm:text-[12px] ml-20'>Featured  Project</h1>
                    <h1 className='text-[26px]  max-sm:text-[20px] font-bold font-title'>Example Project</h1>
                </div>
                <div className='relative flex justify-center '>
                    <div className='ml-[-200px]  mt-[-100px] absolute   max-sm:ml-[20px] max-sm:mt-[-30px] 
        '>
                        <Image src={Image2} alt='img'
                            width={350}
                            height={200}

                        />
                    </div>
                    <div className='ml-[-33 0px] mt-[-100px] absolute max-sm:hidden
         '>
                        <Image src={Image2} alt='img'
                            width={350}
                            height={200}

                        />
                    </div>
                </div>

                <div className='flex  justify-center relative max-md:flex-col max-md:items-center max-sm:mt-5'>

                    <div className='max-sm:w-[300px]'>
                        <Image src={Image1} alt='img'
                            width={350}
                            height={200}
                        />
                    </div>
                    <div className='containtr  text-[13px] text-white max-w-[460px] w-[800px] rounded-t-lg rounded-b-lg
             h-[140px] py-7 px-10 mt-12 max-sm:w-[320px] max-sm:py-4 max-sm:px-10 max-sm:text-[12px] max-sm:mt-8 '>
                       {` A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.`}
                    </div>
                </div>
                <div className='flex  justify-center gap-3 ml-[696px] max-sm:ml-36 max-sm:mt-4 max-sm:gap-3'>
                    <div className=''>
                        <Image src={Image3} alt='img'
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className=''>
                        <Image src={Image4} alt='img'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project