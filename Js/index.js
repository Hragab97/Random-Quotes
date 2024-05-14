var getQuote = [
    "“Be yourself; everyone else is already taken. - Oscar Wilde”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. - Frank Zappa”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein”",
    "“A room without books is like a body without a soul.” - Marcus Tullius Cicero",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” - Bernard M. Baruch",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.” - William W. Purkey",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” - Dr. Seuss",
    "“You only live once, but if you do it right, once is enough.” - Mae West",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” - J.K. Rowling, Harry Potter and the Goblet of Fire",
    '“It is better to be hated for what you are than to be loved for what you are not.” - Andre Gide, Autumn Leaves',
];

function randomQuote() {
    var quote = getQuote[Math.floor(Math.random() * getQuote.length)];
    document.getElementById("random").innerHTML = quote;
  }

var quote = Math.floor(Math.random() * getQuote.length);

console.log(quote, getQuote[quote]);

