import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
      <div>
        <>
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 py-3">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-20">
          {/* Mobile Logo & Toggle */}
          <div className="md:hidden flex justify-between w-full">
            <NavLink to="/" className="block">
              <img src="index.png" alt="Logo" className="h-10" />
            </NavLink>
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
  
          {/* Desktop Menu Left */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <NavLink to="/" className="font-semibold hover:text-red-600">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="font-semibold hover:text-red-600">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="font-semibold hover:text-red-600">Menu</NavLink>
            </li>
          </ul>
  
          {/* Desktop Center Logo */}
          <div className="hidden md:block">
            <NavLink to="/" className="block">
              <img src="index.png" alt="Logo" className="max-h-12" />
            </NavLink>
          </div>
  
          {/* Desktop Menu Right */}
          <ul className="hidden md:flex space-x-4 items-center">
            <li>
              <NavLink to="/reservation" className="font-semibold hover:text-red-600">Reservation</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="font-semibold hover:text-red-600">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="font-semibold hover:text-red-600">Contact Us</NavLink>
            </li>
          </ul>
  
          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-4 flex flex-col space-y-4 md:hidden">
              <NavLink to="/" className="hover:text-red-600" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/about" className="hover:text-red-600" onClick={toggleMenu}>About Us</NavLink>
              <NavLink to="/menu" className="hover:text-red-600" onClick={toggleMenu}>Menu</NavLink>
              <NavLink to="/reservation" className="hover:text-red-600" onClick={toggleMenu}>Reservation</NavLink>
              <NavLink to="/gallery" className="hover:text-red-600" onClick={toggleMenu}>Gallery</NavLink>
              <NavLink to="/contact" className="hover:text-red-600" onClick={toggleMenu}>Contact Us</NavLink>
            </div>
          )}
        </div>
      </nav>
    {/* <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 py-3">
      <div className="container mx-auto flex justify-between items-center px-20">
        <ul className="flex space-x-6">
          <li>
            <NavLink  to="/" className="font-semibold hover:text-red-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to = "/about" className="font-semibold hover:text-red-600 ">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="font-semibold hover:text-red-600 ">
              Menu
            </NavLink>
          </li>
        </ul>
        <div className="order-1">
          <NavLink to="/" className="block">
            <img src="index.png" alt="Your Logo" className="max-h-12" />
          </NavLink>
        </div>
        <ul className="flex space-x-4 order-2">
          <li>
            <NavLink to="/reservation" className="font-semibold hover:text-red-600 ">
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to ="/gallery" className="font-semibold hover:text-red-600 ">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to ="/contact" className="font-semibold hover:text-red-600 ">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav> */}
    
  
  
   
    
  </>
  
      </div>
    )
  }
  
  export default Header
  