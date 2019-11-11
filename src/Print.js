import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Button from "./Button"
import RenderPrint from "./Change";
import butSubm from "./submit";
function Print() {
  return List.list.map(elem => (
    <div id={elem.id} className="printSide">
      <div className="name">{elem.name}</div>
      <div className="title">{elem.title}</div>
      <div className="description">{elem.description}</div>
      <div>
        <button onClick={() => Update(elem.id)}>Update</button>
        <button onClick={() => Remove(elem.id)}>Remove</button>
      </div>
    </div>
  ));
}

function Update(id) {
  const inpName = document.getElementById("inpName");
  const inpTitle = document.getElementById("inpTitle");
  const inpDescription = document.getElementById("inpDescription");
 
  List.list.map((elem, index) => {
    if (elem.id === id) {
      const but = (
        <button
          className="button"
          onClick={() => {
            if (
              inpName.value !== "" &&
              inpTitle.value !== "" &&
              inpDescription.value !== ""
            ){
            List.list[index].name = inpName.value;
            List.list[index].title = inpTitle.value;
            List.list[index].description = inpDescription.value;
            
            RenderPrint();
            ReactDOM.render(Button(butSubm,"Submit"), document.getElementById("but"))
            inpName.value = "";
            inpTitle.value = "";
            inpDescription.value = "";
            }
          }}
        >
          Update
        </button>
      );
      ReactDOM.render(but, document.getElementById("but"));
    }
  });
 
}
function Remove(id) {
  List.list.map((elem, index) => {
    if (elem.id === id) delete List.list[index];
  });
  RenderPrint();
}
export default Print;
