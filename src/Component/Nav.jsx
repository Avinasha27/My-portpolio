import { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo/logo2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

gsap.registerPlugin(useGSAP);

// <-- scope is for selector text (optional)

const Nav = () => {
  const container = useRef();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpen(!isOpen)
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsOpen(!isOpen)

  };


  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { y: 100, stagger: 0.1, duration: 1, ease: "bounce.out", repeatDelay: 2, });

    },
    { scope: container }
  ); // <-- scope for selector text (optional)
  return (

<div ref={container} className="sticky inset-0 top-0 bg-black bg-opacity-50 backdrop-blur-md text-white z-[99999]">
  {/* Desktop Navigation (large screens) */}
  <div className="py-4 px-20 w-full mx-auto hidden lg:flex justify-between items-center">
    <div>
      <a href="#home">
        <img className="w-16 h-16" src={logo} alt="" />
      </a>
    </div>

    <div>
      <ul className="flex space-x-6 text-white">
        <li>
          <a className="hover:text-[#89b02d]" href="#About">About Me</a>
        </li>
        <li>
          <a className="hover:text-[#89b02d]" href="#Skills">Skills</a>
        </li>
        <li>
          <a className="hover:text-[#89b02d]" href="#experience">Experience</a>
        </li>
        <li>
          <a className="hover:text-[#89b02d]" href="#Projects">Projects</a>
        </li>
        <li>
          <a className="hover:text-[#89b02d]" href="#Education">Education</a>
        </li>
        <li>
          <a className="hover:text-[#89b02d]" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Tablet Navigation (medium screens) */}
  <div className="py-4 px-8 w-full mx-auto hidden md:flex lg:hidden justify-between items-center">
    <div>
      <a href="#home">
        <img className="w-12 h-12" src={logo} alt="" />
      </a>
    </div>
    <div>
      <ul className="flex space-x-4 text-white">
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#About">About</a>
        </li>
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#Skills">Skills</a>
        </li>
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#experience">Exp</a>
        </li>
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#Projects">Projects</a>
        </li>
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#Education">Education</a>
        </li>
        <li>
          <a className="text-sm hover:text-[#89b02d]" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Mobile Navigation (small screens) */}
  <div className="flex justify-between items-center p-4 md:hidden">
    <div>
      <a href="#home">
        <img className="w-10 h-10" src={logo} alt="" />
      </a>
    </div>
    <div className="relative">
      <div
        tabIndex={0}
        role="button"
        className="btn text-2xl btn-ghost"
        onClick={toggleDropdown}
      >
        {isOpen ? <RxCross2 /> : <RiMenu2Line />}
      </div>

      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="menu menu-sm space-y-10 fixed top-0 left-0 z-[1] p-2 shadow bg-base-100 rounded-box py-4 h-screen w-screen text-center items-center pt-10"
          onClick={closeDropdown}
        >
          <li><a href="#About">About Me</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      )}
    </div>
  </div>
</div>



  );
};

export default Nav;
