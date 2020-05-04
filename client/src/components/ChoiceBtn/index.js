import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChoiceBtn(props) {
  return (
    <span className="choice-btn" {...props} role="button" value="Run" tabIndex="0">
      {document.getElementsByClassName('choice-btn').value}
    </span>
  );
}

export default ChoiceBtn;
