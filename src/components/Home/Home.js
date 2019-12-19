import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
export default function Home({ user, setIsLoggedIn }) {
  const { firstName, lastName, email, username } = user;
  return (
    <Card>
      <Card.Header>
        <h1>Welcome, {firstName}!!</h1>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={5}>
            <h6>First Name:</h6>
          </Col>
          <Col sm={7}>
            <h6>{firstName}</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <h6>Last Name:</h6>
          </Col>
          <Col sm={7}>
            <h6>{lastName}</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <h6>Email:</h6>
          </Col>
          <Col sm={7}>
            <h6>{email}</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <h6>Username:</h6>
          </Col>
          <Col sm={7}>
            <h6>{username}</h6>
          </Col>
        </Row>
        <Button onClick={() => setIsLoggedIn(false)}>Log out</Button>
      </Card.Body>
    </Card>
  );
}
