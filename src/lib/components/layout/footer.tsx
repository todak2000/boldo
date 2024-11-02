'use client';

import { footerItems, footers } from "@/lib/constants/header";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  

  return (
    <footer className={`max-w-[1560px] p-6 md:pl-[100px] md:pr-[179px] md:pt-[100px] md:pb-[117px] w-full flex flex-col lg:flex-row items-center justify-between bg-transparent gap-[20px] lg:gap-[179px]`}>
      <div className="flex flex-col lg:h-[300px]">
      <Image
        src="/boldo/boldo.svg"
        alt="Boldo logo"
        width={156}
        height={41}
        className="w-[100px] md:w-[156px]"
        priority
      />
      <p className="mb-[64px] mt-[40px] font-openSans text-[1rem] font-normal leading-[28px] text-[#777777]">{footerItems.text}</p>
      <p className="hidden lg:block font-openSans text-[1rem] font-normal leading-[28px] text-[#777777]">{footerItems.rights}</p>
      </div>
     
     <div className="flex w-full flex-col lg:flex-row items-center gap-[20px] lg:gap-[96px]">
      {footers.map(i=>{
        return <div key={i.title} className="w-full lg:w-[150px]">
          <p className="mb-[10px] lg:mb-[32px] text-black font-bold font-openSans text-[20px] leading-[32px]">{i.title}</p>
          {i.options.map(x=>{
            return <Link href="#" key={x} className=" mb-[10px] lg:mb-[47px] hover:text-primary flex flex-row items-center text-[#777777] font-normal font-openSans text-[20px] leading-[32px] gap-[14px]">
              {x} 
              {x==='Careers' ? 
              <span className="bg-[#65E4A3] rounded-full px-[14px] text-primary font-bold font-openSans text-[13px] leading-[28px] py-[1px]"> Hiring!</span> 
              : null}
              </Link>
          })}
        </div>
      })}
     </div>
     <p className="lg:hidden block font-openSans text-[1rem] font-normal leading-[28px] text-[#777777]">{footerItems.rights}</p>
    </footer>
  );
};

export default Footer;
