import React, { Component } from "react";
import {Jumbotron, Jumbotron2} from "../components/Jumbotron";
import {TextArea, Input} from "../components/Form";
import Images from "../components/Images";
import '../App.css';
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Shovel from "../components/Images/shovel.png"

class Main extends Component{

  state = {
    character: "Bob",
    location: "Bob's House",
    items: [
      {name: "shovel", image: Shovel, data:0}
    ]
  }

  render() {
    const {character, location, items} = this.state;
    return(
      <Container fluid>
        <Row>
          <Col size="md-3">
            
            <Jumbotron>
              <div className="characterInfo">
                <h2 style={{color: "white"}}>{character}</h2>
              </div>
            </Jumbotron>
            
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <Jumbotron2>
                <div className="mainStory">
                  <h2 className="area">{location}</h2>
                </div>

              </Jumbotron2>
              <Input></Input>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <div className="inventory">
                <h2 className="itemBag" style={{color: "white"}}>Inventory</h2>
                  {/* Map through Items and add use, inspect, and throw away buttons */}
                  {items.map(item => (
                    <div className="currentItems">
                      <img style={{width:"150px", height:"150px"}} src={item.image} alt={item.name}></img>
                    </div>
                  ))}
              </div>
            </Jumbotron>
          </Col>
        </Row>


      </Container>



    );
  }



}

export default Main;