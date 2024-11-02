"use client";

import { useState } from "react";
import { headerText, testimonials } from "@/lib/constants/testimonial";
import Image from "next/image";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import useIsMobile from "@/lib/hook/isMobile";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (currentIndex + (isMobile ? 1 : 3) < testimonials.length) {
      setCurrentIndex(currentIndex + (isMobile ? 1 : 3));
    }
  };

  const handlePrev = () => {
    if (currentIndex - (isMobile ? 1 : 3) >= 0) {
      setCurrentIndex(currentIndex - (isMobile ? 1 : 3));
    }
  };

  return (
    <section className="px-6 py-12 lg:pt-[84px] lg:pb-[95px] lg:pl-[150px] lg:pr-[100px] w-full flex flex-col items-center bg-primary">
      <div className="max-w-[1150px] flex flex-col lg:flex-row justify-center gap-[50px] lg:gap-[262px] lg:mb-[73px] mb-[20px]">
        <p className="text-header text-center lg:text-left text-white font-normal">
          {headerText}
        </p>
        <div className="flex flex-row items-center justify-center lg:justify-start lg:items-end gap-[28px]">
          <BsArrowLeftCircleFill
            className={`text-white size-[72px] ${
              currentIndex === 0 ? "opacity-50" : "cursor-pointer"
            }`}
            onClick={handlePrev}
          />
          <BsArrowRightCircleFill
            className={`text-white size-[72px] ${
              currentIndex + (isMobile ? 1 : 3) >= testimonials.length
                ? "opacity-50"
                : "cursor-pointer"
            }`}
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-[50px]">
        {testimonials
          .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
          .map((i) => (
            <div
              className="p-[40px] bg-white rounded-[12px] min-w-[280px] max-w-[350px]"
              key={i.id}
            >
              <p className="text-p mb-[40px] text-black font-normal">
                "{i.text}"
              </p>
              <div className="flex flex-row items-center gap-[16px]">
                <Image
                  src={i.image}
                  alt={i.text}
                  width={58}
                  height={58}
                  priority
                />
                <div>
                  <p className="text-primary font-bold text-[1rem] leading-[32px] font-openSans">
                    {i.author}
                  </p>
                  <p className="text-primary font-normal text-[0.875rem] leading-[32px] font-openSans">
                    {i.portfolio}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonial;
