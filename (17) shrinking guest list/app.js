"use strict";
let dinner_guests = ["Yusra", "Tashmir", "Nushma"];
console.log("\nAnd here is the good news! We've found a bigger dinner table & our new guests will be:\n");
dinner_guests.unshift("Bisma");
dinner_guests.splice(3, 0, "Abeeha");
dinner_guests.push("Fatima");
for (let i = 0; i < dinner_guests.length; i++) {
    console.log(`Dear ${dinner_guests[i]}: \n You are invited to our dinner! \n`);
}
console.log("Unfortunately due to some reasons our new dinner table won't arrive, so we can only invite two people! \n");
//let dinner_guests0:string[] = ["Yusra", "Tashmir", "Nushma", "Maham", "Mahnoor", "Kainat"]; 
// dinner_guests.pop();
// console.log(dinner_guests0);
// console.log(`sorry miss ${dinner_guests0.pop()} we can't invite you!`);
console.log(dinner_guests);
while (dinner_guests.length > 2) {
    let notinvited = dinner_guests.pop();
    console.log(`sorry miss ${notinvited} we can't invite you!\n`);
}
//loop will continue until it reaches ythe length of greater than 2 and then it ends
for (let i = 0; i < dinner_guests.length; i++) {
    console.log(`Dear ${dinner_guests[i]}: \n You are still invited to our dinner! \n`);
}
dinner_guests.pop();
dinner_guests.pop();
console.log(dinner_guests);
