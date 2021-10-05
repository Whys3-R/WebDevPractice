document.querySelector('button').addEventListener('click', function(evt) {
    alert('Click');
})

const inp = document.querySelector('input');
inp.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code);
})