import React from "react";
import "./filter.scss";
import deleteBtn from "../../assets/images/icon-remove.svg";
const Filter = () => {
  return (
    <div className="filter">
      <ul>
        <li>
          <span>Frontend</span>
          <button aria-label="delete item">
            <img src={deleteBtn} alt="" />
          </button>
        </li>
        <li>
          <span>CSS </span>
          <button aria-label="delete item">
            <img src={deleteBtn} alt="" />
          </button>
        </li>
        <li>
          <span>JavaScript </span>
          <button aria-label="delete item">
            <img src={deleteBtn} alt="" />
          </button>
        </li>
      </ul>
      <button className="clear-btn">Clear</button>
    </div>
  );
};

export default Filter;
