"use client";
import { heroItems, heroPartners } from "@/lib/constants/hero";
import Image from "next/image";
import BoldoButton from "../button";

const Hero = () => {
  return (
    <section className="max-w-[1560px] mt-[75px] md:mt-[160px]  p-6 mb-[20px] md:mb-0 md:pt-0 md:pb-[87px] md:px-[100px] w-full flex flex-col items-center  bg-transparent">
      {/* top section */}
      <div className="flex w-full flex-col lg:flex-row items-center justify-between bg-transparent gap-[70px] md:gap-[105px]">
        <div className="w-full">
          <p className="mb-[16px] text-[#000000] font-normal text-header text-center lg:text-left">
            {heroItems.mainText}
          </p>
          <p className="text-[#777777] font-normal font-openSans leading-[28px] text-[16px] text-center lg:text-left">
            {heroItems.subText}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start w-full gap-[24px] mt-[49px]">
            <BoldoButton
              variant="standard"
              backgroundColor="#0A2640"
              text="Buy template"
              onClick={() => {
                alert("Clicked!");
              }}
            />
            <BoldoButton
              variant="standard"
              backgroundColor="transparent"
              text="Explore"
              onClick={() => {
                alert("Clicked!");
              }}
            />
          </div>
        </div>
        <Image
          src="/boldo/herographics.svg"
          alt="Herograhics Image"
          width={494}
          height={423}
          className="xl:w-[494px] w-full lg:w-1/3"
          priority
        />
      </div>
      {/* bottom section */}
      <div className="marquee mt-[95px] w-full max-w-[1120px] 2xl:max-w-[1300px] bg-transparent">
        <div className="marquee-content gap-[56px]">
          {heroPartners.map((i, index) => (
            <Image
              key={index}
              src={i}
              alt={`Partner ${index} Image`}
              width={145}
              height={42}
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
