
function createIngredient(name, price) {
    var ingredient = {
        name: name,
        price: price,
    }
    if (ingredient.name === undefined) {
        ingredient.name = 'unknown';
    }
    if (ingredient.price === undefined) {
        ingredient.price = 0.00;
    }
    return ingredient;
}

function createTaco(name, ingredient) {
    var taco = {
        name: name,
        ingredients: ingredient || [],
    }
    if (taco.name === undefined) {
        taco.name = 'custom';
    }
    // if (taco.ingredients === undefined) {
    //     taco.ingredients = [];
    // }
    return taco;
}

function addIngredientToTaco(taco, ingredient) {
    if (ingredient) {
        // if the ingredient is defined push (undefined is falsy)
        taco.ingredients.push(ingredient);
    };
    return taco;
}

function calculatePrice(taco) {
    var tacoPrice = 0;
    for (var i = 0; i < taco.ingredients.length; i++) {
        tacoPrice += taco.ingredients[i].price;
    }
    return tacoPrice;
    // { name: 'basic steak', ingredients: [ { name: 'steak', price: 3.5 } ] }
}
// calculate taco prins based on ingredients




// what does it take in -
// does it return anything -
// what is it's purpose -


module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice,
}
