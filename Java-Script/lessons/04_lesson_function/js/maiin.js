function satName(name){
    return `<li>${name}</li>`
}

let sel1 = document.querySelector('.sel1');
let btn = document.querySelector('.btn');
let out = document.querySelector('.out')
let users = [`Sasha`, `Olha`, `Kirill`, `Artem`, `Yana`, `Sasha`, `Olha`, `Kirill`, `Artem`, `Yana`, `Sasha`, `Olha`, `Kirill`, `Artem`, `Yana`, `Sasha`, `Olha`, `Kirill`, `Artem`, `Yana`]

function test(name) {
    return `<li>${name}</li>`
}

btn.onclick = () => {
    out.innerHTML = ``
    for (let i = 0; i < +sel1.value; i++) {
        out.innerHTML += test(users[i]);
    }
}



