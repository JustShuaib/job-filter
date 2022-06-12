import React from "react";
import "./job.scss";
const Job = ({ job, onFilter }) => {
  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
    role,
    tools,
  } = job;
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") return;
    onFilter((prev) => {
      const modifiedList = [...prev],
        value = e.target.value;
      if (!modifiedList.includes(value)) modifiedList.push(value);
      return modifiedList;
    });
  };
  return (
    <div className={featured ? "job featured" : "job"}>
      <img src={logo} alt="logo" className="logo" />
      <section>
        <div className="title">
          <p>{company}</p>
          {isNew && <span className="new">new!</span>}
          {featured && <span className="featured">featured</span>}
        </div>
        <h2>{position}</h2>
        <ul className="detail">
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </section>
      <ul className="btn-list" onClick={handleClick}>
        <li>
          <button type="button" value={role}>
            {role}
          </button>
        </li>
        <li>
          <button type="button" value={level}>
            {level}
          </button>
        </li>
        {languages.map((language) => (
          <li key={language}>
            <button type="button" value={language}>
              {language}
            </button>
          </li>
        ))}
        {tools.map((tool) => (
          <li key={tool}>
            <button type="button" value={tool}>
              {tool}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
