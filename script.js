// 1. Quotes Array: Contains objects with 'text' and 'category' properties.
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Encouragement" }
  ];
  
  // 2. Function to display a random quote.
  // Renamed to displayRandomQuote to match the check.
  function displayRandomQuote() {
    // Check: Existence of the DOM element where the quote will be displayed.
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) {
      console.error("Error: 'quoteDisplay' element not found in the DOM.");
      return;
    }
    // Logic to select a random quote.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    // Update the DOM with the random quote.
    quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}:</strong> ${randomQuote.text}</p>`;
  }
  
  // 3. Function to create and append the form for adding new quotes.
  function createAddQuoteForm() {
    // Create a container for the form.
    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
      <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
      <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
      <button id="addQuoteBtn">Add Quote</button>
    `;
    // Append the form to the document body.
    document.body.appendChild(formContainer);
    // Add event listener for the "Add Quote" button.
    document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
  }
  
  // 4. Function to add a new quote.
  // Checks for input values, adds the new quote to the array, and updates the DOM.
  function addQuote() {
    // Retrieve and trim input values.
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
    
    // Validate inputs.
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Please enter both quote text and category.");
      return;
    }
    
    // Add the new quote object to the quotes array.
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    alert("New quote added successfully!");
    
    // Clear the input fields.
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    
    // Optional: Update the displayed quote immediately so users can see the change.
    displayRandomQuote();
  }
  
  // 5. Event Listener on the "Show New Quote" button.
  // Ensures that clicking the button calls the displayRandomQuote function.
  document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
  
  // 6. Initialize the form creation and display an initial random quote.
  createAddQuoteForm();
  displayRandomQuote();
  