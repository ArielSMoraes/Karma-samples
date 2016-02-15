var DomObject = function(){

  function addButtonToBody(text, id){
    var newButton = document.createElement("button");
    var textElement = document.createTextNode(text);
    newButton.appendChild(textElement);
    document.getElementById(id).appendChild(newButton);
  }

  function addEvent(){
    
  }

  return{
    addButtonToBody: addButtonToBody
  }

}