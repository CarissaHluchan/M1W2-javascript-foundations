function createMeal(name, specialRequests, tableNumber) {
  var meal = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false,
  }
  return meal;
}

function getMade(meal) {
  if (meal) {
    meal.complete = true;
  }
  return meal;
}

function announceMeal(meal) {
  if (meal.complete) {
    return `Order up - ${meal.name} for table 4!`
  }
  return `This ${meal.name} is not completed yet`
}

function createOrder(order) {
  var order = {
    tableNumber: order.name,
    meals: order.meals,
    completedMeals: [],
  }
  return order;
}

function cookMeal(order, meal) {
  // console.log(order)
  if (order.tableNumber === meal.tableNumber) {
    order.completedMeals.push(meal.name);
  }
  return order;
}

function listOrders(order) {
   var orderList = [];
   for (var i = 0; i < order.meals.length; i++) {
    orderList.push(order.meals[i].name)
   }
   return orderList;
}

function listSpecialRequests(order) {
// console.log(order.meals[0])
  var specialRequestsList = []
  for (var i = 0; i < order.meals.length; i++) {
    specialRequestsList = specialRequestsList.concat(order.meals[i].specialRequests)
  }
  return specialRequestsList;
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
