let dinner_guests:string[] = ["Maham", "Yusra", "Tashmir", "Nushma"]; 

// for (let e=0 ; e < dinner_guests.length ; e++){
//     console.log(`Dear ${dinner_guests[e]}: \n you are invited to dinner \n`);
// }
// console.log(`Due to some reason ${dinner_guests[3]} is unable to came to the dinner`);

dinner_guests[3] = "Kainat";

console.log("\nNew list of Guests: \n");

for (let n=0 ; n < dinner_guests.length ; n++){
    console.log(`Dear ${dinner_guests[n]}: \n you are invited to dinner \n`);
}

console.log("\nAnd here is the good news! We've found a bigger dinner table & our new guests will be:\n");

dinner_guests.unshift("Bisma");
dinner_guests.splice(3,0,"Abeeha");
dinner_guests.push("Fatima");

for(let i=0; i<dinner_guests.length; i++){
    console.log(`Dear ${dinner_guests[i]}: \n You are invited to our dinner! \n`);
}


