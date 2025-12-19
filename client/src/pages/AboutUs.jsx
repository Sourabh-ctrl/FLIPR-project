import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            About Us
        </h2>
        <hr className="border-t-8 border-blue-600 rounded w-24 mx-auto mb-12" />

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          We are more than just a real estate agency. Our team specializes in the 
          integration of consultation, design, and marketing to ensure your property 
          stands out in a crowded market. Learn more about our listing process, 
          as well as our additional staging and design work.
        </p>

        <button className="bg-transparent text-blue-600 border-b-2 border-blue-600 px-10 py-3 font-semibold rounded shadow-md hover:bg-blue-700 hover:text-white transition-all cursor-pointer uppercase tracking-wider text-sm">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;