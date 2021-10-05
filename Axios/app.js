// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch (err => {
//         console.log('error: ', err);
//     })

const fetchBTCPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (err) {
        console.log('Error: ', err);
    }
}

const getDadJoke = async () => {
    const joke = document.querySelector('#joke');
    try {
        const config = {headers: {Accept: "application/json"}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        joke.innerHTML = res.data.joke;
    } catch (error) {
        joke.innerHTML = "I'm out of jokes"
    }
}

getDadJoke();
const newJoke = document.querySelector('#genJoke');
newJoke.addEventListener('click', function (e) {
    getDadJoke();
})