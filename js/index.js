const form = document.getElementById('form');

form.addEventListener('submit', handlesubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max:10,
    attemptnum: 0,
    numberDrawn: function random(){
        return Math.round(Math.random() * this.max)
    }
};

let numberDrawn = Guess.numberDrawn(); 

function updateAttempt (attempt, value) {
    attempt.innerHTML = 'Tentativa : ' + value
};

function handlesubmit (e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite um valor valido')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptnum);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabens,cria. Vc acertou';
        status.style.color = '#fff'
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        result.style.color = '#fff';
        clear();
    }
    else if (numberDrawn > kick) {
        status.innerHTML = 'O numero eh maior';
        status.style.color ='#de4251' ;
        updateAttempt();
        clear()
    }
    else if (numberDrawn < kick) {
        status.innerHTML = 'O numero eh menor';
        status.style.color ='#de4251' ;
        updateAttempt();
        clear()
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart () {
    document.location.reload(true);
};

function clear () {
    document.getElementById('kick'). value = '';
};