//function with rest parameter
function makeSandwich(...ingredients: string[]){
    console.log("\nPreparing our sandwich with the following ingredients:\n");
    ingredients.forEach(eachIngredient => console.log(eachIngredient)
    )
}

makeSandwich("Bread","Chicken Spread")
makeSandwich("Bread","Chicken","mayo","lettuce")
makeSandwich("Bread","Cheese","Tomato","Ketchup","Chicken","Mushrooms")