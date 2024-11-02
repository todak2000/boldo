"use client";

import { contactText } from "@/lib/constants/connect";
import BoldoButton from "../button";

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-[100px] p-6 pb-[20px] lg:py-[72px] lg:px-[242px] w-full flex flex-col items-center  bg-contact h-[420px] lg:h-auto lg:min-h-[391px] mb-[84px] rounded-[12px]">
      <p className="text-[30px] lg:text-[48px] text-center mb-[48px] font-normal font-manrope leading-[56px] lg:leading-[72px] text-white">
        {contactText}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
        <input type='text' className="w-[370px] rounded-full bg-white placeholder:text-black px-[32px] py-[12px] font-openSans text-[20px] font-normal leading-[32px] text-black" placeholder="Your email address"/>
        <BoldoButton
          variant="standard"
          backgroundColor="#65E4A3"
          text="Start now"
          onClick={() => {
            alert("Clicked!");
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
