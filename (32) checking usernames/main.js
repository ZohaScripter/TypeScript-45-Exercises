"use strict";
let current_users = ["sana", "SARA", "fatima", "ALI", "zohaib"];
let new_users = ["aliza", "wajiha", "sara", "haris", "ali"];
//loop through new_users to check for usernames avalability
new_users.forEach(new_one_user => {
    //making a condition for username that already existvand save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase());
    //print diff msgs using Ig-Else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`The username ${new_one_user} is available`);
    }
});
