const pizzaToppings = [
  "pepperoni",
  "sausage",
  "pineapple",
  "mushrooms",
  "olives"
];
function greetCustomer() {
  let greeting = `Welcome to Pizza House, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping} `;
  }
  console.log(greeting);
}
greetCustomer();
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping} `;
  }
  console.log(`${order}. Coming up.`);
  return [size, crust, toppings];
}
let customerOrder = getPizzaOrder(
  "Large",
  "Sourdough",
  "pepperoni",
  "sausage",
  "pineapple",
  "mushrooms",
  "olives"
);
function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...Pizza Cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
let cookPizza = preparePizza(customerOrder);
function servePizza(pizza) {
  let orderMessage = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderMessage += `${topping} `;
  }
  console.log(`${orderMessage}. Enjoy!`);
  return pizza;
}
servePizza(cookPizza);
