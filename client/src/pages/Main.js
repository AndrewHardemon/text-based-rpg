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
    description: "This character is a man called Bob. He is the best man whose name starts with the letter B",
    stats: [
      {name: "Str", hidden:"false", fullName: "Strength", desc: "Carry Weight, Physical Strength, Inimidation, and Melee", start: 10, stat: 10},
      {name: "Int", hidden:"false", fullName: "Intelligence", desc: "Problem Solving, Research, Wisdom, and Incredulity", start: 12, stat: 12},
      {name: "Def", hidden:"false", fullName: "Defence", desc: "Health, Hardiness, Endurance, and Sturdiness", start: 9, stat: 9},
      {name: "Chr", hidden:"false", fullName: "Charisma", desc: "Likability, Persuasion, Bartering, Empathy", start: 11, stat: 11},
      {name: "Dex", hidden:"false", fullName: "Dexterity", desc: "Aim , Stealth, Lockpicking, Theft", start: 8, stat: 8},
      {name: "Agl", hidden:"false", fullName: "Agility", desc: "Speed, Evasion, Stamina, Flexibility", start: 13, stat: 13},
      {name: "Per", hidden:"false", fullName: "Perception", desc: "Eyesight, Intuition, Observation, Insight", start: 14, stat: 14},
      {name: "Lck", hidden:"true", fullName: "Luck", desc: "Chance, Gambling, Random Events, Chance of Critical Failure/Success", start: 14, stat: 14},
      {name: "San", hidden:"true", fullName: "Sanity", desc: ""},
      {name: "Mor", hidden:"true", fullName: "Morality", desc: ""},

      {Str: 10, Int: 12, Def: 9, Chr:  11, Dex: 8, Agl: 13, Luck: 2, San}
    ],
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
                  <div className="currentItems">
                  {items.map(item => (
                    <img style={{width:"150px", height:"150px"}} src={item.image} alt={item.name}></img>
                  ))}
                  </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>


      </Container>



    );
  }



}

export default Main;