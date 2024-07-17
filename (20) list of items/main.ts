import { log } from "console";

let countries : string []= ["Pakistan", "Ireland", "Italy", "Canada", "Neitherland", "Thailand"];

console.log("\nlist of countries");

for (let k = 0; k < countries.length; k++){
    console.log(countries[k]);
}

const Medicines : string [] = ["Paracetamol", "Atenolol", "Levetiracetam", "Ciprofloxacin"];

console.log("\nMedications list:");

let m = 0
while (m < Medicines.length){
    console.log(Medicines[m]);
    m++
}
