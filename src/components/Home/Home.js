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
            <h3>Name:</h3>
          </Col>
          <Col>
            <h3>
              {firstName} {lastName}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Email:</h3>
          </Col>
          <Col>
            <h3>
              <h3>{email}</h3>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Username:</h3>
          </Col>
          <Col>
            <h3>{username}</h3>
          </Col>
        </Row>
        <Button onClick={() => setIsLoggedIn(false)}>Log out</Button>
      </Card.Body>
    </Card>
  );
}
