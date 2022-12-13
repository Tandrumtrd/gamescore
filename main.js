Var homescore =0
let homescoretotal =
document.getElementById("home-score")
console.log (homescoretotal)


function increaseHomeScoreOne() {
  homescore = homescore+1

  console.log (homescore)
  
  homescoretotal.textContent = homescore 
}
