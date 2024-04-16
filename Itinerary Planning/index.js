const threshold = 1000
initialBudget = checkNaN("Insert the budget for your trip: ")
expectedExpenses = checkNaN("Insert the expectedExpenses: ")

if ((initialBudget - expectedExpenses) < threshold) {
  console.log("The inserted budget isn't enough to reach the threshold, it's recommended to cut some expenses")
} else {
  console.log("The inserted budget is enough to buy the article, congratulations!")
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