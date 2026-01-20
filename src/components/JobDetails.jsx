import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job Title : {jobDetails.title}</b>
      </p>
      <p>
        <b>Salary : {jobDetails.salary}</b>
      </p>
      <p>
        <b>Job Location : {jobDetails.location}</b>
      </p>
      <p>
        <b>Description : </b>
        Successful Software Developers have exceptional collaborative skills
        because they need to work with different teams and departments to
        deliver their projects. The role requires candidates who are excellent
        communicators, are adaptable and have strong analytical skills.
      </p>

      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if (!res.ok) {
    throw Error("Could Not Found Job Details");
  }
  return res.json();
};
