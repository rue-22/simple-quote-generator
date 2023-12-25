let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const newQuote = document.querySelector(".new-quote");
newQuote.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let q = quotes[randomIndex];
    quote.innerText = q.quote;
    author.innerText = q.person;
});

const quotes = [
    {
        quote: "Ang kabataan ang pag-asa ng bayan",
        person: "Jose Rizal",
    },
    {
        quote: "You must be the change you wish to see in the world",
        person: "Mahatma Gandhi",
    },
    {
        quote: "Be yourself; everyone else is already taken",
        person: "Oscar Wilde",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        person: "Helen Keller",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        person: "Martin Luther King Jr.",
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, and today is a gift... that's why they call it present",
        person: "Master Oogway",
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        person: "Jim Rohn",
    },
    {
        quote: "Oh, to be desired by someone",
        person: "Anonymous",
    },
    {
        quote: "An unexamined life is not worth living.",
        person: "Socrates",
    },
    {
        quote: "Life is not daijobu!",
        person: "Anonymous",
    },
    {
        quote: "With great power comes great responsibility!",
        person: "Uncle Ben",
    },
];
