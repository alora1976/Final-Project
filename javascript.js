var quotes = [

    "I am the wisest man alive, for I know one thing, and that is that I know nothing. ― Plato ",
"Life is very short and anxious for those who forget the past, neglect the present, and fear the future. ― Seneca",
"How long are you going to wait before you demand the best for yourself. ― Epictetus",
"All that we see or seem is but a dream within a dream. ― Edgar Allan Poe",
"Find what you love and let it kill you. ― Charles Bukowski",
"If you gaze long enough into an abyss, the abyss will gaze back into you. ― Friedrich Neitzche ",
"Before you embark on a journey of revenge, dig two graves. ― Confucius",
" A smooth sea never made a skilled sailor. ― Franklin D. Roosevelt",
"Dwell on the beauty of life. Watch the stars, and see yourself running with them.― Marcus Aurelius",




]

function newQuote()  {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

