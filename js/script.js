var quotesPara = document.getElementById("quotes");
var quotesArray = ["Nature is not human hearted - Lao Tzu",  "Integrity is doing the right thing, even when no one is watching - C S Lewis", " One good thing about music, when it hits you, you feel no pain - Bob Marley", "A wise man can learn more from a foolish question than a fool can learn from a wise answer - Bruce Lee", "The investment needs to be in changing the lock-down mentality of the current system. Dress it up anyway you like, the mass incarceration and locking up of our people in cages is not a solution for anything, māori run or otherwise - Sina Brown-Davis"];

// listener on button with id "newQuote"
document.getElementById("newQuote").addEventListener("click", buttonCounter);

var buttonClicks = 0;

function buttonCounter() {
    buttonClicks++;
    displayQuote();
} 

function displayQuote() {
  var nextQuote = quotesArray[buttonClicks%quotesArray.length];
  $("#quotes").empty();
  $("#quotes").append(nextQuote);

  $("#tweet").empty();
  $("#tweet").append("<a target='_blank', href='http://twitter.com/home/?status=" + nextQuote + "''>" + "Tweet this quote.'</a>");
}

