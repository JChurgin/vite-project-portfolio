import "./experience.css";
import { AiFillPlusCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Chakra UI</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Vue</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Git</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
          </div>
        </div>
        {/* ----end frontend----  */}
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article><article className="experience__details">
              <AiFillPlusCircle className="experience__details-icon"/>
              <div>
                <h4>Rest API</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
