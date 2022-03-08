// import elis from "../images/favicon.ico";
import elis from "../../../images/favicon.ico";
import "./Java.scss";

export const Java = () => {
  return (
    <div className="Java">
      JAVA
      <div className="container">
        <div className="card">
          <img src={elis} alt="logo" className="logo" />
        </div>
        <div className="content">
          <div className="projects">
            <h3>Projects</h3>
            <div className="projects-wrapper">
              <h4>Project 1</h4>
              <img className="project-image" src="" alt="" />
            </div>
            <div className="projects-wrapper">
              <h4>Project 2</h4>
              <img className="project-image" src="" alt="" />
            </div>
            <div className="projects-wrapper">
              <h4>Project 3</h4>
              <img className="project-image" src="" alt="" />
            </div>
          </div>

          <h3>Links</h3>
          <div className="link">
            <div className="github links">
              <a href="https://github.com/elis-11">Github</a>
            </div>
            <div className="linkedIn links">
              <a href="https://www.linkedin.com/in/eliza-arzanukaeva/">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="form">
            <form action="#">
              <label htmlFor="name">
                <h4>Name</h4>
                <input
                  className="f_sz"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </label>
              <label htmlFor="email">
                <h4>Email</h4>
                <input
                  className="f_sz"
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                />
              </label>
              <label htmlFor="password">
                <h4>Password</h4>
                <input
                  className="f_sz"
                  type="text"
                  id="password"
                  placeholder="Enter your password"
                />
              </label>
              <label htmlFor="message">
                <h4>Message</h4>
                <textarea type="text" id="message" />
              </label>
              <div className="submit-button">
                <input
                  className="f_sz"
                  id="submit-button"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
