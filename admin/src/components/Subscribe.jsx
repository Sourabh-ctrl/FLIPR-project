const ContactViewer = ({ data }) => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Contact Form Responses</h3>
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Full Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Mobile</th>
          <th className="p-3 text-left">City</th>
        </tr>
      </thead>
      <tbody>
        {data.map(c => (
          <tr key={c._id} className="border-t">
            <td className="p-3">{c.fullName}</td>
            <td className="p-3">{c.email}</td>
            <td className="p-3">{c.mobile}</td>
            <td className="p-3">{c.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SubscriberViewer = ({ data }) => (
  <div className="max-w-md">
    <h3 className="text-2xl font-bold mb-6">Subscribed Emails</h3>
    <ul className="bg-white rounded shadow divide-y">
      {data.map(s => <li key={s._id} className="p-3">{s.email}</li>)}
    </ul>
  </div>
);


export { ContactViewer, SubscriberViewer };