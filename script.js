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
    if (b === 0) {
        return "Error: Division by 0";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return null;
    }
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = false;

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        handleButtonClick(value);
    });
});

function handleButtonClick(value) {
    if (value >= "0" && value <= "9" || value === ".") {
        appendNumber(value);
    } else if (value === "clear") {
        clearCalculator();
    } else if (value === "=") {
        calculateResult();
    } else {
        setOperator(value);
    }
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.textContent = "";
        shouldResetDisplay = false;
    }
    if (number === "." && display.textContent.includes(".")) return;
    display.textContent+=number;
}

function setOperator(operator){
    if(currentOperator!=="") calculateResult();
    firstNumber=display.textContent;
    currentOperator=operator;
    shouldResetDisplay=true;
}

function calculateResult(){
    if(currentOperator==="" || shouldResetDisplay) return;
    secondNumber=display.textContent;
    const result=operate(currentOperator,parseFloat(firstNumber),parseFloat(secondNumber));
    display.textContent=roundResult(result);
    currentOperator="";
}

function roundResult(result){
    return Math.round(result*1000)/1000;
}

function clearCalculator(){
    firstNumber="";
    secondNumber="";
    currentOperator="";
    display.textContent="0";
}













