import React from "react";
import Button from "./Button"
import butSubm from "./submit"
function  InputSide() {
    return (
      <div className="App">
        <div className="inpSide">
          <input id="inpName" />
          <input id="inpTitle" />
          <input id="inpDescription" />
          <div id="but">
            {Button(butSubm,"Submit")}
          </div>
        </div>
        <div id="printroot"></div>
      </div>
    );
  }


export default InputSide;
