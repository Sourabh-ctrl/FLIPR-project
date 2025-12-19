import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: "Potential ROI",
      desc: "Expert advice on property valuation and market positioning to maximize your investment.",
      icon: "📋"
    },
    {
      title: "Design",
      desc: "Professional staging and interior design work to make your property visually irresistible.",
      icon: "🎨"
    },
    {
      title: "Marketing",
      desc: "Advanced digital marketing and listing processes tailored for high-end real estate.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12">
         Why choose us?
        </h2>
        <hr className="border-t-8 border-blue-600 rounded w-24 mx-auto mb-12" />

        <div className="grid mx-16 grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl h-80 w-100 mx-auto shadow-sm hover:shadow-md transition-shadow border-b-4 border-blue-500"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-xl  leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}<br></br>
        </div>
      </div>
    </section>
  );
};

export default Services;