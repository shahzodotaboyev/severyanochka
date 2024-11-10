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
let heart = document.querySelector('.heart');
let bgred = () => {
    heart.classList.toggle('bg-red');
    heart.before.toggle('bg-red')
};
