//let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp1')
let select = document.querySelector('.select')
let inp2 = document.querySelector('#chek1')
let out = document.querySelector('.out')

let users = [
    {

    }
]
// btn.onclick = () => {
//     console.log(`test1`);
    
// }

// btn.addEventListener('click', () => {
//     console.log(`test1`);
    
// })
// btn.addEventListener('click', () => {
//     console.log(`test2`);
    
// })
inp1.addEventListener('change', () => {
    console.log(inp1.value);
    
})
select.addEventListener('change', () => {
    console.log(select.value);
    
})
inp2.addEventListener('change', () => {
    if (inp2.checked) {
        out.innerHTML = `++`
    } else if (inp2.checked) {
        out.innerHTML = `--`
    }
    
})

inp2.addEventListener('change', () => {
    
})