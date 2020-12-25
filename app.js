/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 25 points on GLOBAL score wins the game

*/

var score, activePlayer, roundScore, game;

initial();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (document.getElementById('player-0-name').value === '' ||
        document.getElementById('player-1-name').value === '') {
        alert("PLease Enter your names");
    }
    else {
        if (game) {
            var dice = Math.floor(6 * Math.random()) + 1;
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            document.querySelector('.dice').style.display = 'block';
            if (dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else {
                nextPlayer();
            }
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (document.getElementById('player-0-name').value === '' ||
        document.getElementById('player-1-name').value === '') {
        alert("PLease Enter your names");
    }
    else {
        if (game) {
            score[activePlayer] += roundScore;
            document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
            if (score[activePlayer] >= 25) {
                winner();
                game = false;
            }
            else{
                nextPlayer();
            }
        }
    }
});


document.querySelector('.btn-new').addEventListener('click', function () {
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('#name-' + activePlayer).textContent = 'PLAYER ' + (activePlayer + 1);
    document.querySelector('.player-' + 0 + '-panel').classList.add('active');
    initial();

});


function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function winner() {
    document.querySelector('#name-' + activePlayer).textContent = document.getElementById('player-' + activePlayer + '-name').value + ' is the Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}


function initial() {
    score = [0, 0];
    activePlayer = 0;  // 0 represents player 1
    roundScore = 0;
    game = true;
    nameSe = false;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0 , #current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
}

document.querySelector('.btn-name').addEventListener('click', function () {
    if (document.getElementById('player-0-name').value === '' ||
        document.getElementById('player-1-name').value === '') {
        alert("PLease Enter your names");
    }
    else {
    document.querySelector('#name-' + 0).textContent = document.getElementById('player-0-name').value;
    document.querySelector('#name-' + 1).textContent = document.getElementById('player-1-name').value;
    document.querySelector('#player-0-name').style.display = 'none';
    document.querySelector('#player-1-name').style.display = 'none';
    document.querySelector('.btn-name').style.display = 'none';
    }
});

