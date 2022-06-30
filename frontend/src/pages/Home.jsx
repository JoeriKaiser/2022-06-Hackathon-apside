import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Ideas from "../assets/IDEAS.png";
import Collaborators from "../assets/COLLABORATORS.png";
import Pressreview from "../assets/PRESSREVIEW.png";
import Projects from "../assets/PROJECTS.png";
import Profil from "../assets/PROFIL.png";
import Customers from "../assets/CUSTOMERS.png";
import Logout from "../assets/LOGOUT.png";
import Logo from "../assets/ROAD.png";

function Home() {
  return (
    <div className="home">
      <div className="background-logo">
        <div className="background">
          <div className="grid-container">
            <div className="container">
              <img src={Logo} alt="Logo" className="logo" />
              <Link to="/collaborators">
                <img
                  src={Collaborators}
                  alt="Collaborators"
                  className="collaborators"
                />
              </Link>
            </div>
            <div className="container-b">
              <Link to="/projects">
                <img src={Projects} alt="Projects" className="projects" />
              </Link>
              <Link to="/ideas">
                <img src={Ideas} alt="ideas" className="ideas" />
              </Link>
            </div>
            <div className="container">
              <Link to="/profil">
                <img src={Profil} alt="Profil" className="profil" />
              </Link>
            </div>
            <div className="container" />
            <div className="container">
              <Link to="/press-review">
                <img
                  src={Pressreview}
                  alt="Pressreview"
                  className="pressreview"
                />
              </Link>
              <Link to="/customers">
                <img src={Customers} alt="Customers" className="customers" />
              </Link>
            </div>
            <div className="container">
              <img src={Logout} alt="Logout" className="logout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
