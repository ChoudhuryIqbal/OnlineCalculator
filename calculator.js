const input = document.querySelector('.userInput');
const result = document.querySelector('.output');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equalBtn = document.querySelector('#equal');

let displayValue = "";
let firstNum = "";
let secondNum = "";
let operatorName = "";
let isEqualClicked = false;

numbers.forEach(number => {

    number.addEventListener("click", e => {
        if (operatorName == "") {
            firstNum += e.target.innerText;
            displayValue = firstNum;
            input.innerHTML = displayValue;
            console.log(firstNum)
        } else {
            if (isEqualClicked) {
                secondNum = "";
                operatorName = "";
                isEqualClicked = false;
                result.innerHTML = "0";
                firstNum = e.target.innerText;
                displayValue = firstNum;
                input.innerHTML = displayValue;

            } else {
                secondNum += e.target.innerText;
                displayValue = firstNum + operatorName + secondNum;
                input.innerHTML = displayValue;
                console.log(secondNum)
            }

        }
    })
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        operatorName = e.target.innerText;
        displayValue += operatorName;
        input.innerHTML = displayValue;
        console.log(operatorName)
    })
})

equalBtn.addEventListener("click", e => {
    isEqualClicked = true;
    let calculatedResult = operator(operatorName, firstNum, secondNum);
    result.innerHTML = calculatedResult;

})

clear.addEventListener("click", e => {

    let displayValue = "";
    firstNum = "";
    secondNum = "";
    operatorName = "";
    // isEqualClicked = false;
    result.innerHTML = "0";
    input.innerHTML = "";
})



function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operator(operation, firstNum, secondNum) {

    if (operation == "+") {
        const resultAdd = add(parseInt(firstNum), parseInt(secondNum));
        console.log(resultAdd)
        return resultAdd;
    } else if (operation == '-') {
        const resultSub = subtract(firstNum, secondNum)
        console.log(resultSub)
        return resultSub;
    } else if (operation == "÷") {
        const resultDivide = divide(firstNum, secondNum)
        console.log(resultDivide)
        return resultDivide;
    } else if (operation == "x") {
        const resultMultiply = multiply(firstNum, secondNum)
        console.log(resultMultiply)
        return resultMultiply;
    } else {
        return "Error";
    }
}