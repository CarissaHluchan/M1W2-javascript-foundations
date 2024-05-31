function createCustomer(name, bill = 0, bookings = []) {
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings
  }
  return customer;
}

function greeting(customer) {
  if (customer.bookings.length) {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
  return `${customer.name}! Welcome to Happy Spa`
}

function createService(name, cost) {
  var service = {
    name: name,
    cost: cost,
  }
  if (!name && !cost) {
    return 'Please provide service name and cost.'
  }
  return service;
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
}

function applyGiftCard(allServices, giftcard) {
  var affordableServies = [];
  for (var i = 0; i < allServices.length; i++) {
    if (allServices[i].price <= giftcard) {
      affordableServies.push(allServices[i].name);
    }
  }
  return affordableServies;
}
/**
 * [
  { name: 'sauna', price: 10 },
  { name: 'massage', price: 50 },
  { name: 'facial', price: 50 },
  { name: 'foot massage', price: 65 },
  { name: 'acupuncture', price: 50 },
  { name: 'steam room', price: 10 }
]
 */

module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices,
  applyGiftCard
}
