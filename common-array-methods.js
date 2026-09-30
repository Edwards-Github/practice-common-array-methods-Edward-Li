// Task 1: Create the Order System
let drinks = ["Latte", "Tea", "Espresso"];
let pastry = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and number of pastries
console.log("The number of drinks: " + drinks.length);
console.log("The number of pastries: " + pastry.length);

// Task 3: Access Orders Using Bracket Notation
console.log("Order 1: " + drinks[0] + " and " + pastry[0]);
console.log("Order 2: " + drinks[1] + " and " + pastry[1]);
console.log("Order 3: " + drinks[2] + " and " + pastry[2]);

// Task 4: Access Orders Dynamically with Variables
const index = 2;
console.log(
  `Access orders dynamically with variables: ${drinks[index]}, ${pastry[index]}`,
);

// Task 5: Write a loop that logs all the items in the drink category, ensuring the loop dynamically adjusts to the number of items using .length
for (let i = 0; i < drinks.length; i++) {
  console.log(`Drink ${i}: ${drinks[i]}`);
}

// Task 6: Add a New Order & Track Length
drinks.push("flat white");
console.log(`Updated drinks length: ${drinks.length}`);

let drinkOrder = drinks[3];
let pastryOrder = pastry[0];
console.log(`drink order: ${drinkOrder} pastry order: ${pastryOrder}`);
