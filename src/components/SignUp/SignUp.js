import React from "react";
import { useInputChange } from "../../hooks/useInputChange";
import { Form, Col, Button, Row } from "react-bootstrap";
import "./SignUp.css";
import axios from "axios";

export default function SignUp(...params) {
  const [input, handleInputChange] = useInputChange({});
  async function createUser(e) {
    e.preventDefault();
    e.target.reset();
    try {
      const response = await axios.post("http://localhost:4000/create", input);
      console.log(response);
    } catch (error) {
      console.error("Error trying to create user:", error);
    }
  }

  return (
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
          <Form.Control name="firstName" onChange={handleInputChange} />
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
          <Form.Label htmlFor="username">username</Form.Label>
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
      <Form.Row>
        <Col sm="5">
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
        </Col>
        <Col sm="7">
          <Form.Control
            type="password"
            name="confirmPassword"
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
      <br />
      <Row className="justify-content-sm-center">
        <Col>
          <Button variant="secondary">Back</Button>
        </Col>
        <Col>
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
