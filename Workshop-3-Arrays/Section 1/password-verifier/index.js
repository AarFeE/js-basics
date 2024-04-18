const regExChar = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
const regExAlphabet = /[a-zA-Z]/
const regExNumeric = /[0-9]/
const regExLength = /.{8,}/
let message = ""

let userPassword = prompt("Insert the password to be evaluated:")

if (regExChar.test(userPassword)) {
  message += "✅ The password contains at least one special character"
} else {
  message += "❌ The password doesn't contain at least one special character"
}

if (regExAlphabet.test(userPassword)) {
  message += "\n✅ The password contains at least one letter"
} else {
  message += "\n❌ The password doesn't contain at least one letter"
}

if (regExNumeric.test(userPassword)) {
  message += "\n✅ The password contains at least one number"
} else {
  message += "\n❌ The password doesn't contain at least one number"
}

if (regExLength.test(userPassword)) {
  message += "\n✅ The password contains at least 8 characters"
} else {
  message += "\n❌ The password doesn't contain at least 8 characters"
}

alert(message)