let themeSong = document.querySelector("audio")
let main = document.querySelector("main")
let team = document.querySelector(".team")


// function playTheme(){
//     themeSong.play()    
// }

main.addEventListener("click", (e) => {
    team.style.display = "block"
    if(e.target.className === "yellow") {
        team.innerHTML = `EQUIPE JOHN PEACE`
        team.style.backgroundColor = "gold"
    } else if(e.target.className === "red") {
        team.innerHTML = `EQUIPE RED FRED REDEMPTION`
        team.style.backgroundColor = "red"
    }
})