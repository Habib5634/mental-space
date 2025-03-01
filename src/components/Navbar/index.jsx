'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue h-20">
      <div className="container mx-auto flex justify-between items-center h-full px-4 lg:px-8">
        {/* Logo */}
        <img src="/assets/logo.png" alt="" className="w-52 h-16" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-white">
          <li className="hover:text-gray-300 cursor-pointer">Meditations</li>
          <li className="hover:text-gray-300 cursor-pointer">Sleep</li>
          <li className="hover:text-gray-300 cursor-pointer">Mindfulness</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          <li className="hover:text-gray-300 cursor-pointer">All Pages ▼</li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="text-white">Log In</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1e293b] absolute w-full left-0 top-20 z-20 flex flex-col items-center space-y-4 py-4 text-white">
          <a href="#" className="hover:text-gray-300">Meditations</a>
          <a href="#" className="hover:text-gray-300">Sleep</a>
          <a href="#" className="hover:text-gray-300">Mindfulness</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <a href="#" className="hover:text-gray-300">All Pages ▼</a>
          <button className="text-white">Log In</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
