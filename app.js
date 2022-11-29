let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".button"));

//lets us click buttons and displays them in the display
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = " ";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          // Break up the string into 3 parts. 1. the left side of the operation. 2. the operand. 3. the right side of the operation.
          let equation = display.innerText;
          let isNegative = false; //variable for negative numbers
          if (equation.substring(0, 1) == "-") {
            isNegative = true;
            equation = equation.substring(1, equation.length);
          }

          let operand = equation.match(/[^0-9.]/g).toString();
          let arrayNumbers = equation.split(operand);
          let leftNumber = Number(arrayNumbers[0]);
          if (isNegative == true) {
            leftNumber = leftNumber * -1;
          }
          let rightNumber = Number(arrayNumbers[1]);
          // let decimalNumbers = parseFloat(leftNumber);

          let result = null;
          switch (operand) {
            case "/":
              if (rightNumber != 0) {
                result = leftNumber / rightNumber;
              } else {
                result = "Infinity";
              }
              break;
            case "*":
              result = leftNumber * rightNumber;
              break;
            case "+":
              result = leftNumber + rightNumber;
              break;
            case "-":
              result = leftNumber - rightNumber;
              break;
            default:
              result = "Error";
          }
          display.innerText = result;
          //switch (display.innerText)
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
