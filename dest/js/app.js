const url = "https://type.fit/api/quotes";
let main = document.getElementById('main'),
    array = [];

function app() {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        array = data;
      })
      .then(function() {
        displayQuote(array[randomize()]);
      });



    function randomize(){
    let min = 0, 
        max=100, 
        random = Math.floor(Math.random() * (max - min)) + min; 

    return random;
    }

    function displayQuote(data) {
    let quote = document.createElement("div");
    let quoteContent = document.createElement("h2");
    let quoteAuthor = document.createElement("h5");

    quote.classList.add('quote', 'fade');
    quoteContent.classList.add('quote__content');
    quoteAuthor.classList.add('quote__author'); 

    quoteContent.innerHTML = data.text;
    quoteAuthor.innerHTML = data.author; 

    quote.appendChild(quoteContent);
    quote.appendChild(quoteAuthor);
    main.appendChild(quote);

    setTimeout(function() {  //delete random quote after 5s
      main.removeChild(quote);
    }, 5000)

    }
}
app(); //first run
setInterval(function() { //after time from app(), display new quote in loop.
  app();
}, 5200);
