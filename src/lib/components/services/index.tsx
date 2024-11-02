"use client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { services, servicesItems } from "@/lib/constants/services";
import Link from "next/link";

const Services = () => {
  return (
    <section className="p-6 md:py-[84px] lg:px-[150px] w-full flex flex-col items-center  bg-primary">
      <p className=" text-[20px] text-center mb-[12px] font-normal font-openSans leading-[32px] text-[#F1F1F1]">
        {servicesItems.titleText}
      </p>
      <p className="lg:max-w-[900px] text-center font-normal text-header mb-[70px] text-white">
        {servicesItems.mainText}
      </p>

      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[30px] lg:gap-[100px]">
        {services.map((i) => {
          return (
            <div className="w-[300px] lg:h-[490px]" key={i.text}>
              <Image
                src={i.image}
                alt={i.text}
                width={300}
                height={354}
                priority
              />
              <p className="text-[20px] lg:text-[24px] mb-[15px] lg:mb-[28px] mt-[24px] font-normal font-openSans leading-[36px] text-white">
                {i.text}
              </p>
              <Link
                href={i.link}
                className="flex flex-row items-center gap-[12px] text-[20px] font-bold text-white underline font-openSans underline-offset-[14px]"
              >
                Explore page <IoArrowForward />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
