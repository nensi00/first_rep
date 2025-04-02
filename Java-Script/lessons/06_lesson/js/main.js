let sel = document.querySelector('.sel')
let btn = document.querySelector('.btn')

let arr = ["User1", "User2", "User3", "User4", "User5", "User6", "User7",]

arr.map(item => {
    sel.innerHTML += `<option value="${item}">${item}</option>`
})

btn.onclick = () => {
    arr.map(item => {
        if (item === sel.value) {
            console.log(item);
            
        }
    })
}