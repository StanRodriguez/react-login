import React from "react";
import { useInputChange } from "../../hooks/useInputChange";
import { Form, Col, Button, Row } from "react-bootstrap";
import "./SignUp.css";
// import FormElement from "../FormElement/FormElement";

export default function SignUp(...params) {
  const [input, handleInputChange] = useInputChange({});
  return (
    <Form>
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
          <Form.Label htmlFor="pass">Password</Form.Label>
        </Col>
        <Col sm="7">
          <Form.Control name="pass" onChange={handleInputChange} />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col sm="5">
          <Form.Label htmlFor="confirmPass">Confirm Password</Form.Label>
        </Col>
        <Col sm="7">
          <Form.Control name="confirmPass" onChange={handleInputChange} />
        </Col>
      </Form.Row>
      <br />
      <Row className="justify-content-sm-center">
        <Col>
          <Button variant="secondary">Back</Button>
        </Col>
        <Col>
          <Button variant="primary">Create</Button>
        </Col>
      </Row>
    </Form>
  );
}
