// function addition() {
//     return 42; // test passes, but this calculator is no good
// }

// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         alert("Error!");
//     }
// }

Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if(typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}

