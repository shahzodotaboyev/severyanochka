// let body = document.body;
// const darkmode = () => {
// body.classList.toggle('darkMode')
// }   

function qotologmnElements() {
    let qotologmn = document.getElementsByClassName('qotolog')[0]
    qotologmn.classList.toggle('block')
}
let darkmode = document.querySelector('.darkmode')
let indarkmode = document.querySelector('.inDarkmode')
let body = document.body;
let darkmodefn = () => {
    darkmode.classList.toggle('darkmode-right');
    indarkmode.classList.toggle('in-light');
    body.classList.toggle('darkModeBody');
}
let menuQotolog = document.getElementsByClassName('qotolog-menu-in');

let qotologBottom = () => {
    menuQotolog[0].classList.toggle('left0');
};

// window.onload = () => {
//     const input = document.querySelector('.input input'); 
//     const cards = document.querySelectorAll('.card'); 

//     input.oninput = function () {
//         const value = this.value.trim().toLowerCase(); 
//         cards.forEach(card => {
//             const productText = card.querySelector('#search-p').innerText.toLowerCase();
//             if (productText.includes(value)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none'; 
//             }
//         });
//     };
// };
