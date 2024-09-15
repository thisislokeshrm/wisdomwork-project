// src/components/Navbar.tsx
import React from 'react';
import logo from "../../public/assets/images/logo.png";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#ffe7c1] py-4 px-8">
      <div className="flex justify-between items-center">
        <div>
          <a className="font-bold text-[24px]" href="/">
           <Image src={logo.src} alt="logo" width={75} height={75} />
          </a>
        </div>
        <div className="space-x-8">
          <a href="/" className="text-lg font-medium text-[#000]">Home</a>
          <a href="#students" className="text-lg font-medium text-[#000]">For students</a>
          <a href="#colleges" className="text-lg font-medium text-[#000]">For colleges</a>
          <a href="#blogs" className="text-lg font-medium text-[#000]">Blogs</a>
          <a href="#contact" className="text-lg font-medium text-[#000]">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
