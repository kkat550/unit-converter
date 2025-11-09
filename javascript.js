console.log("Hi!");

// quantityOption -> the quantity, i.e. time, length...
// inputValue -> the value of input
// outputValue -> the value of output
// inputOption -> the unit of input
// outputOption -> the unit of output

let quantityOption = null;
let inputValue = null;
let outputValue = null;
let inputOption = null;
let outputOption = null;

let quantityBox = document.getElementById("quantityId");
quantityBox.addEventListener("input", functionQuantity);

function functionQuantity() {
    let selectedOptionIndex = quantityBox.options[quantityBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    quantityOption = selectedOption;
    // console.log(quantityOption);
}

let inputElement = document.getElementById("inputNumberId");
inputElement.addEventListener("input", functionInputNumber);

function functionInputNumber(inputElement) {
    inputValue = inputElement.target.value;
    changeOutputValue(computeValue(inputValue, inputOption, outputOption));
    // console.log(inputValue);
}

let inputBox = document.getElementById("inputBoxId");
inputBox.addEventListener("input", functionInputBox);

function functionInputBox() {
    let selectedOptionIndex = inputBox.options[inputBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    inputOption = selectedOption;
    changeOutputValue(computeValue(inputValue, inputOption, outputOption));
    // console.log(inputOption);
}

let outputElement = document.getElementById("outputNumberId");
outputElement.addEventListener("input", functionOutputNumber);

function functionOutputNumber(outputElement) {
    outputValue = outputElement.target.value;
    changeInputValue(computeValue(outputValue, outputOption, inputOption));
    // console.log(outputValue);
}

let outputBox = document.getElementById("outputBoxId");
outputBox.addEventListener("input", functionOutputBox);

function functionOutputBox() {
    let selectedOptionIndex = outputBox.options[outputBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    outputOption = selectedOption;
    changeInputValue(computeValue(outputValue, outputOption, inputOption));
    // console.log(outputOption);
}

function changeInputValue(value) {
    document.getElementById("inputNumberId").value = value;
}

function changeOutputValue(value) {
    document.getElementById("outputNumberId").value = value;
}

function computeValue(startingValue, startingUnit, endUnit) {
    if (startingValue == null || startingUnit == undefined || endUnit == null) {
        return;
    }
    switch (startingUnit) {
        case "Seconds":
            switch (endUnit) {
                case "Seconds":
                    return startingValue;
                case "Minutes":
                    return startingValue / 60;
                case "Hours":
                    return startingValue / 3600;
            }
        case "Minutes":
            switch (endUnit) {
                case "Seconds":
                    return startingValue * 60;
                case "Minutes":
                    return startingValue;
                case "Hours":
                    return startingValue / 60;
            }
        case "Hours":
            switch (endUnit) {
                case "Seconds":
                    return startingValue * 3600;
                case "Minutes":
                    return startingValue * 60;
                case "Hours":
                    return startingValue;
            }
    }
    return;
}
