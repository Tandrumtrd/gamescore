
let homescore =0
document.getElementById("home-score").innerText = homescore
console.log (homescore)


function increaseHomeScoreOne() {
  homescore = homescore+1

  console.log (homescore)
  
  homescore.textContent = homescore 
}