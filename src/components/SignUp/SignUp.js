import React, { useState } from "react";
import { useInputChange } from "../../hooks/useInputChange";
import { Form, Col, Button, Row, Card } from "react-bootstrap";

import "./SignUp.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignUp({ setUserCreated }) {
  const [input, handleInputChange] = useInputChange({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [passMin, setPassMin] = useState(true);

  const history = useHistory();

  async function createUser(e) {
    e.preventDefault();
    // e.target.reset();
    if (input.password.length < 5) {
      console.log(input.password.length);

      setPassMin(false);
    } else if (
      passwordMatch &&
      !userExist &&
      !emailExist &&
      input.password.length > 5
    ) {
      try {
        await axios.post("http://localhost:4000/create", input);
        setUserCreated(true);
        history.push("/");
      } catch (error) {
        console.error("Error trying to create user:", error);
      }
    }
  }

  function handlePassword() {
    const { password, confirmPassword } = input;
    if (password !== confirmPassword) setPasswordMatch(false);
    else setPasswordMatch(true);
  }

  async function handleExist(e) {
    const { name } = e.target;

    try {
      const response = await axios.post("http://localhost:4000/exist", {
        [name]: input[name]
      });
      if (response.data.username !== undefined)
        setUserExist(response.data.username);
      else setEmailExist(response.data.email);
    } catch (error) {
      console.error("Error trying to create user:", error);
    }
  }
  return (
    <Card>
      <Card.Header>
        <h1>Create a new account</h1>
      </Card.Header>
      <Card.Body className="sign-up-card">
        <Form name="signUpForm" onSubmit={createUser}>
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
              <Form.Control
                type="email"
                name="email"
                className={emailExist ? "error" : ""}
                onChange={handleInputChange}
                onBlur={handleExist}
              />
              {emailExist ? (
                <Form.Text className="error-text">
                  Email already exists.
                </Form.Text>
              ) : (
                ""
              )}
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
                onKeyUp={handleExist}
                onChange={handleInputChange}
              />
              {userExist ? (
                <Form.Text className="error-text">
                  This username already exists.
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
                onFocus={() => {
                  setPassMin(true);
                }}
                className={passwordMatch ? "" : "error"}
                onKeyUp={handlePassword}
                onChange={handleInputChange}
              />
              {passMin ? (
                ""
              ) : (
                <Form.Text className="error-text">
                  The password needs to have at least 6 characters.
                </Form.Text>
              )}
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
                <Form.Text className="error-text">
                  Passwords don't match
                </Form.Text>
              )}
            </Col>
          </Form.Row>
          <br />
          <Row className="justify-content-md-center">
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
