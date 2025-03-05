document.addEventListener("DOMContentLoaded", () => {
  // Check if required elements exist
  if (!document.getElementById("quoteDisplay") || !document.getElementById("newQuote") ||
      !document.getElementById("newQuoteText") || !document.getElementById("newQuoteCategory")) {
      console.error("Required elements not found in the document.");
      return;
  }

  // Check if the quotes array exists and has correct structure
  let quotes = [
      { text: "The best way to predict the future is to invent it.", category: "Motivation" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
      { text: "Do what you can, with what you have, where you are.", category: "Perseverance" }
  ];
  
  if (!Array.isArray(quotes) || !quotes.every(q => typeof q.text === "string" && typeof q.category === "string")) {
      console.error("Quotes array is not properly formatted.");
      return;
  }

  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteButton = document.getElementById("newQuote");
  
  // Function to display a random quote
  function showRandomQuote() {
      if (typeof quotes === "undefined" || !Array.isArray(quotes) || quotes.length === 0) {
          console.error("Quotes array is missing or empty.");
          quoteDisplay.textContent = "No quotes available. Add a new quote!";
          return;
      }
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].category}`;
  }
  
  // Function to add a new quote
  function addQuote() {
      const quoteText = document.getElementById("newQuoteText").value.trim();
      const quoteCategory = document.getElementById("newQuoteCategory").value.trim();
      
      if (!quoteText || !quoteCategory) {
          alert("Please enter both a quote and a category.");
          return;
      }
      
      quotes.push({ text: quoteText, category: quoteCategory });
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
      alert("Quote added successfully!");
      console.log("Updated Quotes Array:", quotes);
  }
  
  // Check for event listener
  if (newQuoteButton) {
      newQuoteButton.addEventListener("click", showRandomQuote);
  } else {
      console.error("Show New Quote button not found.");
  }

  // Initialize with a random quote on page load
  showRandomQuote();

  // Expose functions to global scope for testing
  window.showRandomQuote = showRandomQuote;
  window.addQuote = addQuote;
  window.quotes = quotes;
});
