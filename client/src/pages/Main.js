import React, { Component } from "react";
import {Jumbotron, Jumbotron2} from "../components/Jumbotron";
import {TextArea, Input} from "../components/Form";
import Images from "../components/Images";
import ChoiceBtn from "../components/ChoiceBtn";
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
      {name: "Str", hidden:"false", fullName: "Strength", desc: "Carry Weight, Physical Strength, Inimidation, and Melee", start: 10, current: 10},
      {name: "Int", hidden:"false", fullName: "Intelligence", desc: "Problem Solving, Research, Wisdom, and Incredulity", start: 12, current: 12},
      {name: "Def", hidden:"false", fullName: "Defence", desc: "Health, Hardiness, Endurance, and Sturdiness", start: 9, current: 9},
      {name: "Chr", hidden:"false", fullName: "Charisma", desc: "Likability, Persuasion, Bartering, Empathy", start: 11, current: 11},
      {name: "Dex", hidden:"false", fullName: "Dexterity", desc: "Aim , Stealth, Lockpicking, Theft", start: 8, current: 8},
      {name: "Agl", hidden:"false", fullName: "Agility", desc: "Speed, Evasion, Stamina, Flexibility", start: 13, current: 13},
      {name: "Per", hidden:"false", fullName: "Perception", desc: "Eyesight, Intuition, Observation, Insight", start: 14, current: 14},
      {name: "Lck", hidden:"false", fullName: "Luck", desc: "Chance, Gambling, Random Events, Chance of Critical Failure/Success", start: 14, current: 14},
      {name: "San", hidden:"true", fullName: "Sanity", desc: "How well you can handle the horrors of this world. Not everything lasts forever though", start: 20, current: 20},
      {name: "Mor", hidden:"true", fullName: "Morality", desc: "How perceptive people will see you. You can't hide everything", start: 50, current: 50},
      {name: "Hum", hidden:"true", fullName: "Humanity", desc: "What is the difference between beast and man? That's up to you", start: 50, current: 50},
      {name: "Lif", hidden: "false", fullName: "Life", desc: "How close you are to leaving this world", start: 100, current: 50},
      {Str: 10, Int: 12, Def: 9, Chr:  11, Dex: 8, Agl: 13, Luck: 2, Sanity: 20}
    ],
    choices:[
      {text: "Cry"},
      {text: "Shoot wildly"},
      {text: "Look for supplies"},
      {text: "Try and figure out who did this"}
    ],
    story: [
      {text: "You enter your house after a long day of work, but find yourself met with utter destruction and ruination. What was once your house is now a distaster. You are taken aback. Everything you own, all that you've worked for, gone, and for what purpose."}
    ],
    items: [
      {name: "shovel", image: Shovel, data:0}
    ]
  }

  render() {
    const {character, location, items, choices, story} = this.state;
    return(
      <Container fluid>
        <div class="flex-container">
          <Row>
            <div class="col-md-3 characterCol">
              
              <Jumbotron>
                <div className="characterInfo">
                  <h2 style={{color: "white"}}>{character}</h2>
                </div>
              </Jumbotron>
              
            </div>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <Jumbotron2>
                  <div className="mainStory">
                    <h2 className="area">{location}</h2>
                    <p className="storyText">{story[0].text}</p>
                    {choices.map(choice => (
                      <button className="choiceButton">{choice.text}</button>
                      // <ChoiceBtn value={choice.text}>{choice.text}</ChoiceBtn>
                    ))}
                    <br></br>
                    <Input></Input>
                  </div>

                </Jumbotron2>
                
              </Jumbotron>
            </Col>
            <Col size="md-3 sm-12">
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
        </div>


      </Container>



    );
  }



}

export default Main;