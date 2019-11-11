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
      }
      inpName.value = "";
      inpTitle.value = "";
      inpDescription.value = "";
    RenderPrint();
  }

  export default butSubm;