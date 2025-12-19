import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectManager from '../components/Projects';
import ClientManager from '../components/Clients';
import { ContactViewer, SubscriberViewer } from '../components/Subscribe';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resProj = await axios.get('/api/projects');
      const resCli = await axios.get('/api/clients');
      const resCon = await axios.get('/api/admin/contacts');
      const resSub = await axios.get('/api/admin/subscribers');
      
      setProjects(resProj.data);
      setClients(resCli.data);
      setContacts(resCon.data);
      setSubscribers(resSub.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-slate-800 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        <button onClick={() => setActiveTab('projects')} className={`w-full text-left p-2 rounded ${activeTab === 'projects' ? 'bg-blue-600' : ''}`}>Project Management</button>
        <button onClick={() => setActiveTab('clients')} className={`w-full text-left p-2 rounded ${activeTab === 'clients' ? 'bg-blue-600' : ''}`}>Client Management</button>
        <button onClick={() => setActiveTab('contacts')} className={`w-full text-left p-2 rounded ${activeTab === 'contacts' ? 'bg-blue-600' : ''}`}>Contact Inquiries</button>
        <button onClick={() => setActiveTab('subscribers')} className={`w-full text-left p-2 rounded ${activeTab === 'subscribers' ? 'bg-blue-600' : ''}`}>Newsletter List</button>
      </div>

      <div className="flex-1 p-10">
        {activeTab === 'projects' && <ProjectManager data={projects} />}
        {activeTab === 'clients' && <ClientManager data={clients} />}
        {activeTab === 'contacts' && <ContactViewer data={contacts} />}
        {activeTab === 'subscribers' && <SubscriberViewer data={subscribers} />}
      </div>
    </div>
  );
};

export default AdminPanel;