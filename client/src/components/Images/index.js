import React from "react";

function Images({ children }) {
  return (
    <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>

      {children}
    </div>
  );
}

export default Images;