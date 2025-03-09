const storedData = localStorage.getItem('crypto'); // yha se jo local storage bnaya tha pichey vo access kia hai
let cryptoData;
if(storedData){
    cryptoData = JSON.parse(storedData)
    
}else{
    console.log("No data found in localStorage.");
}

// baki simple dom manipulation hai 

const allTimeHigh = document.querySelector('.all-time-high');
const allTimeHighChange = document.querySelector('.all-time-high-change');
const allTimeHighDate = document.querySelector('.all-time-high-date');
const allTimeLow = document.querySelector('.all-time-low');
const allTimeLowChange = document.querySelector('.all-time-low-change');
const allTimeLowDate = document.querySelector('.all-time-low-date');
const circulatingSupply = document.querySelector('.circulating-supply');
const currentPrice = document.querySelector('.current-price');
const hourHigh = document.querySelector('.hour-high');
const hourLow = document.querySelector('.hour-low');
const marketCap = document.querySelector('.market-cap');
const marketCapRank = document.querySelector('.market-cap-rank');
const hourChange = document.querySelector('.hour-change');
const totalSupply = document.querySelector('.total-supply');


allTimeHigh.innerHTML = `${cryptoData.ath}$`;
allTimeHighChange.innerHTML = `${cryptoData.ath_change_percentage}%`;
allTimeHighDate.innerHTML = cryptoData.ath_date;
allTimeLow.innerHTML = cryptoData.atl;
allTimeLowChange.innerHTML = `${cryptoData.atl_change_percentage}%`;
allTimeLowDate.innerHTML = cryptoData.atl_date;
circulatingSupply.innerHTML = cryptoData.circulating_supply;
currentPrice.innerHTML =`${cryptoData.current_price}$`;
hourHigh.innerHTML = `${cryptoData.high_24h}$`;
hourLow.innerHTML =`${cryptoData.low_24h}$`;
marketCap.innerHTML =`${cryptoData.market_cap}$`;
marketCapRank.innerHTML = cryptoData.market_cap_rank;
hourChange.innerHTML =`${cryptoData.price_change_24h}$`;
totalSupply.innerHTML = cryptoData.total_supply;


document.querySelector('#coin').innerHTML = `${cryptoData.id} details`;
document.querySelector('img').setAttribute('src', cryptoData.image);

localStorage.clear(); // isey bnd krna jroori hai



