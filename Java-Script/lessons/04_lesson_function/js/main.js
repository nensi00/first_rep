// let btn = document.querySelector('.btn')
// let link = document.querySelector('.link')

// btn.onclick = () => {
//    addBox()
// }
// link.onclick = () => {
//     addBox1()
//  }
// function addBox() {
//     document.querySelector('section').innerHTML = 
//     `
//      <div class="box"> 
//         <img src="" alt="">
//         <h2>Test btn</h2>
//         <p>Lorem, ipsum.</p>
//     </div>
//     `
// }
// function addBox1() {
//     document.querySelector('section').innerHTML = 
//     `
//      <div class="box"> 
//         <img src="" alt="">
//         <h2>Test</h2>
//         <p>Lorem, ipsum.</p>
//     </div>
//     `
// }
// function calcPlus(num1, num2) {
//     document.querySelector('section').innerHTML = `${num1+num2}`
// }
// calcPlus(8, 25)


// let num = 2;

// function exempleReturn() {
//     return 2
// }
// console.log(exempleReturn());

// function mal() {
//     let num3 = +prompt();
//     let num4 = +prompt();

//     document.querySelector('.out').innerHTML = ` ${num3 * num4}`
    
// }
// mal()
// let inp = parseFloat(document.querySelector('.inp').value);
// let link = document.querySelector('.link');

// function testAge(age) {
//     let checkAge = 2025 - age
//     if (checkAge > 18) {
//         return `Good`
//     } return `Nooo`
// }
// console.log(testAge(2010))
// function userInfo(name , age) {
//     return `Hello ${name} Вам ${testAge(age)}`
// }
// console.log(userInfo(`Sasha`, 1995));
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let select = document.querySelector('.select');
let btn = document.querySelector('.btn');
let out = document.querySelector('.out');

btn.onclick = () => {
    console.log(select.value);
    if (select.value === "+") {
        plus(inp1.value, inp2.value) 
    } else if (select.value === "-") {
        minus(inp1.value, inp2.value) 
    } else if (select.value === "*") {
        multi(inp1.value, inp2.value)   
    } else {
        console.log(out.innerHTML = `error`)
    }
    
}

function plus(num, num2) {
    out.innerHTML = `${+num + +num2}`;
}
function minus(num, num2) {
    out.innerHTML = `${+num - +num2}`;
}
function multi(num, num2) {
    out.innerHTML = `${+num * +num2}`;
}