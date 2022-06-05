import React from "react";
import "./filter.scss";
const Filter = ({ jobList, editList }) => {
  const handleDelete = (e) => {
    const value = e.target.previousSibling.textContent;
    editList((prev) => prev.filter((text) => text !== value));
  };
  return (
    <div className="filter">
      <ul>
        {jobList.map((selected) => (
          <li key={selected}>
            <span>{selected}</span>
            <button aria-label="delete item" onClick={handleDelete}>
              <img src="" alt="" />
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
