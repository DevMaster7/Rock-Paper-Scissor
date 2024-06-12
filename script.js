let a = document.getElementById("heading")
let b = document.getElementById("btn")
let con = confirm("Do You Want To Play Rock, Paper, Scissor?")
if (con) {
    game()
}
function game() {
    let draw = 0;
    let userWin = 0;
    let computerWin = 0;
    a.style.display = "flex"
    b.style.display = "none"
    let r = 0;
    while (r < 5) {
        r++
        function generateRandomWord() {
            var words = ['rock', 'paper', 'scissor'];
            var randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex];
        }
        var computerChoice = generateRandomWord();
        console.log(computerChoice);

        var userChoice = prompt("Round " + r + "\nRock, Paper, Scissor");
        if (computerChoice === userChoice) {
            alert("Computer Chose " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " And You Chose " + userChoice[0].toUpperCase() + userChoice.slice(1) + " The Round " + r + " is Draw")
            draw++
        }
        else if ((userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")) {
            alert("Computer Chose " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " And You Chose " + userChoice[0].toUpperCase() + userChoice.slice(1) + " You Won The Round " + r)
            userWin++
        }
        else if ((userChoice === "paper" && computerChoice === "scissor") ||
            (userChoice === "scissor" && computerChoice === "rock") ||
            (userChoice === "rock" && computerChoice === "paper")) {
            alert("Computer Chose " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " And You Chose " + userChoice[0].toUpperCase() + userChoice.slice(1) + " You Lose The Round " + r)
            computerWin++
        }
        else {
            alert("Enter Rock, Paper, Scissor Bruh")
            r--
        }
    }
    if (userWin > computerWin) {
        a.innerHTML = "You Won The Game🥳<br>Please Wait for 7 Seconds To Play Again"
        setTimeout(() => {
            a.style.display = "none";
            b.style.display = "flex";
        }, 7000);
    }
    else if (userWin == computerWin) {
        a.innerHTML = "Game is Draw😱<br>Please Wait for 7 Seconds To Play Again"
        setTimeout(() => {
            a.style.display = "none";
            b.style.display = "flex";
        }, 7000);
    }
    else if (computerWin > userWin) {
        a.innerHTML = "You Lose The Game😂<br>Please Wait for 7 Seconds To Play Again"
        setTimeout(() => {
            a.style.display = "none";
            b.style.display = "flex";
        }, 7000);
    }
}
b.addEventListener("click", function () {
    game()
})