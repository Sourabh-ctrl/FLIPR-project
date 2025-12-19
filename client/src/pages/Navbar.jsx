import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around px-10 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Real Trust</div>

      <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
        <li>
          <Link to="home" className="hover:text-blue-600 cursor-pointer" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" className="hover:text-blue-600 cursor-pointer" smooth={true} duration={500} offset={-70}>
            Services
          </Link>
        </li>
        <li>
          <Link to="projects" className="hover:text-blue-600 cursor-pointer" smooth={true} duration={500} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="testimonials" className="hover:text-blue-600 cursor-pointer" smooth={true} duration={500} offset={-100}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" className="flex items-center justify-center h-10 w-30 bg-amber-500 hover:text-black cursor-pointer rounded-md transition-colors text-white font-medium" smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
