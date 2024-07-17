import { log } from "console";
//for loop:

 let dinner_guests:string[] = ["Maham", "Yusra", "Tashmir", "Nushma"]; 

 for (let e=0 ; e < dinner_guests.length ; e++){
     console.log(`Dear ${dinner_guests[e]}: \n you are invited to dinner \n`);
}

//while loop:

let guests:string[] = ["Ahmed", "Ali", "Saad", "Ibad"];

let a=0;
while( a < guests.length){
    console.log(`Dear ${guests[a]}: \n you are invited to dinner \n`);
    a++
}

