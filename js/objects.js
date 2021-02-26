(function() {
    "use strict";

    /**
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Alex",
        lastName: "Avitia"
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        alert("Hello from " + person.firstName + " " + person.lastName)
    }

    person.sayHello();

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function hebDiscount(shopper) {
        var discount = 12;
        var newCost;
        shopper.forEach(function(shopper){
            if (shopper.amount > 200) {
                newCost = shopper.amount - ((shopper.amount / 100) * discount);
                console.log(shopper.name + " spent $" + shopper.amount + " and received a discount of " + discount + "%. Their new amount is $" + newCost);
            } else {
                console.log(shopper.name + " spent $" + shopper.amount + " and did not receive a discount.");
            }
        })

    }

    hebDiscount(shoppers);

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var bookOne = {
        title: "The Lusty Argonian Maid",
        author: {
            firstName: "Crassius",
            lastName: "Curio"
        }
    }

    var bookTwo = {
        title: "The Wild Elves",
        author: {
            firstName: "Kier-Jo",
            lastName: "Chorvak"
        }
    }

    var bookThree = {
        title: "Reality and Other Falsehoods",
        author: {
            firstName: "Anonymous",
            lastName: ""
        }
    }

    var bookFour = {
        title: "Chimarvamidium",
        author: {
            firstName: "Morobar",
            lastName: "Sul"
        }
    }

    var bookFive = {
        title: "I could Pee on This: And Other Poems by Cats",
        author: {
            firstName: "Francesco",
            lastName: "Marciuliano"
        }
    }

    var books = [
        bookOne,
        bookTwo,
        bookThree,
        bookFour,
        bookFive

    ];

    /**
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    var count = 1;
    for (var i = 0; i < books.length; i++) {
        console.log("Book # " + (count));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
        count++;
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    function createBook (title, authorFirst, authorLast) {
        return {
            title: title,
            author: {
                firstName: authorFirst,
                lastName: authorLast
            }
        };
    }

    function showBookInfo(bookObject, bookNumber){
        console.log("Book # " + (bookNumber + 1));
        console.log("Title: " + bookObject.title);
        console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName);
        console.log("---");
    }

    books.push(createBook("Traction", "Gino", "Whitman"));

    books.forEach(function(book, count){
        showBookInfo(book, count);
    })


})();