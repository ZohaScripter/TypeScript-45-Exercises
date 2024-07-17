//function with rest parameter
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("\nPreparing our sandwich with the following ingredients:\n");
    ingredients.forEach(function (eachIngredient) { return console.log(eachIngredient); });
}
makeSandwich("bread", "Chicken Spread");
makeSandwich("Bread", "Chicken", "mayo", "lettuce");
makeSandwich("Bread", "Cheese", "Tomato", "Ketchup", "Chicken", "Mushrooms");
