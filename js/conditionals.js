"use strict";

/* ########################################################################## */

/**
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if (color === 'blue' || color === 'Blue'){
        alert(color + " is the color of the sky.");
    }
    else if (color === 'red' || color === 'Red'){
        alert("When my cat escapes outside, all I see is " + color + ".");
    }
    else if (color === 'yellow' || color === 'Yellow'){
        alert("Good ducks are " + color + ".");
    }
    else if (color === 'green' || color === 'Green'){
        alert(color + " is not a creative color. I don't make the rules.");
    }
    else if (color === 'violet' || color === 'Violet'){
        alert("Violet?! You're turning " + color + "!");
    }
    else if (color === 'orange' || color === 'Orange'){
        alert("An " + color + " a day keeps the scurvy away.");
    }
    else if (color === 'indigo' || color === 'Indigo'){
        alert("If you actually call it " + color + " and not 'dark blue', you are suspicious.");
    }
    else {
        alert("I don't know anything about " + color + ".");
    }
}
//console.log(analyzeColor('blue'));
//console.log(analyzeColor('red'));
//console.log(analyzeColor('cyan'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case "blue":
        analyzeColor(randomColor);
        break;
    case "red":
        analyzeColor(randomColor);
        break;
    case "yellow":
        analyzeColor(randomColor);
        break;
    case "green":
        analyzeColor(randomColor);
        break;
    case "violet":
        analyzeColor(randomColor);
        break;
    case "orange":
        analyzeColor(randomColor);
        break;
    default:
        analyzeColor(randomColor);
}

/**
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Let's /switch/ it up: Enter a color:");
analyzeColor(userColor);

/* ########################################################################## */

/**
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNum = Math.floor(Math.random() * 6);
function calculateTotal(luckyNum, totalAmount){

    var newAmount;
    if (luckyNum === 0) {
        alert("Sorry, you're not lucky at all.");
    } else {
        alert("Congratulations, WalMart shopper! Your lucky number is " + luckyNum);
    }

    switch (luckyNum) {
        case 0:
            newAmount = totalAmount;
            break;
        case 1:
            newAmount = (totalAmount - (totalAmount * 0.1));
            break;
        case 2:
            newAmount = (totalAmount - (totalAmount * 0.25));
            break;
        case 3:
            newAmount = (totalAmount - (totalAmount * 0.35));
            break;
        case 4:
            newAmount = (totalAmount - (totalAmount * 0.5));
            break;
        case 5:
            newAmount = 0
            break;
    }

    alert("Your new amount is $" + newAmount);

}

console.log(calculateTotal(luckyNum, 100));

/**
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

//TODO: Sorry guys I made my own earlier lol

/**
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function pimpMyNumber() {

    var letsDoThis = confirm("Would you like to enter a number?");
    if (letsDoThis === true) {

        var userNum = Number(prompt("Fantastic, what's ya number?"));

        if (Math.abs(userNum) % 2 === 0) {
            alert("Ya number is even, sweet summer child.");
        }
        else if (Math.abs(userNum) % 2 === 1) {
            alert("Ya number is odd, you loose cannon!");
        }
        else {
            alert("Hey nerd, enter an actual number.");
            pimpMyNumber();
            return;
        }

        var numAddHundo = userNum + 100;
        alert("I'm adding 100 to your number because I can. Which makes " + numAddHundo + ". Don't fight me on this.");

        if (userNum >= 0) {
            alert("Hey, ya number is positive! What an optimist!");
        } else {
            alert("Whoa, your number is pretty negative. Are you okay?");
        }

    } else {
        alert("Alright, then. Nerd.");
    }
}

pimpMyNumber();