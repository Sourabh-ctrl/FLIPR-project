import { useState } from "react";
import axios from "axios";

const ProjectManager = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', description: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/admin/projects', formData);
    alert("Project Added!");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Manage Projects</h3>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-8 space-y-4 max-w-lg">
        <input type="text" placeholder="Project Name" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <textarea placeholder="Project Description" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, description: e.target.value})} required />
        <input type="text" placeholder="Image URL (if not available write NA)" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, image: e.target.value})} required />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectManager;