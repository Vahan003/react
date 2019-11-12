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
        <button id ={"up"+elem.id} onClick={() => Update(elem.id)}>Update</button>
        <button id = {"re"+elem.id} onClick={() => Remove(elem.id)}>Remove</button>
      </div>
    </div>
  ));
}

function Update(id) {
  const inpName = document.getElementById("inpName");
  const inpTitle = document.getElementById("inpTitle");
  const inpDescription = document.getElementById("inpDescription");
  DisableUpdates(true);
  List.list.map((elem, index) => {
    
    if (elem.id === id) {
      inpName.value = elem.name;
      inpTitle.value = elem.title;
      inpDescription.value = elem.description;
       DisableRemove(true, id);
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
            DisableUpdates(false);
            DisableRemove(false, id);
            }
            
          }
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
function DisableUpdates(expr){
  List.list.map((elem) => {
    const Allupdate = document.getElementById(`up${elem.id}`);
    if(expr){
      Allupdate.setAttribute("disabled","");
      Allupdate.style.opacity="0.4";
    }
    else{
      Allupdate.removeAttribute("disabled");
      Allupdate.style.opacity="1";
    }
  });
}
function DisableRemove(expr, id){
  const remove = document.getElementById(`re${id}`);
 if(expr){
  remove.style.opacity="0.4";
  remove.setAttribute("disabled","");
 }
 else{
  remove.style.opacity="1";
  remove.removeAttribute("disabled");
 }
}
export default Print;
