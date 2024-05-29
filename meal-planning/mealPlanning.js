function createMeal(type, calorieGoal) {
    var meal = {
        type: type,
        calorieGoal: calorieGoal,
        dishes: [],
    }
    return meal;
}

function addDish(meal, dish) {
    if (meal.calorieGoal >= dish.calories) {
        meal.calorieGoal -= dish.calories;
        meal.dishes.push(dish);
    }
    // check if the calorie Goal is greater than or equal to the dishes calories
    // subtract the meals calories from the calorie goal
    // put thte meal in the dishes array
    return meal;
}

function calculateCalories(meal) {
    // console.log(meal);
    var totalCalories = 0;
    for (var i = 0; i < meal.dishes.length; i ++) {
    totalCalories += meal.dishes[i].calories
    }
    return `${meal.type} has a total of ${totalCalories} calories.`
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories,
}