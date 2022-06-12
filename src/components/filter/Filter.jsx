import React from "react";
import "./filter.scss";
import deleteIcon from "./icon-remove.svg";
const Filter = ({ jobList, editList }) => {
  const handleDelete = (e) => {
    let value;
    if (e.target.tagName === "IMG") {
      value = e.target.parentElement.previousSibling.textContent;
    } else {
      value = e.target.previousSibling.textContent;
    }
    editList((prev) => prev.filter((text) => text !== value));
  };

  return (
    <div className="filter">
      <ul>
        {jobList.map((job) => (
          <li key={job}>
            <span>{job}</span>
            <button aria-label="delete item" onClick={handleDelete}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={() => editList([])}>
        Clear
      </button>
    </div>
  );
};

export default Filter;
