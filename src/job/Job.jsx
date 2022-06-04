import React from "react";
import "./job.scss";
import logo from "../assets/images/photosnap.svg";
const Job = () => {
  return (
    <div className="job">
      <img src={logo} alt="logo" className="logo" />
      <section>
        <div className="title">
          <p>Photosnap</p>
          <span className="new">new!</span>
          <span className="featured">featured</span>
        </div>
        <h2>Senior Frontend Developer</h2>
        <ul className="detail">
          <li>1d ago</li>
          <li>Full Time</li>
          <li>USA only</li>
        </ul>
      </section>
      <ul className="btn-list">
        <li>
          <button>Frontend</button>
        </li>
        <li>
          <button>Senior</button>
        </li>
        <li>
          <button>HTML</button>
        </li>
        <li>
          <button>CSS</button>
        </li>
        <li>
          <button>JavaScript</button>
        </li>
      </ul>
    </div>
  );
};

export default Job;
