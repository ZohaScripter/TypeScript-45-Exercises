let favPlaces : string[] = ["Makkah", "Madina", "Disneyland", "Niagrafalls", "Canada"];
console.log("original   "+favPlaces+"\n");

//[...  ] - make duplicate copy of original array
//.sort() - arranage array in alphabetical order
//console.log("__"+[name of array]) - concatenation method
//+"\n" - to give space b/w lines
console.log("alphabetical order   "+[...favPlaces].sort()+"\n");

console.log("original order   " + favPlaces + "\n");

//.reverse - used for reverse alphabetical order
console.log("reverse order   "+[...favPlaces].sort().reverse()+"\n");

console.log("original order   "+ favPlaces+"\n");

console.log("reverse order along with reverse of original one   "+ favPlaces.reverse()+"\n");

console.log("reverse order again   " + favPlaces.reverse()+"\n");

console.log("alphabetical order   "+favPlaces.sort()+"\n");

console.log("alphabetical reverse order   "+favPlaces.sort().reverse());


