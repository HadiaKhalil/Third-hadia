import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#763CAC]  text-white">
        <div
          className="flex justify-between max-w-[1440px] flex-wrap mt-24  p-0 w-full mx-auto box-border py-9 px-28 max-sm:px-11 
      h-[100px] m-auto "
        >
          <div className="flex  ">
            <div className="text-[35px] font-semibold">HK</div>
            <div className="leading-[15px] pt-3 font-serif">
              <p>Full Stack</p>
              <p>Web Developer</p>
            </div>
          </div>

          <div className=" gap-1  max-sm:flex  md:flex   font-serif   max-sm:mt-3  ">
            <div>
              <Image
                src="/Image/icon-park-solid_click.png"
                alt="img"
                width={30}
                height={30}
                className="max-sm:w-5 "
              />
            </div>
            <div className="">
              <Image
                src="/Image/bi_linkedin.png"
                alt="img"
                width={30}
                height={30}
                className="max-sm:w-5"
              />
            </div>
            <div className="">
              <Image
                src="/Image/uil_skype.png"
                alt="img"
                width={30}
                height={30}
                className="max-sm:w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
