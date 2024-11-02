'use client'
import React from 'react';

interface BoldoButtonProps {
  variant: 'standard' | 'login';
  backgroundColor?: 'transparent' | '#0A2640' | '#65E4A3';
  text: string;
  onClick?: () => void;
}

const BoldoButton: React.FC<BoldoButtonProps> = ({ variant, backgroundColor = 'transparent', text, onClick }) => {
  const baseClasses = 'rounded-full font-bold font-openSans';
  const standardClasses = `px-[56px] py-[16px] text-[20px] ${backgroundColor === 'transparent' ? 'border-2 border-[#0A2640] text-[#0A2640] hover:text-white  hover:bg-[#0A2640] ' : backgroundColor === '#65E4A3' ? 'text-[#0A2640] hover:opacity-60' : 'text-white hover:bg-transparent hover:border-[#0A2640] hover:border-2'}`;
  const loginClasses = 'px-[40px] py-[8px] text-[16px] text-[#0A2640] border-2 border-[#0A2640] hover:bg-[#0A2640] hover:text-white';

  const bgColor = backgroundColor === '#0A2640' ? 'bg-[#0A2640] hover:text-[#0A2640]':'bg-[#65E4A3]'
  const classes = `${baseClasses} ${variant === 'standard' ? standardClasses : loginClasses} ${backgroundColor !== 'transparent' ? `${bgColor}` : ''}`;

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default BoldoButton;
