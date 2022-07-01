import React from "react";
import "../styles/Projects.css";
import SpeedDialComp from "../components/SpeedDial";
import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.jpg";
import projet3 from "../assets/projet3.jpg";
import projet4 from "../assets/projet4.jpg";

const projects = [
  {
    title: "Aeronautics Project - 29/06/22",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: projet1,
    technologies: [
      {
        name: "#react",
      },
      {
        name: "#Node",
      },
      {
        name: "#GraphQL",
      },
    ],
    status: "tostart",
    link: "/project",
  },
  {
    title: "Apside Projects - 19/01/21",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: projet2,
    technologies: [
      {
        name: "#react",
      },
      {
        name: "#Node",
      },
      {
        name: "#GraphQL",
      },
      {
        name: "...more",
      },
    ],
    status: "ongoing",
    link: "/project",
  },
  {
    title: "eSport Projects - 15/05/22",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: projet3,
    technologies: [
      {
        name: "#NextJs",
      },
      {
        name: "#AWS",
      },
      {
        name: "#GraphQL",
      },
      {
        name: "...more",
      },
    ],
    status: "finished",
    link: "/project",
  },
  {
    title: "Environment Projects - 02/09/21",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: projet4,
    technologies: [
      {
        name: "#JavaScript",
      },
      {
        name: "#Python",
      },
      {
        name: "...more",
      },
    ],
    status: "tostart",
    link: "/project",
  },
];

function Projects() {
  return (
    <div className="jsp">
      <Header name="PROJECTS" />
      <section className="main-projects-container">
        <Sidebar />
        <div className="projects-center-container">
          {projects.map((el) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ProjectCard key={el.title} {...el} />
          ))}
        </div>
      </section>
      <SpeedDialComp />
    </div>
  );
}

export default Projects;
