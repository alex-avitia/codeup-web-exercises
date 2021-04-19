"use strict";


function lastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token ' + githubToken}})
        .then(response => response.json())
        .then(json => {
            let lastCommitDate = json.filter(event => event.type === "PushEvent")[0].created_at.slice(0, 10);
            console.log(`${username}'s last commit was on ` + lastCommitDate);
        })
        .catch(error => console.error(error))
}

lastCommit("alex-avitia");

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

