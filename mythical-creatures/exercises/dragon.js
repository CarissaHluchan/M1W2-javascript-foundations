function createDragon (dragonName, dragonRider, dragonTemperment) {
  var dragon = {
    name: dragonName,
    rider: dragonRider,
    temperment: dragonTemperment,
    timesEaten: 0,
    hungry: true,
  }
  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false;
  }
// what does it take in - dragon object
// does it return anything - a dragon object
// what is it's purpose - times eatten incrament up
// checks hungry key and at 3 updates hungry is false
return dragon;
}

function findFireBreathers(arrOfDragons) {
  // console.log('Array of Dragons', arrOfDragons)
  var fireBreathers = [];
  for (var i = 0; i < arrOfDragons.length; i++) {
    if (arrOfDragons[i].temperment === "aggressive") {
      fireBreathers.push(arrOfDragons[i]);
    }
  };
// what does it take in - an array of dragon objects
// does it return anything - an array of dragon objects
// what is it's purpose - find all dragons that are aggressive 
// assign them firebreathers return an array of all the firebreathers
return fireBreathers;
}

// what does it take in
// does it return anything
// what is it's purpose

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}