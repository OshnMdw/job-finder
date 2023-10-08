import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import JobList from "./JobList";

function Searchbar() {
  const [jobInput, setJobInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = () => {
    const response = `http://localhost:3000/?search=${encodeURIComponent(
      jobInput
    )}&location=${encodeURIComponent(locationInput)}`;

    // Fetch job data from the server or API and update the 'jobs' state
    fetch(response)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.results); // Assuming the job data is in the 'results' field
        console.log(data.results)
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setJobs([]); // Clear job list on error
      });
  };

  return (
    <div>
      <Form className="d-flex m-5">
        <Form.Control
          type="job"
          placeholder="Job Title"
          className="me-2 rounded-pill"
          aria-label="Search"
          value={jobInput}
          onChange={(e) => setJobInput(e.target.value)}
        />
        <Form.Control
          type="location"
          placeholder="Location"
          className="me-2 rounded-pill"
          aria-label="Search"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <Button
          className="rounded-pill"
          variant="outline-primary"
          onClick={handleSearch}
        >
          Search Jobs
        </Button>
      </Form>
      {jobs.length > 0 && <JobList jobs={jobs} />}
    </div>
  );
}

export default Searchbar;
