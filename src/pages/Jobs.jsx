import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job, index) => {
        return (
          <Link key={index} to={job.id.toString()}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw Error("Could Not Found Job List");
  }
  return res.json();
};
