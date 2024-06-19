// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')
  
  let lesson = prompt('How many lessons do you have left today?')
  hour = 60
  second = 60

  result = lesson * hour * second

  alert("That's " + result + ' seconds😆')
}
