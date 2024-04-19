let souvenirs = []
while (true) {
  let name = prompt("Insert the souvenirs' name:")
  let price
  while (true) {
    price = Number(prompt("Insert the souvenirs' price:"))
    if (isNaN(price)) {
      console.log("You didn't insert a number")
    }
    else {
      break
    }
  }

  let available = prompt("Insert (T) if the souvenirs' available, or anything else if it isn't:")
  if (available == "T") {
    available = true
  }
  else {
    available = false
  }
  souvenirs.push({ 'name': name, 'price': price, 'available': available })
  let cont = prompt("Insert (Y) to add a new souvenir, or (N) to finish")
  if (cont == "N") {
    break
  }
}

console.log(souvenirs)