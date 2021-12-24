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
        } else if (computerSelection === 'scissors'){
            return 'lose'
        }

    } else {
        return 'Invalid input. Please input either "rock", "paper" or "scissors"'
    }
}



function playRound (playerSelection, computerSelection){
    winLoseOrDraw = evaluateWinner(playerSelection, computerSelection);
    if (winLoseOrDraw === 'win'){
        return printGameResult(winLoseOrDraw, playerSelection, computerSelection);
    } else if (winLoseOrDraw === 'lose'){
        return printGameResult(winLoseOrDraw, computerSelection, playerSelection);
    } else {
        return `Draw! Play again`;
    }
}



function printGameResult(winLoseOrDraw ,winnerChoice, loserChoice){
    return `You ${winLoseOrDraw}! ${winnerChoice} beats ${loserChoice}`;
}



function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt().toLocaleLowerCase();
        let computerSelection = computerPlay();
        console.log(`Player: ${playerSelection} / Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();