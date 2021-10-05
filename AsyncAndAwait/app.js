// async function hello() {
// }

// const sing = async () => {
//     return 'LA LA LA LA'
// }
// sing().then((data) => {
//     console.log("Promise resolved with: ", data)
// })

const login = async(username, password) => {
    if (!username || !password) throw "Missing information"
    if (password === "yellowbomb") return 'Welcome!'
    throw 'Invalid Password'
}
login('asdf', 'yellowbomb')
    .then(msg =>{
        console.log("You're in");
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })

const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return "DONE!"
}

// rainbow().then(() => console.log('Rainbow End'))
async function printRainbow() {
    await rainbow();
    console.log("You've reached the end of a rainbow!");
}
printRainbow();