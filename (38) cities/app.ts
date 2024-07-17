function describe_city (country: string = "Pakistan", city:string){
console.log(`${city} is in ${country}`);
}
describe_city(undefined, "Karachi")
describe_city(undefined,"Lahore")
describe_city("Japan","Tokyo")