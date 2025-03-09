const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";  // ye api link hai jiske through data retrive kia hai
let cryptoArr; // isme jo data fetch kia tha array ki form mei vo cryptoArr mei chla jaye ga

const container = document.querySelector('.inner-container'); // ye maine anchor tag mei lgai hai class kyuki ousme se sari children apend kru ga clone bna ke


fetch(url, { // promise hai ye fetch 
  method: 'GET' // kuch api headers bhi mangti hai apni key deti hai access krney ke liye
})
  .then((response) => {
    if (!response.ok) { // response.ok is true if the response status code is between 200 and 299 (inclusive) response.ok is false for any status code outside of this range
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // JSON data aya ga response ki tor mei
  })// yha se data json form mei tha ousey convert kia hai idhr 
  .then((data) => {
    // console.log(data); // yha data access kr ke kaam start kia hai
    cryptoArr = data; // data ko new variable mei store krdia
    cryptoArr.forEach(newCard => { // jitna data hai array ki form mei ouspe loop lga ke utney he card bna diye
      const anchorTag = document.createElement('a'); // anchor tag create kia 
      anchorTag.setAttribute('href', 'coin-details.html'); // ousmey link ka address
    
      Array.from(container.children).forEach(allChildren => { // ismey sara children append kra di jo tha
        anchorTag.appendChild(allChildren.cloneNode(true)); // cloneNode se clone bn ke append hoti hai purani pe asr nhi hota
        const cryptoName = anchorTag.children[0].querySelector('.crypto-name');// name ke liye use kia
        cryptoName.innerHTML = newCard.id;

        const cryptoPhoto = anchorTag.children[0].querySelector('img'); // img ke liye use kia
        cryptoPhoto.setAttribute('src', newCard.image);
        
        const cryptoPrice = anchorTag.children[0].querySelector('.crypto-price'); // price ke liye use kia
        cryptoPrice.innerHTML = newCard.current_price;

        const cryptoSymbol = anchorTag.children[0].querySelector('.crypto-symbol'); // symbol ke liye use kia 
        cryptoSymbol.innerHTML = newCard.symbol;
      })
      const cardAdd = document.querySelector('.crypto-section').children[0]; // container hai ye html dekho smjne ke liye
      cardAdd.appendChild(anchorTag); // ismey jo create ki hai anchor tag vo append ki hai
      anchorTag.addEventListener('click', ()=>{
        localStorage.setItem('crypto', JSON.stringify(newCard)) // important poora para likhta hu
        /*
        pura array he chaihye isliye json form mei he jaye ga single value string ki form mei bhej sktey hai
      
          In JavaScript, localStorage is a web storage API that allows you to store data in the browser.
          Unlike cookies, which are sent to the server with every HTTP request, data in localStorage
          is stored locally in the browser, so it is faster and doesn’t affect the network performance.

          Key Features of localStorage:
          Persistence: Data stored in localStorage remains until it is explicitly deleted (even if the browser
          is closed and reopened).
          Storage Limit: Generally, each domain can store up to 5-10 MB of data, depending on the browser.
          Only Strings: localStorage stores data as strings. If you need to store objects or arrays, you'll need
          to serialize them (using JSON.stringify()) and parse them (using JSON.parse()).
         */
      })
      
    })

    const cardConatiner = document.querySelector('.crypto-section').children[0];
    const removingchild1 = cardConatiner.children[0];
    if(cardConatiner.contains(removingchild1)){
      cardConatiner.removeChild(removingchild1);// ye remove krdia dummy anchor tag starting vala 
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });



