const destination = prompt('Insert your trip destination');
let days = prompt('Insert the days of your trip');
let budget = prompt('Insert the budget of your trip');

function isBudgetEnough() {
  if (budget / days < 200) {
    console.log(
      "Not enough budget for the trip, it's advised to increase the budget"
    );
  } else {
    console.log('Your budget is above the recommended, enjoy your trip!');
  }
}

console.log();
isBudgetEnough();
