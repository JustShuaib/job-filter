import React from "react";
import "./App.scss";
import Filter from "./components/filter/Filter";
import JobList from "./components/jobList/JobList";

const App = () => {
  return (
    <div className="App">
      <Filter />
      <JobList />
    </div>
  );
};

export default App;
