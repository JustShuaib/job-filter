import React, { useEffect, useState } from "react";
import "./App.scss";
import Filter from "./components/filter/Filter";
import Job from "./components/job/Job";
const App = () => {
  const [data, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((dat) => dat.json())
      .then((res) => setData(res))
      .catch((err) => setData(err));
  }, []);
  const filteredList =
    filteredJobs.length === 0
      ? data
      : data.filter((item) =>
          filteredJobs.every(
            (filter) =>
              item.role.includes(filter) ||
              item.level.includes(filter) ||
              item.languages.includes(filter) ||
              item.tools.includes(filter)
          )
        );

  return (
    <main>
      <div className="top"></div>
      {filteredJobs.length > 0 && (
        <Filter jobList={filteredJobs} editList={setFilteredJobs} />
      )}
      {filteredList?.map((job) => (
        <Job key={job.id} job={job} onFilter={setFilteredJobs} />
      ))}
    </main>
  );
};

export default App;
