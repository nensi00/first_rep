let age = document.querySelector ('.age')
let btn = document.querySelector ('.btn')
let out = document.querySelector ('.out')

btn.onclick = () => {

    if (+age.value >= 18 && +age.value < 25) {
            out.innerHTML = 'На ДОНБАС! Придатний(-а) на строкову службу';
        }
        else if ( +age.value >= 25 && +age.value < 60) {
                out.innerHTML = 'На ДОНБАС! Придатний(-а) на Контрактну службу';
            }
        else if ( +age.value < 14) {
            out.innerHTML = 'Ви ще маленькі! Число повинно бути не менше 14';
        }
        else {
            out.innerHTML = 'Оце тобі повезло. Не придатний(-а)';
        }
}
