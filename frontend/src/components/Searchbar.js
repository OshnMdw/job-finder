import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import JobList from "./JobList";

function Searchbar() {
  const [jobInput, setJobInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = async (jobInput, locationInput) => {
    try {
      const response = await fetch(`http://localhost:3000/?search=${encodeURIComponent(
        jobInput
      )}&location=${encodeURIComponent(locationInput)}`);

      console.log("Response from API:", response);
  
      const data = await response.json();
      console.log("Data from API:", data);
  
      // Check if there are job results
      if (data.results && data.results.length > 0) {
        setJobs(data.results);
      } else {
        setJobs([]); // Set jobs to an empty array if there are no results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  

  return (
    <div>
      <Form className="d-flex">
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
