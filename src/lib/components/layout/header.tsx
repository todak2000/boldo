'use client';

import { useState, useEffect } from "react";
import { headerItems } from "@/lib/constants/header";
import Image from "next/image";
import Link from "next/link";
import BoldoButton from "../button";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`max-w-[1560px] p-6 md:py-[56px] md:px-[100px] w-full flex flex-row items-center justify-between fixed top-0 z-[200] ${isScrolled ? 'bg-white' : 'bg-transparent md:bg-transparent'}`}>
      <Image
        src="/boldo/boldo.svg"
        alt="Boldo logo"
        width={163}
        height={42}
        className="w-[100px] md:w-[162px]"
        priority
      />
      <section className="hidden md:flex flex-row items-center gap-[40px]">
        {headerItems.map((i) => (
          <Link
            className="font-semibold text-[1rem] font-openSans text-primary hover:opacity-60"
            href={i.redirect}
            key={i.name}
          >
            {i.name}
          </Link>
        ))}
        <BoldoButton
          variant="login"
          text="Login"
          onClick={() => alert("Clicked!")}
        />
      </section>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-primary">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <section className="absolute top-[80px] left-0 w-full bg-white flex flex-col items-center gap-[20px] py-[20px]">
          {headerItems.map((i) => (
            <Link
              className="font-semibold text-[1rem] font-openSans text-primary"
              href={i.redirect}
              key={i.name}
              onClick={toggleMenu}
            >
              {i.name}
            </Link>
          ))}
          <BoldoButton
            variant="login"
            text="Log in"
            onClick={() => {
              alert("Clicked!");
              toggleMenu();
            }}
          />
        </section>
      )}
    </header>
  );
};

export default Header;
