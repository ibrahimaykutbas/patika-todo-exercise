import React, { Component } from "react";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Card>
            <Header />
            <CardBody>
              <Col xs="12">
                <Form />
              </Col>
              <TodoList />
            </CardBody>
            <Footer />
          </Card>
        </Row>
      </Container>
    );
  }
}
