import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
export default function Home({ user, setIsLoggedIn }) {
  const { firstName, lastName, email, username } = user;
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <h1>Welcome!!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Name:</h4>
          </Col>
          <Col>
            <h4>
              {firstName} {lastName}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Email:</h4>
          </Col>
          <Col>
            <h4>{email}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Username:</h4>
          </Col>
          <Col>
            <h4>{username}</h4>
          </Col>
        </Row>
        <Button onClick={() => setIsLoggedIn(false)}>Log out</Button>
      </Card.Body>
    </Card>
  );
}
