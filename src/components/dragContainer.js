import {GetElement} from"./getElement"

class DragContainer {
  static self = null;
  constructor(){
    if (DragContainer.self) {
      return
    }
    DragContainer.self = this;
    this.init();
    this.run();
    
  }
  init(){
    this.mouseDownLocation = {x:0, y:0};
    this.mouseOnBar = false;

    this.mouseUpLocation = {x:0, y:0};

    this.mouseMoveLocation = {x:0, y:0};
  }
  run(){
    this.mouseDown();
    this.mouseUp();
    this.mouseMove();
    this.moveBar();
  }

  moveBar(){
    const bar = GetElement.getBar();
    bar.addEventListener("mousedown", ()=>{
      this.mouseOnBar = true;
      console.log("mousedown");
    });
    bar.addEventListener("mouseup", ()=>{
      this.mouseOnBar = false;
      console.log("mouseup");
    })
  }

  mouseDown(){
    document.addEventListener("mousedown", (event)=>{
      this.mouseDownOnBody(event);
    }) 
  }

  mouseUp(){
    document.addEventListener("mouseup", (event)=>{
      this.mouseUpOnBody(event)
    })
  };

  mouseMove(){
    document.addEventListener("mousemove", (event)=>{
      this.mouseMoveOnBody(event)
    })
  };

  mouseDownOnBody(event){
    this.mouseDownLocation.x = event.clientX;
    this.mouseDownLocation.y = event.clientY; 
  }

 

  mouseMoveOnBody(event){
    const container = GetElement.getBody();
    if (this.mouseOnBar) {
      this.mouseMoveLocation.x = event.clientX - this.mouseDownLocation.x +this.mouseUpLocation.x;
      this.mouseMoveLocation.y = event.clientY - this.mouseDownLocation.y +this.mouseUpLocation.y;
      container.style.transform = `translate(${this.mouseMoveLocation.x}px, ${this.mouseMoveLocation.y}px)`
    }
  }

  mouseUpOnBody(event){
    this.mouseUpLocation.x = this.mouseMoveLocation.x;
    this.mouseUpLocation.y = this.mouseMoveLocation.y;
  }
  
}

const dragContainer = new DragContainer();