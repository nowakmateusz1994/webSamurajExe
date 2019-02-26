const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('form input');
const seeker = document.querySelector('input.lookFor');
const listItem = document.getElementsByTagName('li');

const remove = (e) => {
    e.target.parentNode.remove();
}

const addTask = (e) => {
    e.preventDefault();

    if (input.value != '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = input.value + ' ';
        const del = document.createElement('button');
        del.textContent = 'X';
        li.appendChild(del);
        li.appendChild(p);
        list.appendChild(li);
        input.value = '';

        del.addEventListener('click', remove)
    }
}

const lookFor = () => {
    const searchItem = seeker.value.toLowerCase();
    let liArr = [...listItem];

    liArr.forEach(li => li.classList.add('hiden'));

    liArr = liArr.filter(li => li.textContent.toLowerCase().includes(searchItem));
    liArr.forEach(li => li.classList.remove('hiden'))
}

form.addEventListener('submit', addTask);
seeker.addEventListener('input', lookFor);