import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/card.jsx';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-blue-600 mb-8">
          Our Projects
        </h2>
        <hr className="border-t-4 border-blue-600 rounded w-24 mx-auto mb-4" />

        <p className='text-grey  w-200 mx-auto '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus incidunt exercitationem ducimus iure facere, eos ullam in id est? Earum temporibus, aspernatur quasi debitis cum
        </p>

        {loading ? (
          <p className="text-center mt-6">Loading projects…</p>
        ) : projects.length === 0 ? (
          <p className="text-center mt-6">No projects available.</p>
        ) : (
          <div className="grid mt-6 gap-8 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                img={project.image}
                title={project.name}
                description={project.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;