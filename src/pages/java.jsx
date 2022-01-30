import "./App.scss";
// import elis from '../public/images/cards/elis.png'
import elis from "./cards/elis.png";

export const java = () => {
  return (
    <div className="App">
      <img src={elis} alt="logo" className="logo" />
      <h1>Tralala</h1>

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

      <div className="links-contacts">
        <div className="links">
          <h3>Links</h3>
          <div className="github">
            <a href="https://github.com/elis-11">Github</a>
          </div>
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/eliza-arzanukaeva/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="form">
        <form action="#">
          <label htmlFor="name">
            <h4>Name</h4>
            <input type="text" id="name" placeholder="Enter your name" />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="text" id="email" placeholder="Enter your email" />
          </label>
          <label htmlFor="password">
            <h4>Password</h4>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
            />
          </label>
          <label htmlFor="message">
            <h4>Message</h4>
            <textarea type="text" id="message">
              Your Message
            </textarea>
          </label>
          <div className="submit-button">
            <input id="submit-button" type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};