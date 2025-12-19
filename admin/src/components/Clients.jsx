import { useState } from "react";
import axios from "axios";

const ClientManager = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    designation: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/admin/clients", formData);
    alert("Client Added!");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Manage Clients</h3>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mb-8 space-y-4 max-w-lg"
      >
        <input
          type="text"
          placeholder="Client Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Designation (e.g. CEO)"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, designation: e.target.value })
          }
        />
        <textarea
          placeholder="Client Review"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default ClientManager;
