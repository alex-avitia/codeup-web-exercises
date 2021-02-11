"use strict";

var input;

for (var i = 0; i < Infinity; i++) {
    input = Number(prompt("Please enter an odd number between 1 and 50:"));
    if (input % 2 === 1) {
        break;
    }
}

alert("Number to skip: " + input + ". Check console.");

var numberToSkip = input;
console.log(numberToSkip);
function skipMyNumber (number) {
    for (var i = 1; i <= 50; i++) {

        if (i === number) {
            console.log("Yikes! Skipping number: " + number);
            continue;
        }
        else if (i % 2 === 0) {
            continue;
        }

        console.log("Here is an odd number: " + i);

    }
}
skipMyNumber(input);
