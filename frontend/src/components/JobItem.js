import React from "react";
import { Card, Button } from "react-bootstrap";

function JobItem({ company, title, location, salary, description, url }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="mb-2">Company: {company}</Card.Title>
        <Card.Title className="mb-2 text-muted">Position: {title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Card.Text className="mb-2">Salary: {salary}</Card.Text>
        <Card.Text className="mb-2">{description}</Card.Text>
        <Button href={url} target="_blank" variant="primary">
          View Job
        </Button>
      </Card.Body>
    </Card>
  );
}

export default JobItem;
