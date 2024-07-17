function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
//.map modifies an existing array and we need to put return here
function make_great(magicians) {
    return magicians.map(function (names) { return "The Great ".concat(names); });
}
var magicians_names = ["Henry", "David", "John", "Robert"];
//making a copy of array thru .slice
var copy_magicians_names = magicians_names.slice();
//modifying copied array by adding "the great" in it. First calling it then storing in a variable in order to print it
var magicians_2 = make_great(copy_magicians_names);
//printing both original and copied array
console.log("ORIGINAL ARRAY:");
show_magicians(magicians_names);
console.log("\nCOPIED ARRAY:");
show_magicians(magicians_2);
