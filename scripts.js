const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const numBtns = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const numsAndOps = document.querySelectorAll(".numButton");
const display = document.querySelector(".display");
const allButtons = document.querySelectorAll("button");

let firstNum = "";
let secondNum = "";
let operator = "";
let answer = "";


//anytime a number button is pressed...
for(let i of numBtns){
   i.addEventListener("click", function(){
        if(!operator){
            firstNum += this.innerText;
            display.innerText = firstNum;
        } else {
            secondNum += this.innerText;
            display.innerText = secondNum;
        }
   });
}

//anytime an operator is pressed...
for(let i of operators){
    i.addEventListener("click", function(){
        if(!operator){
        operator = this.innerText;
        } else {
            if(firstNum && secondNum){
                operate();
                operator = this.innerText;
            }
        }
    });
}

equals.addEventListener("click", operate);
clearBtn.addEventListener("click", clearAll);

function operate(){
    if(firstNum && secondNum && operator){
        if(operator == "+") answer = (add(+firstNum, +secondNum));
        if(operator == "-") answer = (subtract(+firstNum, +secondNum));
        if(operator == "x") answer = (multiply(+firstNum, +secondNum));
        if(operator == "/") answer = (divide(+firstNum, +secondNum));
        display.innerText = answer;
        firstNum = answer;
        secondNum = "";
        operator = "";
    }
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
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerText = "";
    answer = "";
}


//for debugging purposes
for(let i of allButtons){
    i.addEventListener("click", function(){
    console.log("firstNum: " + firstNum);
    console.log("operator: " + operator);
    console.log("secondNum: " + secondNum);
    console.log("answer: " + answer);
    console.log("________");
})
}

