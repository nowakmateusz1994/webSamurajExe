// http://websamuraj.pl/examples/js/projekt11/
const start = document.querySelector('button.main');
const reset = document.querySelector('button.reset');
const showTime = document.querySelector('.time div');
let time = 0;
let activ = false;
let index;

const timeStart = () => {
    if (!activ) {
        activ = !activ;
        start.textContent = 'Pauza';
        index = setInterval(timeActiv, 10);
    } else {
        activ = !activ;
        start.textContent = 'Start';
        clearInterval(index);
    }
};

const timeActiv = () => {
    time++;
    showTime.textContent = (time / 100).toFixed(2);
}


const timeReset = () => {
    clearInterval(index);
    showTime.textContent = '---'
    time = 0;
    activ = false;
    start.textContent = 'Start';
}



start.addEventListener('click', timeStart);
reset.addEventListener('click', timeReset);