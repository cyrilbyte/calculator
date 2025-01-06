// script.js
const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function clearAll() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function numberClicked(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function operationClicked(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    currentOperandTextElement.innerText = currentOperand;
    if (operation != null) {
        previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
    } else {
        previousOperandTextElement.innerText = '';
    }
}