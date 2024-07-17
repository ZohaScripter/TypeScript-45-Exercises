function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    return magicians.map(function (names) { return "The Great ".concat(names); });
}
var magicians_names = ["Henry", "David", "John", "Robert"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
