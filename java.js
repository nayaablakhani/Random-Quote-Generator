const quote = document.querySelector(".quote");
const quoteBtn = document.querySelector(".quote-btn");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".tweet");

function randomQuote() {
    quoteBtn.innerText = "Loading Quote";
    quoteBtn.classList.add("Loading")
    //fetching random quotes from an API
    fetch("https://api.quotable.io/random")
        .then(result => result.json())
        .then(result => {
            console.log(result);
            quote.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("Loading");
        })
};

//SpeechSysthesisUtternce is a speech API that requests a speech request 
soundBtn.addEventListener('click', () => {
    let utternce = new SpeechSynthesisUtterance(`${quote.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utternce);
    //speak method of spechsynthesis speaks the text string
});
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quote.innerText);
    //writeText funcstion allos to copy text to your system clipboard
})
tweetBtn.addEventListener('click', () => {
    let tweetURL = `https://twitter.com/intent/tweet?url= ${quote.innerHTML}`
    window.open(tweetURL, "_blank");
})

quoteBtn.addEventListener('click', randomQuote);