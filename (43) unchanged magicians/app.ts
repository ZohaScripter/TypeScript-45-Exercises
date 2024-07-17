function show_magicians(magicians: string[]){
    magicians.forEach(names => console.log(names));
}

//.map modifies an existing array and we need to put return here
function make_great(magicians: string[]){
   return magicians.map(names => `The Great ${names}`)
}

let magicians_names = ["Henry", "David", "John", "Robert"]

//making a copy of array thru .slice
let copy_magicians_names = magicians_names.slice();

//modifying copied array by adding "the great" in it. First calling it then storing in a variable in order to print it
let magicians_2 = make_great(copy_magicians_names)

//printing both original and copied array
console.log("ORIGINAL ARRAY:");
show_magicians(magicians_names)

console.log("\nCOPIED ARRAY:");
show_magicians(magicians_2)


