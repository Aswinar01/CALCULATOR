let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    if (operator === '') {
        firstOperand += number;
        display.innerText = firstOperand;
    } else {
        secondOperand += number;
        display.innerText = secondOperand;
    }
}

function appendOperator(op) {
    if (firstOperand === '') return;  // Prevent entering operator before any number
    if (secondOperand !== '') {
        calculateResult();  // Calculate if a previous operation is pending
        firstOperand = display.innerText;
        secondOperand = '';
    }
    operator = op;
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    display.innerText = '0';
}

function deleteLast() {
    if (operator === '') {
        firstOperand = firstOperand.slice(0, -1);
        display.innerText = firstOperand || '0';
    } else {
        secondOperand = secondOperand.slice(0, -1);
        display.innerText = secondOperand || '0';
    }
}

function calculateResult() {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.innerText = result;
    firstOperand = result;
    secondOperand = '';
    operator = '';
}