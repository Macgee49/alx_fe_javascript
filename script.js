document.addEventListener("DOMContentLoaded", function() {
  // ======================================
  // 1. Initialize Quotes Array from Local Storage or Defaults
  // ======================================
  let quotes = [];
  const defaultQuotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", category: "Inspiration" }
  ];

  if (localStorage.getItem("quotes")) {
    try {
      quotes = JSON.parse(localStorage.getItem("quotes"));
    } catch (e) {
      quotes = defaultQuotes;
      localStorage.setItem("quotes", JSON.stringify(quotes));
    }
  } else {
    quotes = defaultQuotes;
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }

  // Save quotes array to local storage
  function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }

  // ======================================
  // 2. Display a Random Quote and Store in Session Storage
  // ======================================
  function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Update the DOM with the selected quote and its category
    quoteDisplay.innerHTML = `
      <p>"${selectedQuote.text}"</p>
      <p><em>${selectedQuote.category}</em></p>
    `;

    // Store the last viewed quote in session storage
    sessionStorage.setItem("lastViewedQuote", JSON.stringify(selectedQuote));
  }

  // ======================================
  // 3. Add a New Quote and Update DOM & Local Storage
  // ======================================
  function addQuote() {
    const quoteInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
    if (!quoteInput || !categoryInput) return;

    const newQuoteText = quoteInput.value.trim();
    const newQuoteCategory = categoryInput.va
