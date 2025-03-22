let inp1 = document.querySelector('.inp_1');
let inp2 = document.querySelector('.inp_2');
let inp3 = document.querySelector('.inp_3');
let inp4 = document.querySelector('.inp_4');
let inp5 = document.querySelector('.inp_5');
let inp6 = document.querySelector('.inp_6');
let inp7 = document.querySelector('.inp_7');

document.querySelector('.btn').onclick = () => {
    document.querySelector('.span-out').innerHTML = `Відповідь: Через alert(), через console.log(), через 'script' '/script'. `;
}
document.querySelector('.btn1').onclick = () => {
    document.querySelector('.span-out1').innerHTML = `Відповідь: Правильні імена змінних: 'firstName', 'lastName', 'fullName', 'name'. Не правильні імена змінних: 'first Name', 'LastName', '123name', 'full-name.`;
}
document.querySelector('.btn2').onclick = () => {
    document.querySelector('.span-out2').innerHTML = `Відповідь: Однорядковий '//'. Багаторядковий '/*' '*/'`;
}
document.querySelector('.btn3').onclick = () => {
    document.querySelector('.span-out3').innerHTML = `Відповідь: 'camelCase', 'PascalCase', 'snake_case', 'kebab-case', 'UPPERCASE', 'lowercase'`;
}
document.querySelector('.btn4').onclick = () => {
    document.querySelector('.span-out4').innerHTML = `Привіт, ${inp1.value}`;
}
document.querySelector('.btn5').onclick = () => {
    document.querySelector('.span-out5').innerHTML = `Вам повних ${2025 - inp2.value} років.`;
}
document.querySelector('.btn6').onclick = () => {
    document.querySelector('.span-out6').innerHTML = `Формула периметра квадрата: P = 4 * a. От же, Ваша відповідь: ${4 * inp3.value} см.`;
}
document.querySelector('.btn7').onclick = () => {
    document.querySelector('.span-out7').innerHTML = `Формула площини кола: π*r2, де 𝑟 — це радіус. От же Ваша відповідь: ${3.14 * (inp4.value*inp4.value)} см.`;
}
document.querySelector('.btn8').onclick = () => {
    document.querySelector('.span-out8').innerHTML = `Формула обчислення швидкості: швидкість = відстань / час. От же Ваша відповідь: ${inp5.value / inp6.value} км/год`;
}
document.querySelector('.btn9').onclick = () => {
    document.querySelector('.span-out9').innerHTML = `Ви отримаєте: ${inp7.value*0.92} &euro;`;
}

