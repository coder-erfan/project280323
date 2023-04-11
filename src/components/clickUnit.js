class ClickUnit {
  seletedUnit = "selected-unit";
  constructor() {
    this.run();
  }
  run() {
    this.selectAllItems();
  }
  selectAllItems() {
    
    for (let el of this.allItems()) {
      el.addEventListener("click", this.checkBox.bind(this));
    }
  }
    // allItems.forEach((el) => {
    //   el.addEventListener("click", (event) => this.checkBox(event));
    // });
  
  allItems() {
    return document.querySelectorAll(".one-unit");
  }
  checkBox(event) {
    const target = event.currentTarget;
    target.classList.contains("add-unit")
      ? this.addBox(target)
      : this.selectBox(target);
  }

  addBox(target){
    const newUnit = document.createElement("div");
    newUnit.classList.add("one-unit");
    newUnit.innerHTML = `
        <span class="currency">BTC</span>
        <div>
          <span class="num">69</span>
          <span class="symbol">%</span>
        </div>
      `;
      target.parentNode.insertBefore(
        newUnit,
        target.parentNode.firstElementChild
      );
      newUnit.addEventListener("click", this.checkBox.bind(this));
    // const parentDiv = document.querySelector(".container-body");
    // parentDiv.insertBefore(newUnit, parentDiv.firstChild);
    // newUnit.addEventListener("click",() => this.selectAllItems())
  }

  selectBox(target){
    for (let el of this.allItems()) {
      el.classList.remove(this.seletedUnit);
    }
    target.classList.add(this.seletedUnit);
  }
}

const clickUnit = new ClickUnit();

//el.classList.contains(add-unit) ? console.log("yes") :console.log("no");
