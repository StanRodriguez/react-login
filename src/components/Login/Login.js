import React, { useState } from "react";
import { useInputChange } from "../../hooks/useInputChange";
import "./Login.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login({ setUser, isLoggedIn, setIsLoggedIn }) {
  const [input, handleInputChange] = useInputChange();
  const [userPassMatch, setUserPassMatch] = useState(true);

  async function logIn(e) {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:4000/login", input);
      if (data.data.user) {
        setUser(data.data.user);
        setIsLoggedIn(true);
      } else {
        setUserPassMatch(false);
      }
      console.log(data.data.user);
    } catch (error) {
      console.error("Error trying to login:", error);
    }
  }

  return (
    <Card>
      <Card.Header>
        <h1>Login</h1>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={logIn}>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="username">Username</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                required={true}
                className={userPassMatch ? "" : "error"}
                name="username"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="password">Password</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                required={true}
                className={userPassMatch ? "" : "error"}
                type="password"
                name="password"
                onChange={handleInputChange}
              />
              {userPassMatch ? (
                ""
              ) : (
                <Form.Text className="error-text">
                  Username and/or password incorrect.
                </Form.Text>
              )}
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
