let displayValue = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

let operatorPressed = false;


const current = document.querySelector(".current");
const history = document.querySelector(".history");
const equals = document.querySelector("#equals")
const smButtons = document.querySelectorAll(".smButton");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");

equals.addEventListener("click", operate);
clearButton.addEventListener("click", clearAll);

for(let op of operators){
    op.addEventListener("click", beginSecondNumber);
}

for(let btn of smButtons){
    btn.addEventListener("click", showValue);
    btn.addEventListener("click", populateValues);
}

function operate(){
    if(operator == "+") console.log(add(+firstNumber, +secondNumber));
    if(operator == "-") console.log(subtract(+firstNumber, +secondNumber));
    if(operator == "x") console.log(multiply(+firstNumber, +secondNumber));
    if(operator == "/") console.log(divide(+firstNumber, +secondNumber));
}

function beginSecondNumber(){
    operatorPressed = true;
    operator = this.innerText;
}

function showValue(){
    current.innerText += this.innerText;
}

//use this to modify the variables used in operate function
function populateValues(){
  if(!operatorPressed) firstNumber += this.innerText;
  if(operatorPressed) secondNumber += this.innerText;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function clearAll(){
    displayValue = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    operatorPressed = false;
    current.innerText = "";
}