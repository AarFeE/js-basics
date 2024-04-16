var initialBudget = checkNaN("Insert your budget")
var food = checkNaN("Insert your food expenses")
var book = checkNaN("Insert the cost of a book")

if ((food + book) <= initialBudget) {
  console.log("Your budget is enough to eat outside and buy at least one book")
} else if (food <= initialBudget) {
  console.log("Your budget is enough to eat outside")
} else if (book <= initialBudget) {
  console.log("Your budget is enough to buy a book")
} else {
  console.log("Your budget isn't enough to eat outside nor buy a book")
}

function checkNaN(text) {
  while (true) {
    value = Number(prompt(text))
    if (isNaN(value)) {
      console.log("Insert a number")
    }
    else {
      break
    }
  }

  return value
}