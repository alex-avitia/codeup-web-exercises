"use strict";

var myNum = 2;
var myLoops = 0;
while (myLoops < 16) {
    console.log(myNum);
    myNum = myNum * 2;
    myLoops++;
}

var allCones = Math.floor(Math.random() * 100) + 50;
var conesBought;
do {
    conesBought = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - conesBought;
    if (conesBought > allCones && allCones > 0){
        console.log("I cannot sell you " + conesBought + " cones! I only have " + allCones);
    }
    else if (conesBought === allCones && allCones === 0) {
        console.log("I did it! I sold all the cones!");
    }
    else {
        console.log(conesBought + " cones sold... " + allCones + " remain");
    }
} while (allCones > conesBought);


/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100
representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,
simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person.
This is a way get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
*/