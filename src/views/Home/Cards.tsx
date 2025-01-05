import React from "react";
import Image from "next/image"

const Cards = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <h1
          className=" lg:text-3xl md:text-3xl px-2  text-white font-extrabold pt-2 "
        >
          Work Experience
        </h1>
        {/* frst cards section  */}
        <div className=" flex justify-center px-2  z-10  mx-auto pt-7 flex-wrap gap-8  text-white">
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={590}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text flex  rounded-b-lg max-sm:h-[100px]">
              <Image
                src="/Image/Group 1.png"
                alt="my image"
                width={80}
                height={60}
                className="mt-7"
              />

              <div>
                <p
                  className="text-[20px] mb-[16px]  mt-5 leading-5
              max-w-[200px] pl-4  max-sm:text-[16px] max-sm:pl-0"
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
              width={583}
              height={60}
              className="rounded-t-lg"
            />
            <div
              className='text1 flex  rounded-t-lg"
               '
            >
              <div>
                <Image
                  src="/Image/pic4 (3).png"
                  alt="my image"
                  width={80}
                  height={60}
                  className="mt-7 "
                />
              </div>
              <div>
                <p className="text-[20px] mb-[16px]  mt-4 leading-5  max-w-[200px] pl-4 max-sm:text-[17px]  ">
                  1 year in Cubix solution
                </p>

                <p className="text-[12px]  max-w-[350px] pl-4  max-sm:text-[9px] ">
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
          className="flex justify-center px-2 z-10  mx-auto pt-7 flex-wrap gap-8   text-white"
        >
          <div className="z-10">
            <Image
              src="/Image/Rectangle 974.png"
              alt="my image"
              width={590}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text2 flex  rounded-b-lg z-10   ">
              <div>
                <Image
                  src="/Image/pic4 (2).png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7 "
                />
              </div>
              <div >
                <p className="lg:text-[20px] mb-[16px]  mt-4 leading-5  pl-4">
                  {`2+ year in Freelancing`}</p>
                <p className=" lg:text-[12px]  max-w-[350px] pl-4  max-sm:text-[9px]">
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
              width={583}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text3 flex   rounded-t-lg z-10">
              <div>
                <Image
                  src="/Image/pic4 (1).png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7"
                />
              </div>
              <div >
                <p className="text-[20px] mb-[16px]  mt-6 leading-5  max-w-[200px] pl-4">
                  1 year in Cubix solution
                </p>
                <p className="text-[12px] max-w-[350px] pl-4  max-sm:text-[9px]">
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
              className="mt-[-250px]"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cards;
