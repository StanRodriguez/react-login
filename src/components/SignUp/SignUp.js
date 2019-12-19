import React, { useState } from "react";
import { useInputChange } from "../../hooks/useInputChange";
import { Form, Col, Button, Row, Card } from "react-bootstrap";

import "./SignUp.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignUp(...params) {
  const [input, handleInputChange] = useInputChange({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const history = useHistory();

  async function createUser(e) {
    e.preventDefault();
    e.target.reset();
    if (passwordMatch && !userExist) {
      try {
        await axios.post("http://localhost:4000/create", input);
        history.push("/");
      } catch (error) {
        console.error("Error trying to create user:", error);
      }
    }
  }

  function handlePassword() {
    const { password, confirmPassword } = input;
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }

  async function handleUsernameExist() {
    try {
      const data = await axios.post("http://localhost:4000/exist", input);
      setUserExist(data.data.exist);
    } catch (error) {
      console.error("Error trying to create user:", error);
    }
  }
  return (
    <Card>
      <Card.Body>
        <Form name="signUpForm" onSubmit={createUser}>
          <Form.Row>
            <Col>
              <h1>Create a new account</h1>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                required
                name="firstName"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control name="lastName" onChange={handleInputChange} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="email">Email</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control name="email" onChange={handleInputChange} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="username">Username</Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                required
                name="username"
                className={userExist ? "error" : ""}
                onKeyUp={handleUsernameExist}
                onChange={handleInputChange}
              />
              {userExist ? (
                <Form.Text className="text-muted error-text">
                  This username already exist
                </Form.Text>
              ) : (
                ""
              )}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="password" min={6}>
                Password
              </Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                required
                type="password"
                name="password"
                className={passwordMatch ? "" : "error"}
                onKeyUp={handlePassword}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm="5">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
            </Col>
            <Col sm="7">
              <Form.Control
                min={6}
                required
                className={passwordMatch ? "" : "error"}
                type="password"
                name="confirmPassword"
                onKeyUp={handlePassword}
                onChange={handleInputChange}
              />
              {passwordMatch ? (
                ""
              ) : (
                <Form.Text className="text-muted error-text">
                  Passwords don't match
                </Form.Text>
              )}
            </Col>
          </Form.Row>
          <br />
          <Row className="justify-content-sm-center">
            <Col>
              <Link to="/">
                <Button variant="secondary">Back</Button>
              </Link>
            </Col>
            <Col>
              <Button type="submit" variant="primary">
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
