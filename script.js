// 1. Quotes array with objects containing 'text' and 'category'
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Encouragement" }
  ];
  
  // 2. Function to display a random quote (named showRandomQuote)
  function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) {
      console.error("Error: 'quoteDisplay' element not found in the DOM.");
      return;
    }
    // Logic to select a random quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    // Update the DOM with the selected random quote
    quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}:</strong> ${randomQuote.text}</p>`;
  }
  
  // 3. Function to create and append the form for adding new quotes (named createAddQuoteForm)
  function createAddQuoteForm() {
    // Create a form element for better semantics and validation
    const formContainer = document.createElement("form");
    formContainer.id = "addQuoteForm";
    formContainer.innerHTML = `
      <input id="newQuoteText" type="text" placeholder="Enter a new quote" required />
      <input id="newQuoteCategory" type="text" placeholder="Enter quote category" required />
      <button type="submit" id="addQuoteBtn">Add Quote</button>
    `;
    document.body.appendChild(formContainer);
    // Use the form submit event to trigger the addQuote function
    formContainer.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      addQuote();
    });
  }
  
  // 4. Function to add a new quote (named addQuote)
  // Validates input, adds the new quote to the quotes array, and updates the displayed quote.
  function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
  
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Please enter both quote text and category.");
      return;
    }
  
    // Add the new quote object to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    alert("New quote added successfully!");
  
    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  
    // Update the displayed quote immediately so users see the change
    showRandomQuote();
  }
  
  // 5. Event listener on the "Show New Quote" button
  // The button (with id "newQuote") triggers the showRandomQuote function when clicked.
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // 6. Initialize the application by creating the add quote form and showing an initial random quote.
  createAddQuoteForm();
  showRandomQuote();
  