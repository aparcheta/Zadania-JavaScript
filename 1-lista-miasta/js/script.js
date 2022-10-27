let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let list = document.createElement('ol');

cities.forEach(city => {
    let li = document.createElement('li');
    li.className = 'city';
    li.innerText = city;
    list.appendChild(li);
});

document.body.appendChild(list);