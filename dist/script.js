$(document).ready(function () {
  //store inputs
  var inputs = [""];
  //total string
  var totalString;
  var outputString;
  var operators = ["+", "-", "/", "*"];
  function update() {
    totalString = inputs.join("");
    $("#display").html(totalString);
  }
  function getTotal() {
    totalString = inputs.join("");
    outputString = eval(totalString);
    $("#display").html(outputString);
    inputs[0] = "";
    inputs[1] = outputString.toString();
    inputs.splice(2, inputs.length);
    console.log(inputs);
  }
  function clear() {
    $("#display").html("0");
    inputs = [""];
  }
  function getValue(input) {
    //check if two dots are added in a row
    if (inputs[inputs.length - 1] === "." && input === ".") {
      console.log("You can't add two '.' in a row");
    }
    //check if string contains dot and operator
    else if (inputs[inputs.length - 1] === "/" && input === "0") {
        console.log("Really?");
      } else if (inputs.includes(".") && input === ".") {
        if (inputs.indexOf(".") < inputs.indexOf("+")) {
          inputs.push(input);
        } else if (inputs.indexOf(".") < inputs.indexOf("-")) {
          inputs.push(input);
        } else if (inputs.indexOf(".") < inputs.indexOf("*")) {
          inputs.push(input);
        } else if (inputs.indexOf(".") < inputs.indexOf("/")) {
          inputs.push(input);
        }
        console.log("You can't add two dots in one number");
      }
      //check if first numbers are zero -- needs to be fixed
      else if (inputs[inputs.length - 1] === "0" && input === "0") {
          console.log("You cant add two zero's in a row");
        }
        //check if first input is a number---maybe use isNaN?
        else if (inputs.length === 1 && operators.includes(input) === false) {
            inputs.push(input);
          } else if (operators.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
          } else if (Number.isNaN(input)) {
            inputs.push(input);
          } else {
            inputs.push(input);
          }
    update();
    console.log(inputs);
  }

  $(":button").click(function () {
    if (this.id === "clear") {
      console.log("clear");
      clear();
    } else if (this.id === "equals") {
      getTotal();
    } else {
      getValue(this.value);
    }
  });
});