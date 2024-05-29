function createVampire(name, pet = 'bat') {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.ouncesDrank >= 50) {
    return `No thanks, I am too full.`
  } else 
  {return `I WANT TO SUCK YOUR BLOOD!`}
}

function drink(vampire) {
  vampire.ouncesDrank += 10;
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
    vampire.ouncesDrank = 50;
  }
  return vampire;
}

function inquirePlace(locations, newLocation) {
  for (var i = 0; i < locations.length; i++) {
  if (locations[i] === newLocation) {
    return `Yes, I have spent some time in ${locations[i]}.`
    }
  } 
  return `No, I have never been to ${newLocation}.`
}

function findBatLovers(vampires) {
  batLovers = [];
    for (var i = 0; i < vampires.length; i ++) {
      if (vampires[i].pet === 'bat') {
        batLovers.push(vampires[i].name);
      }
    }
  return batLovers;
}


module.exports = {
  createVampire,
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace,
}