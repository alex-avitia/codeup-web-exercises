"use strict";

//#2
function showMultiplicationTable(number) {
    var product;

    for (var i = 1; i <= 10; i++) {
        product = number * (i);
        console.log(number + " x " + i + " = " + product);
    }
}

showMultiplicationTable(7);

//#3
for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 200) + 20;

    if (random % 2 === 0) {
        console.log(random + " is even");
    }
    else {
        console.log(random + " is odd");
    }
}

//#4
for (var i = 1; i < 10; i++) {
    var numToString = i.toString();

    console.log(numToString.repeat(i));
}

//#5
for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}