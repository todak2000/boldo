"use client";
import Image from "next/image";
import BoldoButton from "../button";
import { blogItems, blogs } from "@/lib/constants/blog";

const Blog = () => {
  return (
    <section className="max-w-[1560px] md:pt-0  p-6 pb-[20px] lg:pb-[124px] lg:px-[201px] w-full flex flex-col items-center  bg-transparent">
      <p className=" text-[20px] text-center mb-[12px] font-normal font-openSans leading-[32px] text-[#777777]">
        {blogItems.titleText}
      </p>
      <p className="lg:max-w-[900px] text-center font-normal text-header mb-[77px] text-black">
        {blogItems.mainText}
      </p>

      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[30px] lg:gap-[50px] mb-[84px]">
        {blogs.map((i) => {
          return (
            <div className="w-[300px] lg:h-[424px]" key={i.text}>
              <Image
                src={i.image}
                alt={i.text}
                width={300}
                height={209}
                priority
                className="rounded-[24px] mb-[24px]"
              />
              <div className="flex flex-row items-center gap-[12px] mb-[12px]">
                <span className="font-bold text-[1rem] font-openSans leading-[28px] text-primary">
                  {i.category}
                </span>
                <span className=" text-[16px] text-left font-normal font-openSans leading-[28px] text-[#777777]">
                  {i.date}
                </span>
              </div>
              <p className=" text-[20px] h-[100px] line-clamp-1 text-left mb-[20px] font-normal font-openSans leading-[32px] text-black">
                {i.text}
              </p>
              <div className="flex flex-row items-center gap-[12px]">
                <Image
                  src={i.authorImage}
                  alt={i.text}
                  width={32}
                  height={32}
                  priority
                />
                <p className="text-black font-normal text-[1rem] leading-[28px] font-openSans">
                  {i.author}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <BoldoButton
        variant="standard"
        backgroundColor="transparent"
        text="Load more"
        onClick={() => {
          alert("Clicked!");
        }}
      />
    </section>
  );
};

export default Blog;
