import React from "react";
import SpeedDial from "../components/SpeedDial";
import "../styles/PressReview.css";

function PressReview() {
  const articles = [
    {
      id: 1,
      name: "React v17.0 Release Candidate : pas de nouvelles fonctionnalités",
      link: "https://fr.reactjs.org/blog/2020/08/10/react-v17-rc.html",
      author: "Albert M. Avalos",
      date: "01/07/22",
    },
    {
      id: 2,
      name: "React v16.13.0",
      link: "https://fr.reactjs.org/blog/2020/02/26/react-v16.13.0.html",
      author: "Andrew E. Milburn",
      date: "01/07/22",
    },
    {
      id: 3,
      name: "Construire des super expériences utilisateurs avec le mode concurrent et Suspense",
      link: "https://fr.reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html",
      author: "Carrie C. Robertson",
      date: "01/07/22",
    },
    {
      id: 4,
      name: "Comment créer simplement un Blog avec React JS?",
      link: "https://gomytech.gomycode.co/comment-creer-simplement-un-blog-avec-react-js/",
      author: "Orlando J. Barnett",
      date: "01/07/22",
    },
    {
      id: 5,
      name: "14 conseils et plateformes pour acheter un site internet",
      link: "https://www.blogduwebdesign.com/acheter-site-internet/",
      author: "Clara J. Hall",
      date: "01/07/22",
    },
    {
      id: 6,
      name: "Découvrez le profileur React",
      link: "https://fr.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html",
      author: "Michael K. White",
      date: "01/07/22",
    },
    {
      id: 7,
      name: "La gestion des erreurs dans React 16",
      link: "hhttps://fr.reactjs.org/blog/2017/07/26/error-handling-in-react-16.html",
      author: "Jamie B. Tarpley",
      date: "01/07/22",
    },
    {
      id: 8,
      name: "Des nouvelles du rendu asynchrone",
      link: "https://fr.reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
      author: "Tom A. Sweet",
      date: "01/07/22",
    },
    {
      id: 9,
      name: "React v15.6.0",
      link: "https://fr.reactjs.org/blog/2017/06/13/react-v15.6.0.html",
      author: "Chris N. Chumbley",
      date: "01/07/22",
    },
    {
      id: 10,
      name: "React v0.14.8",
      link: "https://fr.reactjs.org/blog/2016/03/29/react-v0.14.8.html",
      author: "Jacquelyn J. Sutton",
      date: "01/07/22",
    },
  ];
  return (
    <div className="press-review-container">
      <SpeedDial />
      <div className="container2">
        <h1>Press Review</h1>
        <div className="filter-container">Filter...</div>
      </div>

      <div className="list-container">
        {articles.map((el) => (
          <ul className="ul" key={el.id}>
            <a href={el.link} target="_blank" rel="noreferrer">
              {el.name}
            </a>
            <li>{el.author}</li>
            <li>{el.date}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default PressReview;
