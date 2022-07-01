import React from "react";
import "../styles/ProjectCard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
  status,
}) {
  return (
    <Link className="project-card-link" to={link}>
      <div className="project-container" id={status}>
        <img src={image} alt="placeholder" />
        <div className="project-text-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ul className="tech-list">
          {technologies.map((el) => (
            <li key={el.title} className="tech-pill">
              {el.name}
            </li>
          ))}
        </ul>
        <div className="arrow-container">
          <KeyboardArrowDownIcon sx={{ margin: "0 auto" }} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
