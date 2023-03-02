import React, { useState, useEffect } from "react";
import "./css/projects.css";

export default function Projects() {
  const [all, setAll] = useState();
  const [react, setReact] = useState();
  const [js, setJs] = useState();
  const [nodejs, setNodeJs] = useState();

  const projectList = [
    {
      name: "Todo-list project",
      language: "react",
      img: "https://media.istockphoto.com/id/1011182136/photo/check-off-completed-tasks-on-a-to-do-list.jpg?s=612x612&w=0&k=20&c=1iYcULZh7JYHaJDldIfG8h3CxWwaDnZnvltkYon66h4=",
      id: "0",
      url: "https://final-todo-list-project-9umuxdd0x-barreykassa.vercel.app/",
    },
    {
      name: "Tic-tac-toa game",
      language: "caltural-food",
      img: "https://cdn.pixabay.com/photo/2016/09/16/13/59/tic-tac-toe-1674071__340.png",
      id: "1",
      url: "https://final-tic-tac-toe-game-kcb14ku1s-barreykassa.vercel.app/",
    },
    {
      name: "Watch e-commerence",
      language: "JS",
      img: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?b=1&s=170667a&w=0&k=20&c=KL9FixBrWzaPXKfWDxsqCSagVrl805xy4e92Myno19U=",
      id: "2",
      url: "https://bari-watch-om8ndie28-barreykassa.vercel.app/index.html",
    },
    {
      name: "caltural food",
      language: "JS",
      img: "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729__340.jpg",
      id: "3",
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
    {
      name: "Mind&body website",
      language: "nodeJS",
      img: "https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758__340.jpg",
      id: "4",
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
    {
      name: "books store project",
      language: "nodeJS",
      img: "https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783__340.jpg",
      id: "5",
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    },
  ];
  useEffect(() => {
    allHandler();
  }, []);
  const allHandler = () => {
    projectList.map((item) => {
      if (item.id <= 5) {
        return (
          setAll(projectList), setReact(false), setJs(false), setNodeJs(false)
        );
      }
    });
  };
  const reactHandler = () => {
    const result = projectList.filter((item) => item.id <= 1);
    setReact(result);
    setAll(false);
    setJs(false);
    setNodeJs(false);
  };
  const jsHandelr = () => {
    const result = projectList.filter((item) => item.language == "JS");
    setJs(result);
    setReact(false);
    setAll(false);
    setNodeJs(false);
  };
  const nodeJsHandelr = () => {
    const result = projectList.filter((item) => item.language == "nodeJS");
    setNodeJs(result);
    setJs(false);
    setReact(false);
    setAll(false);
  };
  return (
    <div className="project-container">
      {" "}
      <div className="project-title">
        <h1>PROJECTS</h1>
        <p>_____________</p>
      </div>
      {/* -------------- */}
      <div className="navList-container">
        <div className="navList-container-div" onClick={allHandler}>
          All
        </div>
        <div className="navList-container-div" onClick={reactHandler}>
          React
        </div>
        <div className="navList-container-div" onClick={jsHandelr}>
          JS
        </div>
        <div className="navList-container-div" onClick={nodeJsHandelr}>
          NodeJs
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="projest-list">
        {/* show all  */}
        <div className="project-listAll">
          {all
            ? all.map((project) => {
                return (
                  <div className="x">
                    <div className="h2H3">
                      <h2>{project.name}</h2>
                      {/* <a href="https://final-todo-list-project-9umuxdd0x-barreykassa.vercel.app/"> */}
                      <h3>Read More</h3>
                      {/* </a> */}
                    </div>
                    <div className="imgDiv">
                      <a href={project.url}>
                        <img src={project.img} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}

          {/* -----------react-------- */}
          {react
            ? react.map((project) => {
                return (
                  <div className="react-container">
                    <div className="reactText">
                      {" "}
                      <h3>{project.name}</h3>
                      <h3>Read More</h3>
                    </div>
                    <div className="reactImg">
                      <a href={project.url}>
                        {" "}
                        <img src={project.img} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
          {/* js------------------------------------------- */}
          {js
            ? js.map((project) => {
                return (
                  <div className="js-container">
                    <div className="jsText">
                      <h2>Read More</h2>

                      <h3>{project.name}</h3>
                    </div>
                    <div className="jsImg">
                      <a href={project.url}>
                        <img src={project.img} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
          {/* node-js------------------ */}
          {nodejs
            ? nodejs.map((project) => {
                return (
                  <div className="nodeJs-container">
                    <div className="nodeJsImg">
                      <a href={project.url}>
                        <img src={project.img} alt="" />
                      </a>
                    </div>
                    <div className="nodeJsText">
                      <h3>{project.name}</h3>

                      <h2>Read More</h2>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
