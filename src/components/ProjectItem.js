import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const technologyItems = technologies.map((technology, index) => {
    return <span key={index} className="technology">{technology}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologyItems}
      </div>
    </div>
  );
}

export default ProjectItem;
