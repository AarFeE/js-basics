weather = confirm("Click 'OK' if the weather is good, or 'Cancel' if it isn't")
space = confirm("Click 'OK' if u have extra space in your bag, or 'Cancel' if you don't")

if (weather == false && space == false) {
  console.log("Take the umbrella with you")
} else if (weather == false && space == true) {
  console.log("Take the umbrella with you and another item like your camera")
} else if (weather == true && space == false) {
  console.log("You can carry an item, like your camera")
} else if (weather == true && space == true) {
  console.log("You can carry two items, like your camera an the umbrella in case it rains later")
}