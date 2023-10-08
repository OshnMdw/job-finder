import React from "react";
import { Card, Button } from "react-bootstrap";

function JobItem({ title, location, salary, description, url }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button href={url} target="_blank" variant="primary">
          Apply Job
        </Button>
      </Card.Body>
    </Card>
  );
}

export default JobItem;
