const audio = new Audio('sound/buttonSound.mp3')
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
let operatorCount = 0;
let placeHolder = "";

numbers.forEach(number => {

    number.addEventListener("click", e => {
        if (operatorName == "" && !isEqualClicked) {
            audio.play();
            firstNum += e.target.innerText;
            displayValue = firstNum;
            input.innerHTML = displayValue;
            isEqualClicked = false;
            console.log(firstNum)
        } else {
            if (isEqualClicked) {

                audio.play()
                secondNum = "";
                operatorName = "";
                result.innerHTML = "0";

                firstNum += e.target.innerText;

                displayValue = firstNum;
                input.innerHTML = displayValue;

            } else {
                audio.play()
                if (operatorCount > 1) {
                    secondNum += e.target.innerText;
                    displayValue += secondNum;
                    input.innerHTML = displayValue;
                    console.log(secondNum)
                } else {
                    secondNum += e.target.innerText;
                    displayValue = firstNum + operatorName + secondNum;
                    input.innerHTML = displayValue;
                    console.log(secondNum)
                }

            }

        }
    })
});

operators.forEach(op => {
    op.addEventListener("click", e => {

        audio.play();


        operatorCount++;

        if (operatorCount > 1) {
            firstNum = operator(operatorName, firstNum, secondNum);
            operatorName = e.target.innerText;
            displayValue += operatorName;
            input.innerHTML = displayValue;
            console.log(operatorName)
            secondNum = "";
            console.log(firstNum);
        } else {
            operatorName = e.target.innerText;
            displayValue += operatorName;
            input.innerHTML = displayValue;
            isEqualClicked = false;
            console.log(operatorName)
        }
    })
})

equalBtn.addEventListener("click", e => {
    if (firstNum == "" || secondNum == "" || operatorName == "") {
        //nothing happens
    } else {
        isEqualClicked = true;
        audio.play()
        let calculatedResult = operator(operatorName, firstNum, secondNum);
        result.innerHTML = calculatedResult;

        firstNum = "";
        secondNum = "";
        operatorName = "";
        operatorCount = 0;
    }


})

clear.addEventListener("click", e => {
    audio.play()
    let displayValue = "";
    firstNum = "";
    secondNum = "";
    operatorName = "";
    isEqualClicked = false;
    result.innerHTML = "0";
    input.innerHTML = "";
})



function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

//const button = document.querySelector('sound\buttonSound.mp3')

/* button.addEventListener('click', (e) => {
    audio.play()
}) */

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
        if (secondNum == 0) {
            return "Error"
        }
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