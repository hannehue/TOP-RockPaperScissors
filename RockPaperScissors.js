function computerPlay(){
    let decidingNumber = Math.floor(Math.random() * 3)

    switch (decidingNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}



function evaluateWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'draw'
    } else if (playerSelection === 'rock') {

        if (computerSelection === 'paper'){
            return 'lose'
        } else if (computerSelection === 'scissors'){
            return 'win'
        }

    } else if (playerSelection === 'paper') {

        if (computerSelection === 'rock'){
            return 'win'
        } else if (computerSelection === 'scissors'){
            return 'lose'
        }

    } else if (playerSelection === 'scissors') {

        if (computerSelection === 'paper'){
            return 'win'
        } else if (computerSelection === 'rock'){
            return 'lose'
        }

    } else {
        return 'Invalid input. Please input either "rock", "paper" or "scissors"'
    }
}



function playRound (playerSelection, computerSelection){
    winLoseOrDraw = evaluateWinner(playerSelection, computerSelection);
    if (winLoseOrDraw === 'win'){
        printGameResult(winLoseOrDraw, playerSelection, computerSelection);
    } else if (winLoseOrDraw === 'lose'){
        printGameResult(winLoseOrDraw, computerSelection, playerSelection);
    } else {
        printGameResult(winLoseOrDraw);
    }
}



function printGameResult(winLoseOrDraw ,winnerChoice, loserChoice){
    document.querySelector('.game-result').textContent = (winLoseOrDraw === 'draw') ? `Draw! Play again` : `You ${winLoseOrDraw}! ${winnerChoice} beats ${loserChoice}`;
}




const gameButtons = document.querySelectorAll('.game-btn');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase(), computerPlay());
    })
})


game();