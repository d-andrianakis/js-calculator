var allchar = "0123456789ABCDEF";
var quotes = [];
quotes.push(["Don't cry because it's over, smile because it happened."]);
quotes.push(["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."]);
quotes.push(["So many books, so little time."]);
quotes.push(["A room without books is like a body without a soul."]);
quotes.push(["Be the change that you wish to see in the world."]);
var authors = [];
authors.push(["Dr. Seuss"]);
authors.push(["Albert Einstein"]);
authors.push(["Frank Zappa"]);
authors.push(["Marcus Tullius Cicero"]);
authors.push(["Mahatma Gandhi"]);
function replaceContents() {
  var num = Math.floor(Math.random() * quotes.length);
  var container = document.getElementById('text');
  container.innerHTML = "<i class='fas fa-quote-left'></i> " + quotes[num];
  var container1 = document.getElementById('author');
  container1.innerHTML = "- " + authors[num];
  var tweet = quotes[num] + authors[num];
  var encoded = encodeURI(tweet);
  var url = "https://twitter.com/intent/tweet/" + encoded;
  var container3 = document.getElementById('tweet-quote').href = url;
  container3.innerHTML = url;
  var randcol = "";
  for (var i = 0; i < 6; i++) {
    randcol += allchar[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = "#" + randcol;
}