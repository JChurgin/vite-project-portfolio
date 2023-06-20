import "./protfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com",
    demo: "demo website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com",
    demo: "demo website",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com",
    demo: "demo website",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://github.com",
    demo: "demo website",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    github: "https://github.com",
    demo: "demo website",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    github: "https://github.com",
    demo: "demo website",
  }
];

const Protfolio = () => {
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container protfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="protfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Protfolio;
