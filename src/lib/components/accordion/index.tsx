import { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#C4C4C4]">
          <button
            className="w-full text-left py-[8px] my-[12px] focus:outline-none flex flex-row items-center justify-between lg:gap-[84px]"
            onClick={() => handleToggle(index)}
          >
            <p className="text-[16px] lg:text-[20px] font-openSans font-normal">{item.title}</p>
            {activeIndex === index ? <IoIosArrowDropupCircle className="size-[28px] text-primary" />:<IoIosArrowDropdownCircle className="size-[28px] text-primary" />}
          </button>
          {activeIndex === index && (
            <div className="pb-4">
              <p className="font-manrope text-xs text-primary">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
