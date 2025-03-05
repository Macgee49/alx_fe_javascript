// Array of quote objects, each with a text and a category
const quotes = [
  { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", category: "Perseverance" }
];

// Function to display a random quote from the quotes array
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Get the quote display container and update its content
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `<p><strong>${quote.category}:</strong> ${quote.text}</p>`;
}

// Function to add a new quote from the form input
function addQuote() {
  // Retrieve the input values
  const quoteText = document.getElementById('newQuoteText').value;
  const quoteCategory = document.getElementById('newQuoteCategory').value;

  // Validate the inputs
  if (quoteText.trim() === '' || quoteCategory.trim() === '') {
    alert("Both fields are required.");
    return;
  }

  // Add the new quote to the quotes array
  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear the input fields after adding the quote
  document.getElementById('newQuoteText').value = '';
  document.getElementById('newQuoteCategory').value = '';

  // Optional: Provide feedback and update the display
  alert("New quote added successfully!");
  showRandomQuote();  // Optionally display the newly added quote immediately
}

// Wire up the "Show New Quote" button to display a random quote when clicked
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Optionally, display an initial random quote when the page loads
showRandomQuote();
