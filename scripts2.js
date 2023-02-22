//displays
const current = document.querySelector(".current");
const history = document.querySelector(".history");

//buttons
const numButtons = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#delete");

//operator and operands
let firstNumber = "";
let operator = "";
let operatorPressed = false;
let secondNumber = "";
let answer = "";
let historyValue = "";
let currentValue = "";

//event listeners
for(let i of numButtons){
    i.addEventListener("click", populateValues);
    i.addEventListener("click", populateDisplay);
}

for(let i of operators){
    i.addEventListener("click", setOperator);
}

equals.addEventListener("click", operate);
clear.addEventListener("click", clearAll);


//functions

//display:
//when numbers are pressed, show their values on the screen
//when operator is pressed, move firstNumber & operator to history, second number to screen
//when equals is pressed, second number is added to history and answer is shown on screen
//
function populateDisplay(){
    if(!operatorPressed){
        current.innerText += this.innerText;
    } else {
        current.innerText = secondNumber;
    }
}

function populateValues(){
    if(!operatorPressed){
        firstNumber += this.innerText;
    } else {
        secondNumber += this.innerText;
    }
}

function setOperator(){
    operator = this.innerText;
    if(!answer){
    operatorPressed = true;
    history.innerText += firstNumber + " " + this.innerText;
    } else {
        history.innerText = answer + " " + operator;
        firstNumber = answer;
        secondNumber = "";
    }
}

function operate(){
    history.innerText += " " + secondNumber + " = ";
    if(operator == "+") answer = (add(+firstNumber, +secondNumber));
    if(operator == "-") answer = (subtract(+firstNumber, +secondNumber));
    if(operator == "x") answer = (multiply(+firstNumber, +secondNumber));
    if(operator == "/") answer = (divide(+firstNumber, +secondNumber));
    current.innerText = answer;
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
    firstNumber = "";
    operator = "";
    secondNumber = "";
    operatorPressed = false;
    answer = "";
    historyValue = "";
    currentValue = "";
    current.innerText = "";
    history.innerText = "";
}