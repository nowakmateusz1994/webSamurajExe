// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2 tekst2', 'tekst3 tekst3 tekst3']
let letterIndex = 0;
let wordIndex = 0;

// Implementacja
const addLetter = () => {


    let word = txt[wordIndex];

    spanText.textContent += word[letterIndex];
    letterIndex++;

    if (letterIndex < word.length) {
        setTimeout(addLetter, 200);

    } else if (letterIndex >= word.length) {
        letterIndex = 0;
        wordIndex++;
        if (wordIndex >= txt.length) {
            wordIndex = 0;
        }
        setTimeout(function () {
            spanText.textContent = '';
            addLetter();
        }, 2000)

    }


};





addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);