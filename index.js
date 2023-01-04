const body = document.querySelector('body');
const quoteMark = document.getElementById('quote-mark');
const quote = document.getElementById('text');
const authorText = document.getElementById('author-text');
const quoteAuthor = document.getElementById('author');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');
const newQuoteBtn = document.getElementById('new-quote');

// get a quote when the page loads
fetch('https://api.themotivate365.com/stoic-quote', { mode: 'cors' })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        quote.textContent = response.quote;
        quoteAuthor.textContent = response.author;
    })

// get a new quote on each button click
newQuoteBtn.addEventListener('click', () => {
    fetch('https://api.themotivate365.com/stoic-quote', { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            quote.textContent = response.quote;
            quoteAuthor.textContent = response.author;
        })
        .catch(function(error) {
            console.log(error);
        })
})

// variety of different colors
let colors = ['#2a2a2a','#361db5','#006464','#32a852','#1dab72','#960c23','#180480','#5d30a1','#b01e51','#b0811c','#4b5c80','#997520','#1a1a7d','#8c3434','#8c3434','#319ea8','#31a892','#8f3c00','#a8340d','#7d7d7d','#5c5c5c','#4f3c3c','#3c3f4f','#3c4f44','#4f3c4b'];

// get a color from the array at random
let randomColor = colors[Math.floor(Math.random() * colors.length)]

// apply the random color to the elements on the page
body.style.backgroundColor = randomColor;
quoteMark.style.color = randomColor;
quote.style.color = randomColor;
authorText.style.color = randomColor;
twitter.style.backgroundColor = randomColor;
instagram.style.backgroundColor = randomColor;
newQuoteBtn.style.backgroundColor = randomColor;

// add event listeners
twitter.addEventListener('mouseenter', twitterHoverOn);
twitter.addEventListener('mouseleave', twitterHoverOff);
instagram.addEventListener('mouseenter', instagramHoverOn);
instagram.addEventListener('mouseleave', instagramHoverOff);
newQuoteBtn.addEventListener('click', changeColor);

// get a new color and apply it to the elements
function changeColor() {
    randomColor = colors[Math.floor(Math.random() * colors.length)]

    body.style.backgroundColor = randomColor;
    quoteMark.style.color = randomColor;
    quote.style.color = randomColor;
    authorText.style.color = randomColor;
    twitter.style.backgroundColor = randomColor;
    instagram.style.backgroundColor = randomColor;
    newQuoteBtn.style.backgroundColor = randomColor;
}

// add appropriate hover colors - return back to the current random color
function twitterHoverOn() {
    twitter.style.backgroundColor = '#1da1f2';
}

function twitterHoverOff() {
    twitter.style.backgroundColor = randomColor;
}

function instagramHoverOn() {
    instagram.style.backgroundColor = '#d11749';
}

function instagramHoverOff() {
    instagram.style.backgroundColor = randomColor;
}