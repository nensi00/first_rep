// let sasha = {
//     name: 'Sasha',
//     age: 1984,
//     photo: ['img1', 'img2', 'img3'],
//     patents: [ {
//         name: 'Kolya'
//     },
//     {
//         name: 'Sveta'
//     }
// ],
    
//     isMaried: false,
//     actualAge () {
//         return 2025 - this.age;
//     }
// }

// sasha.age = 1990

// console.log(sasha.actualAge());

// registr

let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.btn')
let error = document.querySelector('.error')

// let suc = `<span style="color:green" >Успішно зареєстрований</span>`
// let eror = `<span style="color:red" >Всі поля заповніть!</span>`

let message = {
    error: `<span style="color:red" >Всі поля заповніть!</span>`,
    success: `<span style="color:green" >Успішно зареєстрований</span>`
}

let usersOut = document.querySelector('.users')


let user = []

btn.onclick = () => {
    if(inp1.value && inp2.value) {
        error.innerHTML = `${message.success}`
        user.push({
            name: 'Sasha',
            password: 'admin'
        }) 
        usersOut.innerHTML = user.length
    console.log(user);
    } else {
        console.log(`Заповніть всі поля`);
        error.innerHTML = `${message.error}`
        
    }
    

    


}
