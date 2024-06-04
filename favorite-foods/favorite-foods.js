function createFavoriteFood(dish) {
    var favoriteFood = {
        name: dish.dish,
        ingredients: dish.ingredients,
        isSpicy: dish.isSpicy,
        timesOrdered: 0,
    }
    return favoriteFood;
}

function commentOnSpiciness(favoriteFood) {
    if (favoriteFood.isSpicy) {
        return `Wow, this ${favoriteFood.name} is so spicy!`
    } else {
        return `Phew, this ${favoriteFood.name} is not very spicy.`
    }
}

function orderFood(dish) {
    dish.timesOrdered += 1
    return dish;
}

function createShoppingList(dish) {
    var shoppingList = [];
    for (var i = 0; i < dish.length; i++) {
        if (dish[i].ingredients.length) {
            shoppingList = shoppingList.concat(dish[i].ingredients)
        }
    }
    return shoppingList;
}
/**The concat() method of Array instances is used to merge two or 
 * more arrays. This method does not change the existing arrays,
 * but instead returns a new array. */

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList,
};