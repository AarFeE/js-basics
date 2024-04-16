let nrgLvl = checkNaN("Insert 0 if u have low energy levels at the moment, or another number otherwise: ")
let dayState = confirm("Click 'OK' if the state of the day is good, otherwise click 'Cancel': ")

console.log(nrgLvl, dayState)

if (nrgLvl == 0 || dayState == false) {
  console.log("You should take the day free at home and enjoy!")
} else {
  console.log("It's a good day to do some exercise!")
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