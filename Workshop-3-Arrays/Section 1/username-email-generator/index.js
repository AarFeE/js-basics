let usersList = [{ "Andres Jimenez": "andjim@myDomain.com" }, { "Andres Jimenez1": "andjim1@myDomain.com" }]
let userName = prompt("Insert your name and last name:")
let user = userName
user = user.toLowerCase()
user = user.split(" ")
for (i in user) {
  user[i] = user[i].slice(0, 3)
}
user = user.join('')
let cont = 1
for (i in usersList) {
  if (Object.keys(usersList[i]).includes(userName)) {
    userName += cont
    user += cont
    cont += 1
  }
}

let email = user + "@myDomain.com"
newUser = { [userName]: email }
usersList.push(newUser)

console.log(usersList)