const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

async function fetchQuote() {
  quoteElement.textContent = "Loading...";

  try {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    const quotes = data.quotes;

    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
  } catch (error) {
    quoteElement.textContent = "Failed to fetch quote.";
    authorElement.textContent = "";
    console.error(error);
  }
}

// Event listener for the button
newQuoteBtn.addEventListener('click', fetchQuote);

// Load a quote on page load
fetchQuote();
