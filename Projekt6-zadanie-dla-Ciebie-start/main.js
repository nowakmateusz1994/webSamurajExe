const add = document.querySelector('.add');
const remove = document.querySelector('.clean');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

let options = ['walcz', 'przemyś to jeszcze raz'];

add.addEventListener('click', (e) => {
    e.preventDefault();
    const newOption = input.value;

    if (input.value.length) {
        for (option of options) {
            if (option === newOption) {
                input.value = '';
                return
            }
        }
        options.push(newOption);
        input.value = '';
    }
})

remove.addEventListener('click', (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = ""
})

showAdvice.addEventListener('click', () => {
    let index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
})

showOptions.addEventListener('click', () => {
    h1.textContent = options;
})