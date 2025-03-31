// Масив
let users = ['Sasha', 'Artem', 'Katya', 'Sasha', 'Artem', 'Katya']

console.log(users)

// Перший елемент масиву
console.log(users[0]);
// Останній елемент масиву
console.log(users[users.length - 1]);

// Додати в кінець
// .push()

users.push('New User')
console.log(users);

// Додати на початок
// .unshift()

users.unshift('User New')
console.log(users);

// Видалити останній елемент
// .pop()

users.pop()
console.log(users);

// Видалити перший елемент
// .shift()

users.shift()
console.log(users);

// Методи Масивів
// .map() - для того щоб перебирати масиви які вже є в коді
users.map(item => {
    console.log(item);
    
})


// .forEach() - для масивів на сторінці 
// let text = document.querySelectorAll('p')
// console.log(text);
// text.forEach(item => {
//     console.log(item);
    
// })
// let button = document.querySelectorAll('button')
// button.forEach(item => {
//     console.log(item);
//     item.onclick = () => {
//         console.log(`test`);
        
//     }
// });


// example

// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let del1 = document.querySelector('.del1');
// let out = document.querySelector('.out');

// let toDoList = [];

// function addToDoList() {
//     toDoList.map(item => {
//         out.innerHTML += `<li>${item}</li>`
//        })
// }

// btn1.onclick = () => {
//     out.innerHTML = ``
//    toDoList.push(inp1.value)
//    console.log(toDoList);
   
//    addToDoList(addToDoList)
// }
// del1.onclick = () => {
//     out.innerHTML = ``
//    toDoList.pop(inp1.value)
//    addToDoList()
// }

// let array2 = ['Apple', 'Sasha', 'Phone', 'Apple', 'Sasha', 'Phone', 'Apple', 'Sasha', 'Phone']

// array2.map((item, index) => {
//     if (item === 'Sasha') {
//         console.log(`Item: ${item}, Index: ${index}`);
//     }
    
// });
let out = document.querySelector('.out')
let device = [
    {
        brend: 'Apple',
        price: 1300,
        img: 'https://content1.rozetka.com.ua/goods/images/big_tile/221026603.jpg',
    },
    {
        brend: 'Samsung',
        price: 1000,
        img: 'https://content1.rozetka.com.ua/goods/images/big_tile/507062959.jpg',
    },
    {
        brend: 'Huawei',
        price: 900,
        img: 'https://content.rozetka.com.ua/goods/images/big_tile/472930568.jpg',
    },
]

device.map(item => {
    // console.log(`Brend: ${item.brend}, Price: ${item.price}`);
    out.innerHTML += `
    <div class="out">
      <div class="item">
      <button>BUY</button>
        <h3>${item.brend}</h3>
        <p>${item.price} USD</p>
        <img src="${item.img}" alt="phone">
        
      </div>
    </div>
    `
})

