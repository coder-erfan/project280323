import { DragBsic } from "./dragBasic";
import { GetElement } from "../getElement";

class DragContainer extends DragBsic{
  static self = null;
  constructor(dragBar, dragContainer){
    super(dragBar, dragContainer);
    if (DragContainer.self) {
      return
    }
    DragContainer.self = this;
    
    this.run();
  }
}

new DragContainer(GetElement.getBar(), GetElement.getBody())