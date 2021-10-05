function genRandColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
function colorize() {
    this.style.backgroundColor = genRandColor();
    this.style.color = genRandColor();
}
const btns = document.querySelectorAll('button');
for(let butn of btns) {
    butn.addEventListener('click', colorize);
}

const bod = document.querySelector('body');
const btn = document.querySelector('#changer');
btn.addEventListener('click', () => {
    const color = genRandColor();
    bod.style.backgroundColor = color;
    document.querySelector('h1').innerHTML = color;
})

