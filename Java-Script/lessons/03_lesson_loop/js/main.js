// let start = +prompt('start');
// let stop = +prompt('stop');

// if(start > stop) {
//     stop = start;
// }

// for (let i = start; i <= stop; i++) {
    
//     console.log(i)
// }


// for ( let i = 1; i <= 10; i++) {
//     if ( i == 3) {
//         console.log("Good " +  i);
//         break; //continue
//     }
//     console.log(i);
    
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log("Parni " + i);
//     } else {
//         console.log("Neparni " + i);
//     }
// } 
// let btn = document.querySelectorAll('.btn')

// for (let i = 0; i < btn.length; i++) {
//     btn[i].onclick = () => {
//         console.log("haha " + i);
        
//     }
// }



// let user = ['sasha', 'olya', 'kolya']
// let out = document.querySelector('.out')

// if (user.includes(find)) {
//     out.innerHTML += `<p><b>Hello ${find}</b></p>`
// } else {
//     out.innerHTML += `<p><b>Buy buy ${find}</b></p>`
// }
// let find = prompt('Name');
// let findNumber = parseFloat(find);
// let out = document.querySelector('.out')

// if (!isNaN(findNumber)) {
//     out.innerHTML += 'U write number'
// } else if (typeof find === "string") {
//     out.innerHTML += 'U write string'
// }

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i*j));
        
    }    
}