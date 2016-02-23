var quotesPara = document.getElementById("quotes");
var quotesArray = ["Nature is not human hearted - Lao Tzu",  "Integrity is doing the right thing, even when no one is watching - C S Lewis", " One good thing about music, when it hits you, you feel no pain - Bob Marley", "A wise man can learn more from a foolish question than a fool can learn from a wise answer - Bruce Lee"];

// listener on button with id "newQuote"
document.getElementById("newQuote").addEventListener("click", buttonCounter);

var buttonClicks = 0;

function buttonCounter() {
    buttonClicks++;
    displayQuote();
} 

function displayQuote() {
  $("#quotes").empty();
  console.log(buttonClicks%quotesArray.length);
  $("#quotes").append(quotesArray[buttonClicks%quotesArray.length]);
}