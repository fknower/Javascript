/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game.
- The player that rolls 2 sixes loses his entire score.

*/
var scores, roundScore, activePlayer, gamePlaying, prevRoll, targetNumber;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) { 
        // generates a random number from 1 - 6
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var roll = dice + dice2;
        // displays the dice result
        // assigns the dice image to a variable . is 
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        // shows the dice image
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';

        // resets the corresponding dice.png image that corrosponds to the dice number thrown
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        // Update the round score if the number is NOT a 1
        if ((dice !== 1) && (dice2 !== 1)) {
            //Add Score # select class
            if ((roll == 12) && (prevRoll == 12)) {
                roundScore = 0;
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                document.getElementById('current-' + activePlayer).textContent = roundScore;
                prevRoll = 0;
                nextPlayer();
            } 
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
            nextPlayer();
        }
        prevRoll = roll;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add current score to the players global score
        scores[activePlayer] += roundScore;
        // update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // check if the player has won the game
        if (scores[activePlayer] >= targetNumber){
            gamePlaying = false;
            document.getElementById('name-' + activePlayer).textContent = 'Player' + (activePlayer + 1) + ' WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

document.getElementById('Target').Enter.addEventListener('click', function () {
    targetNumber = document.getElementById('Target').TargetNum.value;    
});

 
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    prevRoll = 0;
    targetNumber = document.getElementById('Target').TargetNum.value;

    // Hides the dice pic
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    //Sets score to zero
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // resets score
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // highlights the current player panel
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}
