import React, { useState } from 'react';
import axios from 'axios';
import image from '../assets/image1.avif';

const Hero
 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert("Consultation request sent!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="home" className="relative min-h-175 flex items-center justify-center py-20 px-6 bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      <div className="relative z-10 container mx-auto flex lg:flex-row items-center justify-center gap-12">
        
        <div className="text-white lg:w-1/2 text-center lg:text-left">
          <h2 className="tracking opacity-60 text-7xl font-bold blur-none mb-4">
           Consultation,<br /> Design <br /> & Marketing 
          </h2>
          
        </div>

        <div id="contact" className="bg-[#29519d] opacity-80 p-8 rounded-lg shadow-2xl max-w-sm">
          <h3 className="text-2xl text-white font-bold mb-6 text-center uppercase tracking-tight">
           Get a Free <br />Consultation
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
            <input 
              type="email" 
              placeholder="Enter Email Address"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input 
              type="text" 
              placeholder="Mobile Number"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              required
            />
            <input 
              type="text" 
              placeholder="Area, City"  
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
            />
            
            <button 
              type="submit" 
              className="w-full bg-[#FF6B35] hover:bg-[#e85a24] text-white font-bold py-4 rounded transition-colors uppercase tracking-widest text-sm mt-4"
            >
              Get Quick Quote 
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;