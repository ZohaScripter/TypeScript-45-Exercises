"use strict";
let username = ['Admin', 'Fawad', 'Moiz', 'Areeb', 'Ali'];
for (let i = 0; i < username.length; i++) {
    if (username[i] === "Admin") {
        console.log("Hello Admin, would you like to see a ststus report?");
    }
    else {
        console.log(`\nHello ${username[i]},thank you for logging in again.`);
    }
}
