import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [mobileTrigger, setMobileTrigger] = useState(false);

  const triggetBtn = () => setMobileTrigger(!mobileTrigger);

  return (
    <div className={`sidebar ${mobileTrigger ? "open" : ""}`}>
      <button onClick={triggetBtn}>
        <span></span>
      </button>
      <div className="text-center my-4">
        <img
          height="100"
          width="100"
          src="https://github.com/hlebel.png"
          alt=""
          className="rounded-circle p-1 border"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-center social-links">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.github.com/">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="my-5">
        <ul>
          <li>
            <Link onClick={triggetBtn} to="/">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          {/* <li>
            <Link onClick={triggetBtn} to="/about">
              <i className="fas fa-home"></i>About Me
            </Link>
          </li> */}
          <li>
            <Link onClick={triggetBtn} to="/projects">
              <i className="fas fa-briefcase"></i>Projects
            </Link>
          </li>
          <li>
            <Link onClick={triggetBtn} to="/resume">
              <i className="fas fa-file"></i>Resume
            </Link>
          </li>
          <li>
            <Link onClick={triggetBtn} to="/contact">
              <i className="fas fa-envelope"></i>Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
