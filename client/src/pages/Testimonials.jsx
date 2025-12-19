import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/api/clients');
        setClients(response.data || []);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setClients([
          { _id: '1', name: 'Rowhan Smith', designation: 'CEO, Foreclosure', image: 'https://i.pravatar.cc/150?u=rowhan', description: 'Lorem ipsum dolor sit amet.' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container  px-6 ">
       <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
         Happy Clients
        </h2>
        <hr className="border-t-4 border-blue-600 rounded w-16 mx-auto mb-12" />

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {loading ? (
            <p>Loading clients…</p>
          ) : clients.length === 0 ? (
            <p>No clients available.</p>
          ) : (
            clients.map((client) => (
              <div 
                key={client._id}
                className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl border border-gray-100 w-full sm:w-64 transition-transform hover:-translate-y-2"
              >
                <img 
                  src={client.image || "/avatar.jpg"} 
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500 p-1"
                />

                <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                  "{client.description}"
                </p>

                <div className="mt-auto">
                  <h4 className="text-blue-600 font-bold text-lg">{client.name}</h4>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    {client.designation}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;