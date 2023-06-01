import React from "react";
import "./portfolio.css";
import Immersed from "../../assets/immersed3 (1).png"
import ChatImg from "../../assets/chat.png"
import QuizImg from "../../assets/quizimg.jpg"
const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: Immersed,
      title: "Immersed Web Application",
      github: "https://github.com/chojunkeon/Immersed",
    },
    {
      id: 2,
      image: ChatImg,
      title: "Simple Chat App",
      github: "https://github.com/chojunkeon/SimpleChat",
    },
    {
      id: 3,
      image: QuizImg,
      title: "Simple Quiz App",
      github: "https://github.com/chojunkeon/quiz-app",
    },
  ];

  const mapCards = ({id, image, title, github}) => {
      return (
        <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt="Unavailable" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className="btn btn-primary" target="blank">
              GitHub Link
            </a>
          </div>
        </article>
      );
  };
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
          {data.map(mapCards)}
      </div>
    </section>
  );
};

export default Portfolio;
