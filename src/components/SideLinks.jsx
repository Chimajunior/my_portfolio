import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function SideLinks() {
  const instagramUrl = "https://www.instagram.com/its_chima.jr/";
  const LinkedInUrl =
    "https://www.linkedin.com/in/chima-mbanefo-3a6b50245/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BoLzdn7ZgT%2FWdeMt8vmiTWQ%3D%3D";
  const githubUrl = "https://github.com/Chimajunior";
  const emailUrl = "mailto:chimajunior14@gmail.com";

  return (
    <div>
      <div
        className="socials"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href={LinkedInUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={emailUrl} target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default SideLinks;
