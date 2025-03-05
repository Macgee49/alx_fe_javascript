// Array of quote objects
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", category: "Inspiration" }
  ];
  
  // Function to display a random quote from the quotes array
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("quoteDisplay");
    
    // Display the quote text and its category
    quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><em>${quote.category}</em></p>`;
  }
  
  // Function to create and add the "Add Quote" form to the DOM
  function createAddQuoteForm() {
    const formContainer = document.createElement("div");
    formContainer.style.marginTop = "20px";
    
    // Create input for quote text
    const inputQuote = document.createElement("input");
    inputQuote.setAttribute("id", "newQuoteText");
    inputQuote.setAttribute("type", "text");
    inputQuote.setAttribute("placeholder", "Enter a new quote");
    inputQuote.style.marginRight = "10px";
    
    // Create input for quote category
    const inputCategory = document.createElement("input");
    inputCategory.setAttribute("id", "newQuoteCategory");
    inputCategory.setAttribute("type", "text");
    inputCategory.setAttribute("placeholder", "Enter quote category");
    inputCategory.style.marginRight = "10px";
    
    // Create button to add the new quote
    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";
    addButton.addEventListener("click", addQuote);
    
    // Append inputs and button to the container
    formContainer.appendChild(inputQuote);
    formContainer.appendChild(inputCategory);
    formContainer.appendChild(addButton);
    
    // Append the form container to the addQuoteSection div in the HTML
    const addQuoteSection = document.getElementById("addQuoteSection");
    addQuoteSection.appendChild(formContainer);
  }
  
  // Function to add a new quote to the quotes array and update the display
  function addQuote() {
    // Retrieve and trim the values from input fields
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
    
    // Basic validation: ensure both fields are provided
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Both quote and category are required!");
      return;
    }
    
    // Add the new quote object to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    
    // Clear input fields after adding the quote
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    
    // Optionally, display the newly added quote immediately
    showRandomQuote();
  }
  
  // Ensure the DOM is fully loaded before executing the script
  document.addEventListener("DOMContentLoaded", function() {
    // Display an initial random quote
    showRandomQuote();
    
    // Add event listener for the "Show New Quote" button
    document.getElementById("newQuote").addEventListener("click", showRandomQuote);
    
    // Dynamically create the Add Quote form
    createAddQuoteForm();
  });
  