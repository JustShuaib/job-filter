import React, { useEffect, useState } from "react";
import "./App.scss";
import Filter from "./components/filter/Filter";
import Job from "./components/job/Job";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [oldList, setOldList] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((dat) => dat.json())
      .then((res) => {
        setOldList(res);
        setData(res);
      });
  }, []);
  useEffect(() => {
    const result = [];
    for (let i = 0; i < oldList.length; i++) {
      const { role, level, languages, tools } = oldList[i];
      if (filteredJobs.includes(role)) {
        if (!result.includes(oldList[i])) result.push(oldList[i]);
      }
      /*else if (keys.includes(level)) {
          if (!result.includes(arr[i])) result.push(arr[i]);
        }
        for (let j = 0; j < languages.length; j++) {
          if (keys.includes(languages[j])) {
            if (!result.includes(arr[i])) result.push(arr[i]);
          }
        }
        for (let k = 0; k < tools.length; k++) {
          if (keys.includes(tools[k])) {
            if (!result.includes(arr[i])) result.push(arr[i]);
          }
        } */
    }
    // const h = _.intersection(rl, lvl, lang, tls);
    // console.log(h);
    setOldList(result);
    console.log(result);
    // return res;
    //
    // console.log(d);
    // setOldList(d);
    // console.log(oldList);
    // const testArr = [];
    // filteredJobs.forEach((job) => {
    //   data.forEach((home) => {
    //     if (
    //       home.role === job ||
    //       home.level === job ||
    //       home.languages.includes(job) ||
    //       home.tools.includes(job)
    //     ) {
    //       // testArr.push(home);
    //       if (!testArr.includes(home)) testArr.push(home);
    //       return;
    //     }
    //   });
    // });
    console.log("You clicked clear");
    // setOldList(newList);
    // console.log(oldList);
    const ll = oldList.reduce((accumulated, current) => {
      filteredJobs.forEach((one) => {
        if (
          current.role === one ||
          current.level === one ||
          current.languages.includes(one) ||
          current.tools.includes(one)
        ) {
          // console.log(current);
          // return current;
        }
      });
      return accumulated;
    }, oldList);
    // setOldList(ll);
    // console.log(ll);
  }, [filteredJobs]);

  return (
    <main className="App">
      {filteredJobs.length > 0 && (
        <Filter
          jobList={filteredJobs}
          data={data}
          setJobList={setOldList}
          editList={setFilteredJobs}
        />
      )}
      {oldList.map((job) => (
        <Job key={job.id} job={job} onFilter={setFilteredJobs} />
      ))}
    </main>
  );
};

export default App;
