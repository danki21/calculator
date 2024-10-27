let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", function () {
      if (firstOperand != "" && operator != "") {
        if (secondOperand == "0") {
          secondOperand = "";
          secondOperand += number.textContent;
          display.textContent = secondOperand;
        } else {
          secondOperand += number.textContent;
          display.textContent = secondOperand;
        }
      }

      if (secondOperand == "") {
        if (firstOperand == "0") {
          firstOperand = "";
          firstOperand += number.textContent;
          display.textContent = firstOperand;
        } else {
          firstOperand += number.textContent;
          display.textContent = firstOperand;
        }
      }

      if (secondOperand == "" && result != "") {
        if (firstOperand == "0") {
          firstOperand = "";
          result = "";

          firstOperand += number.textContent;
          display.textContent = firstOperand;
        } else {
          firstOperand = "";
          result = "";

          firstOperand += number.textContent;
          display.textContent = firstOperand;
        }
      }
    });
});

document.addEventListener("keypress", (event) => {
    if ("0123456789".includes(event.key)) {
       if (firstOperand != "" && operator != "") {
         if (secondOperand == "0") {
           secondOperand = "";
           secondOperand += event.key;
           display.textContent = secondOperand;
         } else {
           secondOperand += event.key;
           display.textContent = secondOperand;
         }
       }

       if (secondOperand == "") {
         if (firstOperand == "0") {
           firstOperand = "";
           firstOperand += event.key;
           display.textContent = firstOperand;
         } else {
           firstOperand += event.key;
           display.textContent = firstOperand;
         }
       }

       if (secondOperand == "" && result != "") {
         if (firstOperand == "0") {
           firstOperand = "";
           result = "";

           firstOperand += event.key;
           display.textContent = firstOperand;
         } else {
           firstOperand = "";
           result = "";

           firstOperand += event.key;
           display.textContent = firstOperand;
         }
       }
    }
});

const operators = document.querySelectorAll(".operator");
operators.forEach((opera) => {
  opera.addEventListener("click", function () {
    if (operator != "" && firstOperand != "" && secondOperand != "") {
      result = operate(firstOperand, secondOperand, operator);
      display.textContent = result;
      firstOperand = result;
      secondOperand = "";
      operator = opera.textContent;
    }
    if (firstOperand != "") {
      operator = opera.textContent;
    }
  });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", function () {
  if (firstOperand != "" && secondOperand != "" && operator != "") {
    result = operate(firstOperand, secondOperand, operator);
    if (result != "incorrect") {
      result = Math.trunc(result * 1000) / 1000;
      display.textContent = result;
      firstOperand = result;
      operator = "";
      secondOperand = "";
    } else {
      alert("Cannot divide by 0");
      display.textContent = "";
      firstOperand = "";
      operator = "";
      secondOperand = "";
    }
  }
});

const dot = document.querySelector(".dot");
dot.addEventListener("click", function () {
  if (!display.textContent.includes(".")) {
    if (firstOperand != "" && operator != "") {
      secondOperand += dot.textContent;
      display.textContent = secondOperand;
    }

    if (secondOperand == "") {
      firstOperand += dot.textContent;
      display.textContent = firstOperand;
    }

    if (secondOperand == "" && result != "") {
      firstOperand = "";
      result = "";
      firstOperand += dot.textContent;
      display.textContent = firstOperand;
    }
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
});

function operate(firstOperand, secondOperand, operator) {
  a = Number(firstOperand);
  b = Number(secondOperand);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b == 0) {
        return "incorrect";
      } else {
        return divide(a, b);
      }
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
