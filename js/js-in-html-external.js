"use strict";
console.log('Hello from an external JS file.');

name = "Ya boi";
console.log("Hello, " + name);

//confirm
var confirmLeave = confirm("Are you sure you want to leave, nerd?");
console.log("confirmLeave" + confirmLeave);

//prompt
var favoriteColor = prompt("What is your favorite color?");
console.log("Your favorite color is " + favoriteColor);
if(favoriteColor === "green"){
    console.log("Green is not a creative color.");
}