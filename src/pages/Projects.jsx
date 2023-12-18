import React from "react";
import { ProjectList } from "../helpers/ProjectLists";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1
        className="projectTitle"
        // data-aos="fade-down"
        // data-aos-duration="3000"
        // data-aos-once="true"
      >
        My Projects
      </h1>
      <div className="projectList">
        {ProjectList.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              content={projectItem.content}
              site = {projectItem.site}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
