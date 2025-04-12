// let btn1 = document.querySelector('.btn-minus')
// let btn2 = document.querySelector('.btn-plus')
// let out = document.querySelector('.out')

// let count1 = 0

// btn1.addEventListener('click', () => {
//     if (count1 > 0) {
//         count1 --
//         out.innerHTML = count1;
//     }
// })

// btn2.addEventListener('click', () => {
//     count1 ++
//     out.innerHTML = count1;
// })

let text = document.querySelector('.text')
let btn3 = document.querySelector('.add')
let btn4 = document.querySelector('.min1')
let out = document.querySelector('.out')
let countOut = document.querySelector('.count')
let count = 0

btn3.addEventListener('click', () =>  {
    count ++
    countOut.innerHTML = `Task: ${count}`;
    // out1.innerHTML += `
    //     <li> <input type="checkbox"> ${text.value}</li>
    // `
   
    const li = document.createElement('li')
    li.innerHTML = text.value
    
    
    const check = document.createElement('input')
    check.type = 'checkbox'
   

    check.addEventListener('change', () => {
        if (check.checked) {
            countOut.innerHTML = `Task: ${-- count}`
            li.classList.add('red')
        } else {
            countOut.innerHTML = `Task: ${++ count}`
            li.classList.remove('red')
        }
    })

    li.append(check)

    out.append(li)
    
})
btn4.addEventListener('click', () => {
    out.innerHTML = ``
    count = 0;
    countOut.innerHTML = `Task: 0`;    
})

