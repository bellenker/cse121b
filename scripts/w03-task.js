/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (num1, num2) {
    return num1 + num2;
}

function addNumbers() {
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.getElementById("add2").value);
    const sum = add(num1, num2);

    const sumField = document.getElementById("sum");
    sumField.value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtractNumbers = function subtract (sub1, sub2) {
    return sub1 - sub2;
}

function subNumbers() {
    const sub1 = parseInt(document.getElementById("subtract1").value);
    const sub2 = parseInt(document.getElementById("subtract2").value);
    const diff = subtractNumbers(sub1, sub2);

    const diffField = document.getElementById("difference");
    diffField.value = diff;
}

document.getElementById("subtractNumbers").addEventListener("click", subNumbers);

/* Arrow Function - Multiply Numbers */

const multiplyNumbers = (mult1, mult2) => {
   return mult1 * mult2;
}

function multNumbers() {
    const mult1 = parseInt(document.getElementById("factor1").value);
    const mult2 = parseInt(document.getElementById("factor2").value);
    const factor = multiplyNumbers(mult1, mult2);

    const multField = document.getElementById("product");
    multField.value = factor;
}

document.getElementById("multiplyNumbers").addEventListener("click", multNumbers);

/* Open Function Use - Divide Numbers */

function divide (div1, div2) {
    return div1 / div2;
}

function divideNumbers() {
    const div1 = parseFloat(document.getElementById("dividend").value);
    const div2 = parseFloat(document.getElementById("divisor").value);
    const div = divide(div1, div2);

    const divField = document.getElementById("quotient");
    divField.value = div;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal() {
let subtotal = parseFloat(document.getElementById("subtotal").value);

if(document.getElementById("member").checked) {
    subtotal = subtotal - subtotal * 0.2;
} else {
    subtotal = subtotal;
}

document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.getElementById("array").textContent = numbersArray;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

togetherArray = numbersArray.map(number => number * 2);
map1 = togetherArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = map1;