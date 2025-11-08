let quantityBox = document.getElementById("quantityId");
quantityBox.addEventListener("input", printFunctionQ);

function printFunctionQ() {
    let selectedOptionIndex = quantityBox.options[quantityBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    let quantityOption = selectedOption;
    // console.log(quantityOption);
}

let inputElement = document.getElementById("inputNumberId");
inputElement.addEventListener("input", printFunctionIN);

function printFunctionIN(inputElement) {
    let inputValue = inputElement.target.value;
    // console.log(inputValue);
}

let inputBox = document.getElementById("inputBoxId");
inputBox.addEventListener("input", printFunctionIB);

function printFunctionIB() {
    let selectedOptionIndex = inputBox.options[inputBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    let inputOption = selectedOption;
    // console.log(inputOption);
}

let outputElement = document.getElementById("outputNumberId");
outputElement.addEventListener("input", printFunctionON);

function printFunctionON(outputElement) {
    let outputValue = outputElement.target.value;
    // console.log(outputValue);
}

let outputBox = document.getElementById("outputBoxId");
outputBox.addEventListener("input", printFunctionOB);

function printFunctionOB() {
    let selectedOptionIndex = outputBox.options[outputBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    let outputOption = selectedOption;
    // console.log(outputOption);
}

// quantityOption -> the quantity
// inputValue -> the value of input
// outputValue -> the value of output
// inputOption -> the unit of input
// outputOption -> the unit of output
