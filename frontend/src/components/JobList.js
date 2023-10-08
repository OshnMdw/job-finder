import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job, index) => (
        <JobItem
          key={index}
          title={job.company.display_name} 
          location={job.location.display_name} 
          salary={job.salary_max} 
          description={job.description} 
          url={job.redirect_url} 
        />
      ))}
    </div>
  );
}

export default JobList;
