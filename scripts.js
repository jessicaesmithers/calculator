const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const numBtns = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const numsAndOps = document.querySelectorAll(".numButton");
const display = document.querySelector(".display");

let firstNum;
let secondNum;
let temp = "";
let operator;
let answer = "";
let operatorPressed = false;

for(let i of numBtns){
   i.addEventListener("click", addToTemp);
}

for(let i of operators){
    i.addEventListener("click", setOperator);
    i.addEventListener("click", setFirstNum);
}

for(let i of numsAndOps){
    i.addEventListener("click", showTemp);
}

equals.addEventListener("click", setSecondNum);
equals.addEventListener("click", operate);

//when a number is pressed, add it to the current value & the display
//when an operator is pushed, set the current value to firstNum, clear current value
//when a number is pressed, add it to current value & the display
//when equals is pushed, send current value to secondNum, clear current value, operate


//what if...
//equals is pushed too early?
//equals is pushed multiple times in a row?

function showTemp(){
    display.innerText = temp;
}

function setSecondNum(){
    secondNum = temp;
    temp = "";
}

function setFirstNum(){
    if(answer) firstNum = answer;
    else {
        firstNum = temp;
        temp = "";
    }
}

function setOperator(){
    if(operator){
        operator = this.innerText;
        secondNum = temp;
        operate();
    } else {
        operator = this.innerText;
    }
}

function addToTemp(){
    temp += this.innerText;
}

function operate(){
    if(operator == "+") answer = (add(+firstNum, +secondNum));
    if(operator == "-") answer = (subtract(+firstNum, +secondNum));
    if(operator == "x") answer = (multiply(+firstNum, +secondNum));
    if(operator == "/") answer = (divide(+firstNum, +secondNum));
    display.innerText = answer;
    temp = "";
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
    // firstNumber = "";
    // operator = "";
    // secondNumber = "";
    // operatorPressed = false;
    // display.innerText = 0;
    // answer = "";
}