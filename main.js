var homescore = 0
let homescoretotal =
document.getElementById("home-score")
console.log (homescoretotal)


function increaseHomeScoreOne() {
  homescore = homescore+1

  console.log (homescore)
  
  homescoretotal.textContent = homescore
}

function increaseHomeScoreTwo() {
  homescore = homescore+2

  console.log (homescore)
  
  homescoretotal.textContent = homescore
}

function increaseHomeScoreThre() {
  homescore = homescore + 3

  console.log(homescore)

  homescoretotal.textContent = homescore
}

// guestscore

var guestscore = 0
let guestscoretotal =
document.getElementById("guest-score")
console.log (guestscoretotal)

function increaseGuestScoreOne() {
  guestscore = guestscore +1
  console.log (guestscore)
  guestscoretotal.textContent = guestscore
}

function increaseGuestScoreTwo() {
  guestscore = guestscore +2
  console.log (guestscore)
  guestscoretotal.textContent = guestscore
}

function increaseGuestScoreThre() {
  guestscore = guestscore +3
  console.log(guestscore)
  guestscoretotal.textContent = guestscore
}