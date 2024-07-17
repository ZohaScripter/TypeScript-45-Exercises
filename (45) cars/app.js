function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //making an object
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
var new_car = make_car("Honda", "Civic", "Color: Grey", "Year:2024");
console.log(new_car);
