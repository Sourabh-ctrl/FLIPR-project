import React, { useState } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      // Sends the email to the backend as required [cite: 71, 96]
      await axios.post('/api/subscribe', { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      console.error("Subscription error", err);
    }
  };

  return (
    <footer className="w-full">
      <div className="bg-blue-600 py-6 px-10 flex flex-col lg:flex-row items-center justify-around gap-8">
        <ul className="flex flex-wrap justify-center gap-6 text-white font-medium cursor-pointer">
          <li>
            <Link to="home" smooth={true}  duration={500} offset={-100}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-70}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} offset={-100}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-white font-bold text-lg uppercase tracking-wider">
            Subscribe Us
          </span>
          <form
            onSubmit={handleSubscribe}
            className="flex overflow-hidden rounded-md shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 w-64 outline-none
              border-t-3
    
     placeholder-white border-white focus:outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white  text-blue-600 px-6 py-2 font-bold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-6 px-10 flex flex-col md:flex-row justify-around items-center text-gray-400 text-sm">
        <p>© 2025 All Rights Reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer"><FaFacebook size={24} color="white"/></span>
          <span className="hover:text-white cursor-pointer"><FaTwitter size={24} color="white"/></span>
          <span className="hover:text-white cursor-pointer"><FaLinkedin size={24} color="white"/></span>
          <span className="hover:text-white cursor-pointer"><FaInstagram size={24} color="white"/></span>
        </div>
      </div>
    </footer>
  );
};

export default Subscribe;
