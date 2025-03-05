document.addEventListener("DOMContentLoaded", function() {
  // 1. Quotes array with objects containing text and category properties
  const quotes = [
    { text: "Quote One", category: "Category One" },
    { text: "Quote Two", category: "Category Two" },
    { text: "Quote Three", category: "Category Three" }
  ];

  // 2. displayRandomQuote function: selects a random quote and updates the DOM
  function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) return; // Exit if the container doesn't exist

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Update the DOM with the selected quote's text and category
    quoteDisplay.innerHTML = `<p>"${selectedQuote.text}"</p><p><em>${selectedQuote.category}</em></p>`;
  }

  // 3. addQuote function: adds a new quote to the quotes array and updates the DOM
  function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Validate input: both quote text and category are required
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Both quote text and category are required.");
      return;
    }

    // Add the new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Update the DOM with a random quote (which might include the new quote)
    displayRandomQuote();
  }

  // 4. Event listener on the "Show New Quote" button to trigger displayRandomQuote
  const newQuoteButton = document.getElementById("newQuote");
  if (newQuoteButton) {
    newQuoteButton.addEventListener("click", displayRandomQuote);
  }
});
