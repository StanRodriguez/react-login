import React from "react";
import { useInputChange } from "../../hooks/useInputChange";
import "./Login.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login({ setUser, setIsLoggedIn }) {
  const [input, handleInputChange] = useInputChange();
  async function logIn(e) {
    e.preventDefault();
    e.target.reset();

    try {
      const data = await axios.post("http://localhost:4000/login", input);
      setUser(data.data.user);
      setIsLoggedIn(true);

      console.log(data.data.user);
    } catch (error) {
      console.error("Error trying to create user:", error);
    }
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={logIn}>
          <Form.Row>
            <Col>
              <h1>Login</h1>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="username">Username</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control name="username" onChange={handleInputChange} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="password">Password</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>
          <br />
          <Row className="justify-content-sm-center">
            <Col>
              <Link to="/signup">
                <Button variant="secondary">Sign Up</Button>
              </Link>
            </Col>
            <Col>
              <Button type="submit" variant="primary">
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
