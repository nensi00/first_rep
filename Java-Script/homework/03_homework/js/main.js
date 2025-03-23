// task 1
let btn = document.querySelector('.btn');
let result = document.querySelector('.text-result')
let result1 = document.querySelector('.text-result1')
btn.onclick = function() {
    let inp1 = parseFloat(document.querySelector('.inp_1').value);
    let flashSizeMB = inp1 * 1024;
    let fileSizeMB = 820;
    let fileCount = Math.floor(flashSizeMB / fileSizeMB);
    let remainingMB = Math.round(flashSizeMB - fileCount * fileSizeMB);

    document.querySelector('.text-result').innerHTML = `На флешку поміститься <span style="color:red">${fileCount}</span> файл(ів) розміром <span style="color:red">820</span> Мб.`;
    document.querySelector('.text-result1').innerHTML= `Обсяг пам'яті що залишається: <span style="color:red">${remainingMB}</span>  Мб`;
};
// task 2
let btn2 = document.querySelector('.btn2');
let result2 = document.querySelector('result2')
let result22 = document.querySelector('.result22')
btn2.onclick = function() {
    let input2 = parseFloat(document.querySelector('.input2').value);
    let input22 = parseFloat(document.querySelector('.input22').value);
    let schoko = Math.floor(input2 / input22);
    let schoko2 = Math.round(input2 - (schoko * input22));

    document.querySelector('.result2').innerHTML = `К-сть шоколадок яку Ви можете придбати: <span style="color:red">${schoko}</span>  шт.`;
    document.querySelector('.result22').innerHTML = `Решта, яка залишається у Вас: <span style="color:red">${schoko2}</span> грн.`;
};
// task 3
let btn3 = document.querySelector('.btn3');
let month = 12;
btn3.onclick = function () {
    let input3 = parseFloat(document.querySelector('.input3').value);
    let input33 = parseFloat(document.querySelector('.input33').value);
    let input31 = parseFloat(document.querySelector('.input31').value);
    let procent = input31 / 100;
    let year = input33 / 12;
    let result333 = input3 * Math.pow(1 + procent / month, month * year);
    let result30 = result333 - input3;

    document.querySelector('.result3').innerHTML = `Ваша сумма по закінченню строку депозиту: <span style="color:red">${result333.toFixed(2)}</span> грн.`;
    document.querySelector('.result30').innerHTML = `Ваш дохід по закінченню строку депозиту: <span style="color:red">${result30.toFixed(2)}</span> грн.`;
};
// task 4
let btn4 = document.querySelector('.btn4');
btn4.onclick = function() {
    let num = parseInt(document.querySelector('.input4').value);
    if (num >= 100 && num <= 999) {
        let last = num % 10;
        let middle = Math.floor((num % 100) / 10);
        let first = Math.floor(num / 100);
      
        let reversed = `${last}${middle}${first}`;
      
        document.querySelector('.result4').innerHTML = `Число задом наперед: ${reversed}`;
      }  else {
        document.querySelector('.result4').innerHTML = `<span style="color:red">Будь ласка, введіть саме тризначне число (від 100 до 999)</span>`;
      }
}
