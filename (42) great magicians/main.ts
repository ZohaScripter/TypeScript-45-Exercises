function show_magicians(magicians: string[]){
    magicians.forEach(names => console.log(names));
}

//.map modifies an existing array and we need to put return here
function make_great(magicians: string[]){
   return magicians.map(names => `The Great ${names}`)
}

let magicians_names = ["Henry", "David", "John", "Robert"]

//calling make_great function and then making it a variable
let great_magicians = make_great(magicians_names)

//calling show_magicians function to print modified names of magicians
show_magicians(great_magicians)