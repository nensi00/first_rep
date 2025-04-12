const changeTheme = document.getElementById('changeTheme')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add(`dark`)
        changeTheme.classList.add('box--active');
    } else {
        changeTheme.classList.remove('box--active');
        document.body.classList.remove('dark')
    }
})




changeTheme.addEventListener('click', () => {
    if (document.body.classList.contains(`dark`)) {
        changeTheme.classList.remove('box--active');
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark');
        changeTheme.classList.add('box--active');
        localStorage.setItem('theme', 'dark');
      }
    
})

let btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    const headings = document.querySelectorAll('h2')
    headings.forEach((heading, index) => {
        heading.textContent = `${index}. ${heading.textContent}`;
    });
});



// let title = document.querySelectorAll('h2')
// console.log(title[title.length-1]);


// let arr = ['Sasha', 'Artem', 'Sveta', 'Olya', 'Lesia',]

// // console.log(arr);

// arr.map(item => {
//     console.log(item);
// } )