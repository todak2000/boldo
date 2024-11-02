"use client";
import Image from "next/image";
import BoldoButton from "../button";
import { productitems } from "@/lib/constants/product";

const Products = () => {
  return (
    <section className="max-w-[1560px] pt-[75px] gap-[120px] md:pt-[120px]  p-6 pb-[20px] lg:pb-[180px] lg:px-[150px] w-full flex flex-col items-center  bg-transparent">
      {productitems.map((i) => {
        return (
          <div
            key={i.id}
            className={`flex  w-full items-center gap-[30px] lg:gap-[150px] ${i.isBullet ? 'flex-col lg:flex-row':'flex-col lg:flex-row-reverse'}`}
          >
            <Image
              src={i.image}
              alt={`product section image ${i}`}
              width={496}
              height={610}
              className="xl:w-[496px] w-full lg:w-1/3"
              priority
            />
            <div className="w-full">
              <p className="font-normal font-manrope text-black text-p-bold">
                {i.mainText}
              </p>
              <ul
                className={`w-full ${i.isBullet ? "mt-[20px] md:mt-[40px] mb-[56px]" : "mt-[30px] md:mt-[64px]"}`}
              >
                {i.options.map((x, index) => {
                  return (
                    <li
                    key={index}
                      className={`flex flex-row items-center gap-[12px] md:gap-[27px] ${!i.isBullet && index ===0 ? 'text-white bg-primary':'text-black'} font-openSans  ${
                        i.isBullet
                          ? "text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px] mb-[10px] md:mb-[24px]"
                          : "text-[16px] font-semibold leading-[28px] px-[20px] py-[22px] shadow-lg"
                      }`}
                    >
                      {x.icon} {x.text}
                    </li>
                  );
                })}
              </ul>
              {i.isBullet && <BoldoButton
              variant="standard"
              backgroundColor="#0A2640"
              text="Start now"
              onClick={() => {
                alert("Clicked!");
              }}
            />}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
