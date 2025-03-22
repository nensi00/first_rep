// // змінна з можливостю перезапису
// let a = 2;

// // константа немає можливості змінити тип даних
// const b = 2;

// let num = 2;
// let str = 'Test';

// //alert(b)


// //console.log("Test");
// //document.querySelector(".out").innerHTML = "Test";

// // Математичні оператори (*, /, +, -)

// // Конкатинація 

// // let userName = 'Sasha';

// // console.log('Hello ' + userName);
// // console.log(2 + 2);
// // console.log(2 + '2');
// // console.log(2 + 2 - '2');

// // let a1 = 2;
// // let a2 = 2;
// // let res = a1 + a2;

// // console.log(res);

// // let p1 = +prompt("First");
// // let p2 = +prompt("Second");

// // console.log(p1 + p2);

// let p1 = prompt("First Name");
// let p2 = prompt("Last Name");
// let p3 = +prompt("Write UAH");

// console.log("Hello, " + p1 + " " + p2 +"."+" "+"Ви отримуєте:" + " " +p3/50 + "$" );

let btn = document.querySelector('.btn');
let inp1 = document.querySelector('.inp_1');
let inp2 = document.querySelector('.inp_2');
let calcOut = document.querySelector('.calc-out');


btn.onclick = () => {
    calcOut.innerHTML = +inp1.value + +inp2.value;
}