describe('Dom interact', function() {
  var domObject;

  beforeEach(function(){
    domObject = new DomObject();

    var htmlElement = '<section id="section"></section>';
    document.body.insertAdjacentHTML('afterbegin', htmlElement);
  });

  afterEach(function(){
    document.body.removeChild(document.getElementById("section"));
  });

  it('should add a Button', function() {
    var section = document.getElementById("section");

    domObject.addButtonToBody("some text", "section");

    expect(section.childElementCount).toBe(1);
  });

  it('should add a Button', function() {
    var section = document.getElementById("section");

    domObject.addButtonToBody("some text", "section");
    var button = section.childNodes[0];
    
    expect(button.innerHTML).toEqual("some text");
  });

  it('should add black color to button when clicked', function() {
    var section = document.getElementById("section");
    domObject.addButtonToBody("some text", "section");
    var button = section.childNodes[0];

    button.click();

    expect(button.style.backgroundColor).toEqual("rgb(0, 0, 0)");
  });
  
});