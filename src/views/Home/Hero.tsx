import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="text-[white]">
        <div className="container grid  items-center md:grid-cols-2 grid-cols-1  relative">
          <div>
            <div >
          
            <div className=" absolute ml-16 mt-8 max-sm:mt-5 z-10">
                <Image
                  src="/Image/Gradient(3).png"
                  alt="my image"
                  className=" max-sm:w-[150px] max-sm:h-[150px]"
                  width={230}
                  height={10}
                />
              </div>
              <h1 className="lg:text-5xl md:text-5xl font-bold pt-24  max-md:text-2xl max-w-[440px]  max-sm:pt-9">
                I am your <span className="text-sky-200">{`full-stack`}</span>{" "}
                {`wizard,`} turning{" "}
                <span className="text-sky-200">web dreams</span> into reality.
              </h1>
           
              <p className=" text-sm mb-10 mt-12  max-sm:mt-5 max-lg:text-[14px] lg:text-lg">
                Crafting seamless digital experiences from
                {` front-end elegance to back-end robustness, `}I bring your web
                visions to life as a versatile {`full-stack developer`}
              </p>
              <button className="text-[black] hover:text-[black] hover:bg-[#763CAC] bg-[#B1C7FF] px-10 py-2 rounded">
                project
              </button>
            </div>
          </div>

          <div>
          <Image
              src="/Image/img1.png"
              alt="my image"
              layout="responsive"
              width={750}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="line flex justify-center items-center  mt-[-190px] max-md:hidden "> 
          <Image
            src="/Image/Line 1.png"
            alt="my image"
            height={500}
            width={1000}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
