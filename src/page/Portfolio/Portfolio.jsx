import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa6';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');


  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error('Error loading project data:', error));
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <ul className="filter-list">
        {['All', 'Web Development', 'ReactJs', 'AngularJs', 'Loading...'].map((category) => (
          <li key={category} className="filter-item">
            <button
              onClick={() => handleFilterClick(category)}
              data-filter-btn
              className={category === selectedCategory ? 'active' : ''}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
