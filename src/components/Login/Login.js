import React from "react";
import { useInputChange } from "../../hooks/useInputChange";
import "./Login.css";
import { Form, Col, Button, Row } from "react-bootstrap";
import axios from "axios";

export default function Login(...params) {
  const [input, handleInputChange] = useInputChange();
  async function logIn(e) {
    e.preventDefault();
    e.target.reset();

    try {
      const response = await axios.post("http://localhost:4000/login", input);
      console.log(response);
    } catch (error) {
      console.error("Error trying to create user:", error);
    }
  }
  return (
    <Form onSubmit={logIn}>
      <Form.Row>
        <Col>
          <h1>Create a new account</h1>
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
          <Button variant="primary">Sign Up</Button>
        </Col>
        <Col>
          <Button type="submit" variant="secondary">
            Log In
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
