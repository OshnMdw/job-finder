import React from "react";

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index} className="job-list-item">
          <h3>{job.title}</h3>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>Description: {job.description}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;
