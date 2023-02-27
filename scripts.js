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
        //check if it already contains a decimal
        if(this.innerText == "."){
            if(!operator){
                if(!firstNum.includes(".")){
                    firstNum += this.innerText;
                    display.innerText = firstNum;
                }
            } else {
                if(!secondNum.includes(".")){
                    secondNum += this.innerText;
                    display.innerText = secondNum;
                }
            }
        } else {
            if(!operator){
                if(firstNum.length < 13){
                    firstNum += this.innerText;
                    display.innerText = firstNum;
                }
            } else {
                if(secondNum.length < 13){
                    secondNum += this.innerText;
                    display.innerText = secondNum;
                }
            }
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
deleteBtn.addEventListener("click", backspace);

function operate(){
    if(firstNum && secondNum && operator){
        if(operator == "+") answer = (add(+firstNum, +secondNum));
        if(operator == "-") answer = (subtract(+firstNum, +secondNum));
        if(operator == "x") answer = (multiply(+firstNum, +secondNum));
        //checks for division by 0 errors
        if(operator == "/" && secondNum != 0){
            answer = (divide(+firstNum, +secondNum));
        } else if (operator == "/" && secondNum == 0){
            alert("Error! Cannot divide by zero.");
        }
        //ensures that the answer doesn't overflow from display
        if(answer.toString().length > 13){
            if(answer > 9999999999999){
                display.innerText = answer.toPrecision(9);
            } else {
                display.innerText = (answer).toString().substring(0, 9);
            }
        } else {
            display.innerText = answer;
        }
        firstNum = answer.toString();
        secondNum = "";
        operator = "";
    }
}

function backspace(){
    if(!operator){
        firstNum = firstNum.slice(0, firstNum.length - 1);
        display.innerText = firstNum;
    } else {
        if(secondNum){
            secondNum = secondNum.slice(0, secondNum.length - 1);
            display.innerText = secondNum;
        }
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

