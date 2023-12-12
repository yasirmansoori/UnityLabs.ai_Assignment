import { Link } from "react-router-dom";

function RightSidebar() {
  return (
    <div className="col-md-4">
      <div className="position-sticky" style={{ top: "2rem" }}>
        <div className="p-4 mb-3 rounded" id="AboutSection">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">
            Welcome to HackerX, your gateway to the latest and most relevant
            tech discussions. Dive into the heart of the coding universe with
            our Hacker News search engine.
          </p>
        </div>
        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li>
              <Link to="/archive/May">May 2023</Link>
            </li>
            <li>
              <Link to="/archive/June">June 2023</Link>
            </li>
            <li>
              <Link to="/archive/July">July 2023</Link>
            </li>
            <li>
              <Link to="/archive/August">August 2023</Link>
            </li>
            <li>
              <Link to="/archive/September">September 2023</Link>
            </li>
            <li>
              <Link to="/archive/October">October 2023</Link>
            </li>
          </ol>
        </div>
        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li>
              <a
                href="https://github.com/yasirmansoori"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yasir-mansoori/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mansoori_yasir786/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
