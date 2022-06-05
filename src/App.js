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
      .then((res) => setData(res));
  }, []);

  return (
    <main className="App">
      {filteredJobs.length > 0 && (
        <Filter jobList={filteredJobs} editList={setFilteredJobs} />
      )}
      {data.map((job) => (
        <Job key={job.id} job={job} onFilter={setFilteredJobs} />
      ))}
    </main>
  );
};

export default App;
