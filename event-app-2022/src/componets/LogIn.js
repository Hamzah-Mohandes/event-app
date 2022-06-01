import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

function LogIn() {
  return (
    <div className="Container">
      <Container>
        <Row>
          <Col xs={8} className=" pb-5 ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="danger" type="submit">
                LogIn
              </Button>
            </Form>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
export default LogIn;
