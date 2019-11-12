import RenderPrint from "./Change";
import List from "./List";
function butSubm() {
    const inpName = document.getElementById("inpName");
    const inpTitle = document.getElementById("inpTitle");
    const inpDescription = document.getElementById("inpDescription");
    if (
        inpName.value !== "" &&
        inpTitle.value !== "" &&
        inpDescription.value !== ""
      ) {
        List.list.push({
          id: `id${List.id()}`,
          name: `${inpName.value}`,
          title: `${inpTitle.value}`,
          description: `${inpDescription.value}`
        });
        redBorder(false);
      }
      else{
       redBorder(true);
      }
      inpName.value = "";
      inpTitle.value = "";
      inpDescription.value = "";
    RenderPrint();
  }


  function redBorder(expr){
    const inpName = document.getElementById("inpName");
    const inpTitle = document.getElementById("inpTitle");
    const inpDescription = document.getElementById("inpDescription");
    if(expr){
      inpName.style.border = "1px solid red";
      inpTitle.style.border = "1px solid red";
      inpDescription.style.border = "1px solid red"; 
    }
     else{
      inpName.style.border = "1px solid black";
      inpTitle.style.border = "1px solid black";
      inpDescription.style.border = "1px solid black"; 
     }
  }

  export default butSubm;