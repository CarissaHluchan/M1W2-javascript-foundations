
function createMaterial(name, unit, price) {
  return {
    name: name,
    unit: unit,
    costPerUnit: price,
  }
  // what does it take in -
  // does it return anything - a object
  // what is it's purpose -
}

// PROCESS
// predicting the error and line number
// taking it one step at a time
// running the test 2-5 times
// really focused on what my function is supposed to be doing
// console log parameters if you are confused about their values; make a commented note to yourself about what those params hold
// copy/paste long strings/function names to avoid typos

function calculateMaterialCost(materialDetails, quantity) {
  // console.log('1', param1);
  // console.log('2', param2);
  // detail is a hit that it is an object
  // materialDetails = { name: 'fabric', unit: 'yard', costPerUnit: 12.5 }
  // quantity = 4
  var cost = quantity * materialDetails.costPerUnit;
  return `${quantity} ${materialDetails.unit}s of ${materialDetails.name} costs $${cost}.`
}

function createSupplyCloset(supplies) {
  var namesOnly = [];
  // loop through supplies array and for earch supplly, 
  //grab just the name and put theat name in a new array
  // console.log(supplies)
  // supplies = [
  // { name: 'fabric', uint:'yard, costPerUnit: 12.5}
  // { name: 'paint', unit: 'pain', costPerUnit: 3.95 }
  //  { name: 'yard', unit: 'skein', costPerUnit: 6.99 }
  //  ]
  // should be ["fabric", "paint", "yard"]
  for (var i = 0; i < supplies.length; i++) {
    namesOnly.push(supplies[i].name)
  }
  return { supplies: namesOnly };/*and array*/
}



// what does it take in -
// does it return anything - 
// what is it's purpose -


module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}