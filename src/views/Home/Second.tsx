

import Image from "next/image";

const Second =() => {
  return (
    <div>
      <div className="text-[white]">
        <div className="container grid  lg:grid-cols-2 grid-cols-1  lg:gap-96   ">
          <div>
            <div className="">
           
              <h1 className="lg:text-5xl md:text-3xl  font-extrabold pt-[100px] max-lg:text-[25px] ">
              {` Hello!`}
             </h1>
            
             <h1 className="lg:text-4xl md:text-3xl font-extrabold pt-2  ">
              I am <span className="text-sky-200">Hadia Khalil.</span>
            </h1>
            <p className="  mb-12 mt-12 max-lg:text-[15px] max-sm:mt-4 lg:max-w-[440px]">
            I am a passionate and dedicated full-stack web developer with a
              knack for turning ideas into beautifully functional websites and
              applications. With expertise in both{" "}
              {`front-end and back-end technologies,`} I bring creativity and
              precision to every project. My commitment to staying{" "}
              {`up-to-date`} with the latest industry trends and my{" "}
              {`problem-solving`} skills make me a valuable asset in delivering
              innovative digital solutions. {`let's`} collaborate and bring your
              web vision to life.
            </p>
            {/* <div className=" absolute   ">
                <Image
                  src="/Image/Gradient(3).png"
                  alt="my image"
                  className=""
                  width={230}
                  height={10}
                />
              </div> */}
            </div>
           
          </div>
<div className="lg:mt-14 flex justify-center">
          <div >
          <Image
             src="/Image/img2.png"
             alt="my image"
             width={350}
               height={100}
             className=""
           />
          </div>
          {/* <div className=" absolute   max-sm:mt-5">
                <Image
                  src="/Image/Gradient(3).png"
                  alt="my image"
                  className=" max-sm:w-[150px] max-sm:h-[150px]"
                  width={230}
                  height={10}
                />
              </div> */}
              </div>

        </div>
       
      </div>
    </div>
  );
};

export default Second
