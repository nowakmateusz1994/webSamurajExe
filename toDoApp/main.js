const input = document.querySelector('form');
const list = document.querySelector('ul');
const listItem = document.getElementsByClassName('listItem');
const taskValue = document.querySelector('form input');
const span = document.querySelector('h1 span');
const seeker = document.querySelector('div input');


const addTask = (e) => {
    e.preventDefault();

    const task = taskValue.value;
    if (task === '') return;

    const newLi = document.createElement('li');
    newLi.textContent = task;
    newLi.classList.add('listItem');
    list.appendChild(newLi);
    taskValue.value = '';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'usuń';
    removeBtn.classList.add('remove');
    newLi.appendChild(removeBtn);
    span.textContent = listItem.length;

    removeBtn.addEventListener('click', removeTask);

}


const removeTask = (e) => {
    e.target.parentNode.remove();
    span.textContent = listItem.length;
}

const search = (e) => {
    const searchText = seeker.value.toLowerCase();
    let listArr = [...listItem];

    listArr.forEach(li => li.classList.add('hiden'));
    listArr = listArr.filter(li => li.textContent.toLocaleLowerCase().includes(searchText));
    listArr.forEach(li => li.classList.remove('hiden'));


}

input.addEventListener('submit', addTask);
seeker.addEventListener('input', search);