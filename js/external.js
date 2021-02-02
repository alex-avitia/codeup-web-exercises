"use strict";

console.log("Hello from external JavaScript!");

//alert
alert("Welcome to my Website!");

//prompt
let favColor = prompt("What is your favorite color?");
if (favColor === "green" || favColor === "Green") {
    alert("Great, " + favColor + " is my favorite color, too!");
} else {
    alert("Your favorite color is " + favColor);
}

//3.1
var lilMerm = 3;
var broBear = 5;
var herc = 1;

var costPerDay = prompt("How much does each rental day cost?");
costPerDay = parseInt(costPerDay);
alert("You entered $" + costPerDay);

var mermCost = lilMerm * costPerDay;
var broCost = broBear * costPerDay;
var hercCost = herc * costPerDay;
var totalCost = mermCost + broCost + hercCost;
alert("The Little Mermaid costs $" + mermCost + " to rent for " + lilMerm + " days.");
alert("Brother Bear costs $" + broCost + " to rent for " + broBear + " days.");
alert("Hercules costs $" + hercCost + " to rent for " + herc + " days.");
alert("Total cost is $" + totalCost);

//3.2

//$400
var gPay = prompt("How much is Google paying you per hour?");
//10 hrs
var gTime = prompt("How many hours?");
//$380
var aPay = prompt("How much is Amazon paying you per hour?");
//6 hrs
var aTime = prompt("How many hours?");
//$350
var fPay = prompt("How much is Facebook paying you per hour?");
//4 hrs
var fTime = prompt("How many hours?");
var totalPay = (gPay * gTime) + (aPay * aTime) + (fPay * fTime);
alert("You will make $" + totalPay + " this week.");

//3.3

var isEnrolled = false;
var isFull = confirm("Is the classroom full?");
var isConflict = confirm("Is there a conflict with your schedule?");

if (isFull === true || isConflict === true){
    alert("You may not enroll.");
} else {
    isEnrolled = true;
    alert("You may enroll!");
}

//3.4

/*
Product can be offered only if: 1) person buys more than 2 items and
2) offer has not expired. Premium members can: 1) buy any amount as
long as 2) offer has not expired
*/

var useOffer = true;
var itemsBought = prompt("How many items are you purchasing?");
var premMem = confirm("Are you a Premium Member?");
var expired = confirm("Is the offer expired?");

if (premMem === true && expired === false) {
    alert("You may apply the offer.");
} else if (itemsBought >= 2 && expired === false){
    alert("You may apply the offer.");
} else {
    alert("Offer cannot be applied.");
    useOffer = false;
}
