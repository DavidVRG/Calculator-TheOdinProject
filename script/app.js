/* VARIABLES DECLARATION */
const amountUI = document.querySelector('.amount');
const calc1 = document.querySelector('.calc1');
const calc2 = document.querySelector('.calc2');
const operatorUI = document.querySelector('.operatorUI')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let number1 = [];
let number2 = [];
let amount = '';
let operatorValue = '';

/* NUMBER CLICK EVENT */
numbers.forEach(number => {
    number.addEventListener('click', () => {
        numberValue = number.getAttribute('data-id')
        if(operatorValue == ''){
            number1+=numberValue;
            calc1.innerHTML = number1;
        }else{
            number2+=numberValue;
            calc2.innerHTML = number2;
        }
    })
})

/* OPERATOR CLICK EVENT */
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorValue = operator.getAttribute('data-id');
        operatorUI.innerHTML = operatorValue;
        if(amount != ''){
            number1 = [];
            number1+= amount;
            number2 = [];
            calc1.innerHTML = number1;
            calc2.innerHTML = number2;
        }
    })
})

/* OPERATOR CLICK EVENT */
equal.addEventListener('click', () => {
    let number1ParseInt = Number(number1);
    let number2ParseInt = Number(number2);
    switch(operatorValue){
        case '-':
            let sub = number1ParseInt-number2ParseInt;
            amount = sub;
            amountUI.innerHTML = `= ${amount}`;
            break;
        case '+':
            let sum = number1ParseInt+number2ParseInt;
            amount = sum;
            amountUI.innerHTML = `= ${amount}`;
            break;
        case '*':
            let multiply = number1ParseInt*number2ParseInt;
            amount = multiply;
            amountUI.innerHTML = `= ${amount}`;
            break;
        case '/':
            let div = number1ParseInt/number2ParseInt;
            amount = div;
            amountUI.innerHTML = `= ${amount}`;
            break;
    }
})

/* CLEAR EVENT */
clear.addEventListener('click', () => {
    number1 = [];
    number2 = [];
    amount = '';
    operatorValue = '';
    calc1.innerHTML = '';
    calc2.innerHTML = '';
    amountUI.innerHTML = '';
    operatorUI.innerHTML = '';
})