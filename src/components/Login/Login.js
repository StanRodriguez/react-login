import React from "react";
import { useInputChange } from "../../hooks/useInputChange";
import "./Login.css";
import { Form, Col, Button, Row } from "react-bootstrap";

export default function Login(...params) {
  const [input, handleInputChange] = useInputChange();
  return (
    <Form>
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
          <Form.Label htmlFor="pass">Password</Form.Label>
        </Col>
        <Col sm="7">
          <Form.Control name="pass" onChange={handleInputChange} />
        </Col>
      </Form.Row>
      <br />
      <Row className="justify-content-sm-center">
        <Col>
          <Button variant="secondary">Log In</Button>
        </Col>
        <Col>
          <Button variant="primary">Sign Up</Button>
        </Col>
      </Row>
    </Form>
  );
}
