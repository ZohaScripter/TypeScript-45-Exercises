"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//for loop:
let dinner_guests = ["Maham", "Yusra", "Tashmir", "Nushma"];
for (let e = 0; e < dinner_guests.length; e++) {
    console.log(`Dear ${dinner_guests[e]}: \n you are invited to dinner \n`);
}
//while loop:
let guests = ["Ahmed", "Ali", "Saad", "Ibad"];
let a = 0;
while (a < guests.length) {
    console.log(`Dear ${guests[a]}: \n you are invited to dinner \n`);
    a++;
}
