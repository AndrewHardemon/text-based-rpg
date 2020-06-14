import React, { Component } from "react";
import {Jumbotron, Jumbotron2, Jumbotron3} from "../components/Jumbotron";
// import {TextArea, Input} from "../components/Form";
// import Images from "../components/Images";
// import ChoiceBtn from "../components/Buttons";
import '../App.css';
// import API from "../utils/API";
import { Row, Container } from "../components/Grid";
import Shovel from "../components/Images/shovel.png"
import Knife from "../components/Images/knife.png"

class Main extends Component{

  state = {
    character: "Bob",
    location: "Bob's House",
    textInput: "",
    part: 0,
    description: [
      {text: "This character is a man called Bob. He is the best man whose name starts with the letter B"}
    ],
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
      {name: "Hum", hidden:"true", fullName: "Humanity", desc: "What is the difference between beast and man?", start: 50, current: 50},
      {name: "Lif", hidden: "false", fullName: "Life", desc: "How close you are to leaving this world", start: 100, current: 50},
      {Str: 10, Int: 12, Def: 9, Chr:  11, Dex: 8, Agl: 13, Luck: 2, Sanity: 20}
    ],
    // choices:[
    //   {num: 0, text: "Cry"},
    //   {num: 1, text: "Shoot the wall"},
    //   {num: 2, text: "Look through the wreckage"},
    //   {num: 3, text: "Leave"}
    // ],
    story: [
      {
        part: 0,
        text: "You, after a long day of work, come back to find your house completely destroyed. You are shocked by what you see and run quickly into the house to see that there is nothing left.",
        noun: {name: "house", type: "building", speed: "immobile", living: false, size: "biggest", consumable: false},
        choices:[
          {num: 0, text: "Cry"},
          {num: 1, text: "Shoot the wall"},
          {num: 2, text: "Look through the wreckage"},
          {num: 3, text: "Leave"}
        ],
      }
    ],
    items: [
      {name: "shovel", image: Shovel, data:0},
      {name: "knife", image: Knife, data:1}
    ]
  }

  //Functionality
  
  componentDidMount(){
    // Add API call for getting saver
  }

  handleChoiceSelect = (event, choice) => {
    console.log(choice);
  
  }

  changeStats = () => {

  }

  checkStats = () => {

  }

  handleCustomWord = () => {
    // Trim the word and check it
    let theWord = this.state.textInput.trim()
    console.log(theWord);
    // Switch statement
    switch(theWord) {
      case "eat":
        console.log("eat")
        break;
      default:
        console.log("default")
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }



  render() {
    const {character, location, items, choices, story, description, part} = this.state;
    return(
      <Container fluid>
        <div class="flex-container">
          <Row>
            <div class="col-md-3 characterCol">
              
              <Jumbotron>
                <div className="characterInfo">
                  <h2 style={{color: "white"}}>{character}</h2>
                  <Jumbotron3>
                    <p style={{color: "white"}}>{description[0].text}</p>
                  </Jumbotron3>
                </div>
              </Jumbotron>
              
            </div>
            <div class="col-md-6 col-sm-12 storyCol">
              <Jumbotron>
                <Jumbotron2>
                  <div className="mainStory">
                    <h2 className="area">{location}</h2>
                    <div className="jumbotron" style={{backgroundColor:"white", height:"auto"}}>
                      <p className="storyText text-center" id="storyText">{story[0].text}</p>
                    </div>
                    {this.state.story[this.state.part].choices.map(choice => (
                      <button className="choiceButton" onClick={((e) => this.handleChoiceSelect(e, choice.num))}>{choice.text}</button>
                    ))}
                    <br></br>
                    <div className="input-group" id="actionBar">                      
                      <span className="input-group-btn">
                        <button className="btn btn-info" id="actionButton" onClick={((e) => this.handleCustomWord(e))}>Enter</button>
                      </span>
                      <input className="form-control width100" name="textInput" value={this.state.textInput} onChange={this.handleInputChange} id="actionInput"/>
                    </div>
                  </div>

                </Jumbotron2>
                
              </Jumbotron>
            </div>
            <div class="col-md-3 inventoryCol">
              <Jumbotron>
                <div className="inventory">
                  <h2 className="itemBag" style={{color: "white"}}>Inventory</h2>
                  {/* Map through Items and add use, inspect, and throw away buttons */}
                  <div className="currentItems">
                  {items.map(item => (
                    <img className="allImages" src={item.image} alt={item.name}></img>
                  ))}
                  </div>
                </div>
              </Jumbotron>
            </div>
          </Row>
        </div>


      </Container>



    );
  }



}

export default Main;