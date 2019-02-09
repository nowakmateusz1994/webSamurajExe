// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}

const reusltNumbers = document.querySelectorAll('.panel-right span');

const optionsResults = document.querySelectorAll('.panel-left span');

const hands = document.querySelectorAll('.select img');

// wybór gracza 

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 15px 1px lime'
}

//computerChoice

function aiChoice() {
    return aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
}


// określenie zwycięzcy 
function checkResult(player, ai) {
    if (player === ai) {
        gameSummary.draws++;
        reusltNumbers[3].textContent = gameSummary.draws;
        optionsResults[2].textContent = 'REMIS';
    } else if ((player === 'kamień' && ai === 'nożyczki') || (player === 'papier' && ai === 'kamień') || (player === 'nożyczki' && ai === 'papier')) {
        gameSummary.wins++;
        reusltNumbers[1].textContent = gameSummary.wins;
        optionsResults[2].textContent = 'Gracz';
    } else {
        gameSummary.losses++;
        reusltNumbers[2].textContent = gameSummary.losses;
        optionsResults[2].textContent = 'KOMPUTER';
    }
}

// funkcja sterująca

function startGame() {
    if (!game.playerHand) return alert('wybierz dłoń');

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    gameSummary.numbers++;
    reusltNumbers[0].textContent = gameSummary.numbers;
    hands.forEach(hand => hand.style.boxShadow = '');
    optionsResults[0].textContent = game.playerHand;
    optionsResults[1].textContent = game.aiHand;
}




hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);