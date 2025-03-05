document.addEventListener("DOMContentLoaded", function() {
  // ===============================
  // 1. Quotes Array with Objects
  // Each quote object contains 'text' and 'category' properties
  // ===============================
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", category: "Inspiration" }
  ];

  // ===============================
  // 2. displayRandomQuote Function
  // Selects a random quote from the quotes array and updates the DOM
  // ===============================
  function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) return; // Safety check

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Update the DOM with the selected quote and its category
    quoteDisplay.innerHTML = `
      <p>"${selectedQuote.text}"</p>
      <p><em>${selectedQuote.category}</em></p>
    `;
  }

  // ===============================
  // 3. addQuote Function
  // Retrieves input values, adds a new quote to the array, and updates the DOM
  // ===============================
  function addQuote() {
    // Retrieve the new quote text and category from input fields
    const quoteInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
    if (!quoteInput || !categoryInput) return; // Safety check

    const newQuoteText = quoteInput.value.trim();
    const newQuoteCategory = categoryInput.value.trim();

    // Validate that both fields are provided
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Both quote text and category are required.");
      return;
    }

    // Add the new quote object to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear input fields after adding the quote
    quoteInput.value = "";
    categoryInput.value = "";

    // Update the DOM to potentially display the newly added quote
    displayRandomQuote();
  }

  // ===============================
  // 4. Event Listener on "Show New Quote" Button
  // ===============================
  const newQuoteButton = document.getElementById("newQuote");
  if (newQuoteButton) {
    newQuoteButton.addEventListener("click", displayRandomQuote);
  }

  // ===============================
  // Optional: Create "Add Quote" Form Dynamically
  // If an add-quote section exists, append the form elements
  // ===============================
  const addQuoteSection = document.getElementById("addQuoteSection");
  if (addQuoteSection) {
    const formContainer = document.createElement("div");
    formContainer.style.marginTop = "20px";

    // Create input for new quote text
    const quoteInput = document.createElement("input");
    quoteInput.id = "newQuoteText";
    quoteInput.type = "text";
    quoteInput.placeholder = "Enter a new quote";
    quoteInput.style.marginRight = "10px";

    // Create input for new quote category
    const categoryInput = document.createElement("input");
    categoryInput.id = "newQuoteCategory";
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter quote category";
    categoryInput.style.marginRight = "10px";

    // Create the add quote button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";
    addButton.addEventListener("click", addQuote);

    // Append the new elements to the form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    // Append the form container to the addQuoteSection div
    addQuoteSection.appendChild(formContainer);
  }

  // ===============================
  // Initial Display: Show a random quote on page load
  // ===============================
  displayRandomQuote();
});
