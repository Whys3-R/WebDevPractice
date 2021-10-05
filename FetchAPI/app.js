fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log('RESPONSE, Parsing...', res);
        return res.json();
    })
    .then(data => {
        console.log('Parsed data : ', data);
        console.log("Target data : ", data.ticker.price);
    })
    .catch(err => {
        console.log('Error', err);
    });

const fetchBTCPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (err) {
        console.log("Error ", err);
    }
}