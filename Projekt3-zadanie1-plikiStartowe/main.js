// tutaj rozwiązanie
const btn = document.querySelector('button');
const liTab = document.querySelectorAll('li');
let size = 10;


btn.addEventListener('click', function () {
    let i;
    for (i = 0; i < liTab.length; i++) {
        if (liTab[i].style.display === '') {
            liTab[i].style.display = 'block';
            liTab[i].style.fontSize = size + 'px';
        } else {
            liTab[i].style.fontSize = size + 'px';
        }

    }
    size += 5;
})