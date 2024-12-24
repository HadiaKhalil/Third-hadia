import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#763CAC]  text-white">
        <div
          className="flex justify-between mt-24 py-9 px-28 max-sm:px-11 
      h-[100px]"
        >
          <div className="flex  ">
            <div className="text-[35px] font-semibold">HK</div>
            <div className="leading-[15px] pt-3 font-serif">
              <p>Full Stack</p>
              <p>Web Developer</p>
            </div>
          </div>

          <div className=" gap-1 flex   max-sm:mt-3  ">
            <div className="cursor-pointer">
              <Image
                src="/Image/icon-park-solid_click.png"
                alt="img"
                width={30}
                height={30}
                className="max-sm:w-5 "
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/Image/bi_linkedin.png"
                alt="img"
                width={30}
                height={30}
                className="max-sm:w-5"
              />
            </div>
            <div className="cursor-pointer">
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
