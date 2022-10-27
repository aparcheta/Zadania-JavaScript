let items = document.getElementById('items');
console.log(items);

let button = document.querySelector('button');
console.log(button);

const addItem  = () => {
    let li = document.createElement('li');
    li.innerText = 'Item' + (document.getElementsByClassName('item').length+1);
    li.classList.add('item');
    document.querySelector('ul').appendChild(li);

}

button.addEventListener('click', addItem);
    