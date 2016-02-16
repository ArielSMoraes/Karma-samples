var DomObject = function(){

  function addButtonToBody(text, id){
    var newButton = document.createElement("button");
    var textElement = document.createTextNode(text);
    newButton.appendChild(textElement);
    addEventClick(newButton);
    document.getElementById(id).appendChild(newButton);
  }

  function addEventClick(button){
    button.addEventListener("click", function(){
      button.style.backgroundColor = "#000";
    });
  }

  return{
    addButtonToBody: addButtonToBody
  }

}