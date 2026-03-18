const pizzaPlace = "Chelsie C's Pizza";
let numberOfToppings = 3;
console.log(pizzaPlace + " " + typeof pizzaPlace);
console.log(numberOfToppings + " " + typeof numberOfToppings);
console.log(
  `At ${pizzaPlace}, there are ${numberOfToppings} toppings to choose from, but it only takes 1 to change your life.`
);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
