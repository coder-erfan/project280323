import { DragBsic } from "./dragBasic";
import { GetElement } from "../getElement";

class DragUnit extends DragBsic{
  constructor(dragUnit){
    super(dragUnit, dragUnit);
    this.unit = dragUnit;
    this.transition = this.unit.style.transition;
    this.zIndex = this.unit.style.zIndex;

    this.run();
  }

  mouseDownOnBody(event) {
    super.mouseDownOnBody(event)
    if (this.mouseOnBar) {
      this.unit.style.transition = "none";
      this.unit.style.zIndex = "999";
    }
  }

  mouseUpOnBody(event) {
    super.mouseUpOnBody(event);
    this.unit.style.transition = this.transition;
    this.unit.style.zIndex = this.zIndex;
  }

}

GetElement.getUnit().forEach((unit) => {
  new DragUnit(unit);
});