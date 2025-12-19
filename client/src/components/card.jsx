import React from "react";

const ProjectCard = ({ img, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
      <img
        src={img == "NA" ? "/default.png" : img}
        className="w-full h-48 object-cover rounded-lg"
        alt=""
      />
      <h3 className="text-xl mt-4 font-semibold text-gray-800">{title}</h3>

      <p className="text-gray-600 mt-2 grow">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block text-center bg-amber-500 text-white py-2 rounded-lg hover:text-black transition"
      >
        READ MORE
      </a>
    </div>
  );
};

export default ProjectCard;
