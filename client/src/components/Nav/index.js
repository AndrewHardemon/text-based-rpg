import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkr navbar-inverse navbar-fixed-top">
      {/* Desktop Code */}
      {<div className="container-fluid desktop">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Text-Based-RPG</a>
        </div>
        <ul className="nav navbar-nav mr-auto">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/">Inventory</a></li>
          <li><a href="/">Character</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>}
      {/* Tablet and Small Destop Resolution Code */}
      {<div className="container-fluid tablet">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Text-Based-RPG</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><a href="/">Inventory</a></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><a href="/">Character</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>}
      {/* Mobile code */}
      {<div className="container-fluid mobile">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Text-Based-RPG</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active "><a className="glyphicon glyphicon-home" href="/"> Home</a></li>
            <li><a href="/" className="glyphicon glyphicon-briefcase"> Inventory</a></li>
            <li><a href="/" className="glyphicon glyphicon-user" > Character</a></li>
            <li><a href="/"className="glyphicon glyphicon-user"> Sign-Up</a></li>
            <li><a href="/" className="glyphicon glyphicon-log-in"> Login</a></li>
          </ul>
        </div>
      </div>}
    </nav> 
  );
}

export default Nav;