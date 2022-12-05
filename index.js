let homeScore = 0
let guestScore = 0
function aplusone () {
    let score1 = document.getElementById("homeScore")
    homeScore += 1
    score1.innerText = homeScore
    highlighter(homeScore,guestScore)
}
function aplustwo () {
    let score1 = document.getElementById("homeScore")
    homeScore += 2
    score1.innerText = homeScore
    highlighter(homeScore,guestScore)

}
function aplusthree () {
    let score1 = document.getElementById("homeScore")
    homeScore += 3
    score1.innerText = homeScore
    highlighter(homeScore,guestScore)

}
function bplusone () {
    let score2 = document.getElementById("guestScore")
    guestScore += 1
    score2.innerText = guestScore
    highlighter(homeScore,guestScore)

}
function bplustwo () {
    let score2 = document.getElementById("guestScore")
    guestScore += 2
    score2.innerText = guestScore
    highlighter(homeScore,guestScore)

}
function bplusthree () {
    let score2 = document.getElementById("guestScore")
    guestScore += 3
    score2.innerText = guestScore
    highlighter(homeScore,guestScore)

}
function newGame () {
    let score1 = document.getElementById("homeScore")
    let score2 = document.getElementById("guestScore")
    homeScore = 0
    guestScore = 0
    score1.innerText = 0
    score2.innerText = 0
}
function highlighter (a,b) {
    let score1 = document.getElementById("homeScore")
    let score2 = document.getElementById("guestScore")
    if (a > b) {
        score1.style.background = "white";
        score2.style.background = "#080001"

    }
    else if (a < b) {
        score1.style.background = "#080001";
        score2.style.background = "white"
    }else {
        score1.style.background = "#080001";
        score2.style.background = "#080001"
    }
}
 