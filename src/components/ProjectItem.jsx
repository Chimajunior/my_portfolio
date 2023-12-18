import React from "react";

function ProjectItem({ image, name, content, site }) {
  return (
    <div
      className="projectItem"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="false"
    >
      <div className="backImage" style={{ backgroundImage: `url(${image})` }}></div>

      <h1 data-aos="zoom-in" data-aos-duration="3000" data-aos-once="false">
        {name}
      </h1>
      <p data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true">
        {content}
      </p>
      <div className="buttContainer">
      <button>
      {site}
      </button>
      </div>
    </div>
  );
}

export default ProjectItem;
