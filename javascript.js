console.log("hello");

let quantityBox = document.getElementById("quantityId");
quantityBox.addEventListener("input", printFunctionQ);

function printFunctionQ(quantityElement) {
    let selectedOptionIndex = quantityBox.options[quantityBox.selectedIndex];
    selectedOption = selectedOptionIndex.value;
    console.log(selectedOption);
}

let inputElement = document.getElementById("inputNumberId");
inputElement.addEventListener("input", printFunctionIN);

function printFunctionIN(inputElement) {
    console.log(inputElement.target.value);
}

// while (true) {
//     let inputElement = document.getElementById("inputNumberId");
//     let inputValue = inputElement.value;
//     console.log(inputElement);
//     console.log(inputValue);
// }
// let testElement = document.getElementById("inputNumberId").text;
// testElement.addEventListener("input")
// const input = document.getElementById("inputNumberId");
// const log = document.getElementById("1");

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }
