import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job, index) => (
        <JobItem
          key={index}
          company = {job.company.display_name}
          title={job.title} 
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
