import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Images from "../components/Images";
import '../App.css';
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Main extends Component{


  render() {
    return(
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>Youtube</h1>
          </Col>
        </Row>


      </Container>



    );
  }



}

export default Main;