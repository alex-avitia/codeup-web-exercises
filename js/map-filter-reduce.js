"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let moreThanThreeLanguages = users.filter(function(user){
    let arrLength = user.languages.length;
    return arrLength > 2;
})

console.log(moreThanThreeLanguages);


// TODO: Use .map to create an array of strings where each element is a user's email address

let allEmails = users.map(function(email){
    return email.email;
});

console.log(allEmails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalExperience = users.reduce(function(total, years){
    return (total + years.yearsOfExperience) / users.length;
}, 0);

console.log(totalExperience);

// TODO: Use .reduce to get the longest email from the list of users.


let strLengthObj = allEmails.reduce(function(object, element){
    object[element] = element.length;
    return object;
    }, {})

let keys = Object.keys(strLengthObj);
let max = strLengthObj[keys[0]];
let value;

for (let i = 0; i < keys.length; i++) {
    value = strLengthObj[keys[i]];
    if (value > max) max = value;
}

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
