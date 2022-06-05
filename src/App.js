import React, { useEffect, useState } from "react";
import "./App.scss";
import Filter from "./components/filter/Filter";
import JobList from "./components/jobList/JobList";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((dat) => dat.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="App">
      <Filter />
      <JobList jobs={data} />
    </div>
  );
};

export default App;
