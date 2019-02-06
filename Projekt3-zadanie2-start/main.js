let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Dodaj 10 elementów';
    document.body.appendChild(btn);

    const btnClr = document.createElement('button');
    btnClr.textContent = 'Clear';
    document.body.appendChild(btnClr);

    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);
    btnClr.addEventListener('click', claerList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }
}

const claerList = () => {
    size = 10;
    orderElement = 1;
    document.querySelector('ul').textContent = '';
}

init()