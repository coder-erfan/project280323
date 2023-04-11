class GetElement {
  static bar = "moveBar";
  static body = "container";
  static units = "one-unit";
  static addUnit = "add-unit"

  static getUnit() {
   return [...document.querySelectorAll("."+ GetElement.units)].filter(el=>!el.classList.contains(GetElement.addUnit))
  }

  static getBar() {
    return document.querySelector("." + GetElement.bar);
  }

  static getBody() {
    return document.querySelector("." + GetElement.body);
  }
}

export { GetElement };
