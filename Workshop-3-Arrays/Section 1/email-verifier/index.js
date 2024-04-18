const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

let userEmail = prompt("Insert your email:")

if (regex.test(userEmail)) {
  alert("Your email is valid")
} else {
  alert("Your email isn't valid, please try again")
}