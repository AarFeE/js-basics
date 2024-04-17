// const threshold = 1000
// initialBudget = checkNaN("Insert the budget for your trip: ")
// expectedExpenses = checkNaN("Insert the expectedExpenses: ")

// if ((initialBudget - expectedExpenses) < threshold) {
//   console.log("The inserted budget isn't enough to reach the threshold, it's recommended to cut some expenses")
// } else {
//   console.log("The inserted budget is enough to buy the article, congratulations!")
// }

// function checkNaN(text) {
//   while (true) {
//     value = Number(prompt(text))
//     if (isNaN(value)) {
//       console.log("Insert a number")
//     }
//     else {
//       break
//     }
//   }

//   return value
// }









document.getElementById('dest-submit').onclick = function () { setDestination() }

function setDestination() {
  // let destination = document.getElementById('destination').value
  // document.getElementById('h1').innerHTML = destination
  document.body.style.backgroundColor = generateRandomColor()
}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}





let dest = prompt("Insert the destination: ")
document.getElementById('h1').innerHTML = dest