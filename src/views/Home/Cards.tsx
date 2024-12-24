import React from "react";
import Image from "next/image"

const Cards = () => {
  return (
    <div>
      <div className="md:max-w-[85%]  w-full mx-auto  max-w-[1440px] md:px-0 flex-wrap md:py-0 max-md:w-[75%]">
        <h1
          className="lg:text-3xl md:text-3xl mx-auto  text-white text-2xl font-title font-extrabold
                  pt-2 max-w-[1080px] max-lg:text-[25px] max-sm:text-center max-sm:text-[19px] max-sm:mt-[-40px]"
        >
          Work Experience
        </h1>
        {/* frst cards section  */}
        <div className="flex justify-center z-10 items-center mx-auto pt-7 flex-wrap gap-[20px] font-title text-white">
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={550}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text flex  min-h-[200px] rounded-b-lg max-sm:h-[100px]">
              <Image
                src="/Image/Group 1.png"
                alt="my image"
                width={90}
                height={60}
                className="mt-11 max-sm:w-[190px] max-sm:ml-[-27px] max-sm:mt-7"
              />

              <div>
                <p
                  className="text-[20px] mb-[16px]  mt-7 leading-6
              max-w-[200px] pl-4  max-sm:mt-[-8px] max-sm:text-[16px] max-sm:pl-0"
                >
                  1 year in maxinux solution
                </p>

                <p className=" text-[12px]  max-w-[350px] pl-4 max-sm:pl-0 max-sm:pb-5 max-sm:text-[9px]">
                  {" "}
                  {`have 1 year of experience at Cubix Solutions, honing
                                    my skills in web development`}
                </p>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={550}
              height={60}
              className="rounded-t-lg"
            />
            <div
              className='text1 flex  min-h-[200px] rounded-t-lg"
                max-sm:h-[100px] '
            >
              <div>
                <Image
                  src="/Image/pic4 (3).png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7 max-sm:w-[190px] max-sm:ml-[-27px] max-sm:mt-7"
                />
              </div>
              <div>
                <p className="text-[20px] mb-[16px]  mt-7 leading-7  max-w-[200px] pl-4  max-sm:mt-[-1px] max-sm:text-[17px] max-sm:pl-0 max-sm:leading-5 ">
                  1 year in Cubix solution
                </p>

                <p className="text-[12px]  max-w-[350px] pl-4 max-sm:pl-0  max-sm:mt-[-8px] max-sm:text-[9px] max-sm:max-w-[400px] ">
                  {" "}
                  {`have 1 year of experience at Cubix Solutions, honing
                                    my skills in web development`}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second card section */}
        <div
          className="flex justify-center items-center mx-auto  relative
         flex-wrap gap-[20px]   pt-7  text-white"
        >
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={550}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text2 flex  min-h-[200px] rounded-b-lg max-sm:h-[100px] z-10 ">
              <div>
                <Image
                  src="/Image/pic4 (2).png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7 max-sm:w-[190px] max-sm:ml-[-27px] max-sm:mt-7"
                />
              </div>
              <div >
                <p className="text-[20px] mb-[16px]  mt-7 leading-5   pl-4  max-sm:mt-[-8px] max-sm:text-[17px] max-sm:pl-0">{`2+ year in Freelancing`}</p>
                <p className=" text-[12px]  max-w-[350px] pl-4 max-sm:pl-0 max-sm:text-[9px]  max-sm:mt-[-9px] ">
                  {" "}
                  {`I have gained invaluable experience over the past year
                                    through freelancing, working on diverse projects and expanding my skill set.`}
                </p>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={550}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text3 flex  min-h-[200px] rounded-t-lg max-sm:h-[100px]">
              <div>
                <Image
                  src="/Image/pic4 (1).png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-9 max-sm:w-[190px] max-sm:ml-[-27px] max-sm:mt-7"
                />
              </div>
              <div >
                <p className="text-[20px] mb-[16px]  mt-7 leading-5  max-w-[200px] pl-4  max-sm:mt-[-1px] max-sm:text-[17px] max-sm:pl-0">
                  1 year in Cubix solution
                </p>
                <p className="text-[12px] max-w-[350px] pl-4 max-sm:pl-0 max-sm:pb-5 max-sm:text-[9px]">
                  {`have 1 year of experience at Cubix Solutions, honing my skills in web development`}
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute ">
            <Image
              src="/Image/Gradient(3).png"
              alt="my img"
              height={350}
              width={420}
              className="mt-[-200px]"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cards;
