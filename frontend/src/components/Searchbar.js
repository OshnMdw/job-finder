import React, {useState} from 'react'
import { Button, Form } from "react-bootstrap";

function Searchbar() {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://api")
    }

  return (
    <div>
        <Form className="d-flex">
            <Form.Control
                type="job"
                placeholder="Job Title"
                className="me-2 rounded-pill"
                aria-label="Search"
                value = {input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <Form.Control
                type="location"
                placeholder="Location"
                className="me-2 rounded-pill"
                aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search Jobs
            </Button>
        </Form>
    </div>
  )
}

export default Searchbar