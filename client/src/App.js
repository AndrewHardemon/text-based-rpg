import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }

}

export default App;
