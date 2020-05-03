import React, { Component } from "react";
import {Jumbotron, Jumbotron2} from "../components/Jumbotron";
import {TextArea, Input} from "../components/Form";
import Images from "../components/Images";
import '../App.css';
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Main extends Component{


  render() {
    return(
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron/>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <Jumbotron2>
                <h1>aijfglkandsfglkagf</h1>
                <h1>aijfglkandsfglkagf</h1>
                <h1>aijfglkandsfglkagf</h1>

              </Jumbotron2>
              <Input></Input>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron/>
          </Col>
        </Row>


      </Container>



    );
  }



}

export default Main;