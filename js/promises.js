"use strict";

//function that takes username, applies to url string. Returns the date of the user's last commit/push.

function lastCommit(username) {
    let url = `https://api.github.com/users/${username}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});
    return githubResponse
        .then(response => response.json())
        .then(json => {
            let lastCommitDate = json.filter(event => event.type === "PushEvent")[0].created_at.slice(0, 10);
            console.log(`${username}'s last commit was on ` + lastCommitDate);
        })
        .catch(error => console.error(error))
}

lastCommit("alex-avitia");

//function to set a timer

    function wait(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
                reject(`Your request has failed.`);
            }, time);
        });
    }

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));