function calculate() {
let inp_1 = document.querySelector ('.inp_1').value;
let inp_2 = document.querySelector ('.inp_2').value;
let operation = document.getElementById('operation').value;
let result;

switch(operation) {
case 'add':
    result = +inp_1 + +inp_2;
    break;
case 'subtract':
    result = inp_1 - inp_2;
    break;
case 'multiply':
    result = inp_1 * inp_2;
    break;
case 'divide':
    if (inp_2 !==0) {
        result = inp_1 / inp_2;
    } else {
        result = 'Помилка ділити на нуль';
    }
break;
default:
    result = 'Помилка не корректна операція';
}

    document.getElementById('result').textContent = "Результат: " + result;
}

