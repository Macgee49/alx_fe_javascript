document.addEventListener("DOMContentLoaded", () => {
  // Check if required elements exist
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteButton = document.getElementById("newQuote");
  const newQuoteText = document.getElementById("newQuoteText");
  const newQuoteCategory = document.getElementById("newQuoteCategory");

  if (!quoteDisplay || !newQuoteButton || !newQuoteText || !newQuoteCategory) {
      console.error("One or more required elements are missing from the HTML.");
      return;
  }

  // Check if the quotes array exists and has the correct structure
  let quotes = [
      { text: "The best way to predict the future is to invent it.", category: "Motivation" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
      { text: "Do what you can, with what you have, where you are.", category: "Perseverance" }
  ];

  if (!Array.isArray(quotes) || !quotes.every(q => q.text && q.category)) {
      console.error("Quotes array is either missing or improperly structured.");
      return;
  }

  // Function to display a random quote
  function showRandomQuote() {
      if (quotes.length === 0) {
          quoteDisplay.textContent = "No quotes available. Add a new quote!";
          return;
      }
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].category}`;
  }

  if (typeof showRandomQuote !== "function") {
      console.error("showRandomQuote function is missing.");
      return;
  }

  // Function to add a new quote
  function addQuote() {
      const quoteTextValue = newQuoteText.value.trim();
      const quoteCategoryValue = newQuoteCategory.value.trim();

      if (!quoteTextValue || !quoteCategoryValue) {
          alert("Please enter both a quote and a category.");
          return;
      }

      quotes.push({ text: quoteTextValue, category: quoteCategoryValue });
      newQuoteText.value = "";
      newQuoteCategory.value = "";
      alert("Quote added successfully!");
      console.log("Updated Quotes Array:", quotes);
  }

  if (typeof addQuote !== "function") {
      console.error("addQuote function is missing.");
      return;
  }

  // Check if event listener is set on the Show New Quote button
  if (newQuoteButton) {
      newQuoteButton.addEventListener("click", showRandomQuote);
  } else {
      console.error("Show New Quote button not found.");
      return;
  }

  // Initialize with a random quote on page load
  showRandomQuote();

  // Expose functions for debugging
  window.showRandomQuote = showRandomQuote;
  window.addQuote = addQuote;
  window.quotes = quotes;
});
