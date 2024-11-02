"use client";
import Image from "next/image";
import { accordionItems, headerText } from "@/lib/constants/connect";
import Accordion from "../accordion";

const Connect = () => {
  return (
    <section className="max-w-[1560px] pt-[75px] md:pt-[108px]  p-6 pb-[20px] lg:pb-[150px] lg:px-[150px] w-full flex flex-col items-center  bg-transparent">
      <Image
        src="/boldo/connect-bg.svg"
        alt="Connect Background image"
        width={1100}
        height={403}
        className="mb-[20px] lg:mb-[56px] w-full"
        priority
      />
      <div className="flex flex-col lg:flex-row items-start gap-[20px] lg:gap-[100px]">
        <p className="font-normal max-w-[500px] font-manrope text-black text-p-bold ">
          {headerText}
        </p>
        <Accordion items={accordionItems} />
      </div>
    </section>
  );
};

export default Connect;
