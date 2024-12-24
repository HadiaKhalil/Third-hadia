import React from "react";
import Image from "next/image";
const Lastsection = () => {
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto ">
        <div className=" justify-center items-center md:flex-row flex-col  text-[white] ">
          <div className="flex justify-center  gap-20 mt-12 text-white max-md:flex-col max-md:items-center">
            <div>
              <h1
                className="lg:text-3xl md:text-3xl font-title  text-2xl 
                 font-bold pt-24 max-w-[300px]   max-sm:pt-0  max-sm:text-[23px]  "
              >
                This is what people say about me
              </h1>

              <p className="text-[10px]  mt-7 font-title  max-lg:text-[10px] max-w-[320px] max-sm:text-[10px] max-sm:w-[300px] max-sm:mt-3 ">
                Here are a few lines from people who I have worked with over the
                past 7 years in my developement career.
              </p>
              <p className=" text-[12px] mt-7 max-sm:text-[8px] max-sm:mt-5">
                <u>See all testimonials</u>
              </p>
            </div>
            <div className="img mt-24 max-md:mt-[-33px] max-sm:w-[290px] max-md:h-[360px] ">
              <Image
                src="/Image/Rectangle 51.png"
                alt="my image"
                width={370}
                height={520}
                className=""
              />

              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">{`‘’Robin is one of the best designers I have worked with in my entire life. He is a designer
       who is very capable of taking up complex projects and delivers impeccable design.’’`}</p>
              <p className=" text-[11px] mt-9  px-6 text-white font-title">
                Richard Owens
              </p>
              <p className=" text-[9px] mt-1 px-6 text-white font-title pb-20">
                CEO, Company 1
              </p>
            </div>
          </div>
          <div className="ml-[500px] mt-[-500px] max-sm:w-[300px] max-sm:h-[300px] max-md:ml-36 max-md:mt-[-600px] max-sm:ml-10 max-sm:mt-[-500px] ">
            <Image
              src="/Image/Gradient(3).png"
              alt="img"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ml-96 mt-16 max-md:items-center max-md:ml-0">
        <div className="img mt-24 w-[372px]  max-sm:w-[290px] max-md:h-[360px]   max-lg:mt-36 max-sm:mt-40">
          <Image
            src="/Image/Rectangle 51(1).png"
            alt="my image"
            width={370}
            height={520}
            className=""
          />

          <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">{`‘’Robin is one of the best designers I have worked with in my entire life. He is a designer
       who is very capable of taking up complex projects and delivers impeccable design.’’`}</p>
          <p className=" text-[11px] mt-9  px-6 text-white font-title">
            Richard Owens
          </p>
          <p className=" text-[9px] mt-1 px-6 text-white font-title pb-20">
            CEO, Company 1
          </p>
        </div>

        <div className="img mt-24 max-md:mt-3  w-[372px] max-sm:w-[290px] max-md:h-[360px] max-lg:mt-12 max-sm:mt-6  ">
          <Image
            src="/Image/Rectangle 51(2).png"
            alt="my image"
            width={370}
            height={520}
            className=""
          />

          <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">{`‘’Robin is one of the best designers I have worked with in my entire life. He is a designer
       who is very capable of taking up complex projects and delivers impeccable design.’’`}</p>
          <p className=" text-[11px] mt-9  px-6 text-white font-title">
            Richard Owens
          </p>
          <p className=" text-[9px] mt-1 px-6 text-white font-title pb-20">
            CEO, Company 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lastsection;
