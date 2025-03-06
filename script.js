// 1. Quotes array with objects containing 'text' and 'category'
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Encouragement" }
  ];
  
  // 2. Function to display a random quote, considering the current category filter.
  function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    if (!quoteDisplay) {
      console.error("Error: 'quoteDisplay' element not found in the DOM.");
      return;
    }
    
    // Get the selected filter value (default is "all")
    const filterSelect = document.getElementById("categoryFilter");
    let selectedCategory = filterSelect ? filterSelect.value : "all";
    
    // Filter quotes based on the selected category
    let availableQuotes = selectedCategory === "all" 
      ? quotes 
      : quotes.filter(q => q.category === selectedCategory);
    
    if (availableQuotes.length === 0) {
      quoteDisplay.innerHTML = `<p>No quotes available for category: ${selectedCategory}</p>`;
      return;
    }
    
    // Select a random quote from the available quotes
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const randomQuote = availableQuotes[randomIndex];
    quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}:</strong> ${randomQuote.text}</p>`;
  }
  
  // 3. Function to create and append the form for adding new quotes.
  function createAddQuoteForm() {
    const formContainer = document.createElement("form");
    formContainer.id = "addQuoteForm";
    formContainer.innerHTML = `
      <input id="newQuoteText" type="text" placeholder="Enter a new quote" required />
      <input id="newQuoteCategory" type="text" placeholder="Enter quote category" required />
      <button type="submit" id="addQuoteBtn">Add Quote</button>
    `;
    document.body.appendChild(formContainer);
    formContainer.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload on form submission
      addQuote();
    });
  }
  
  // 4. Function to populate the filtering dropdown with unique categories.
  function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    if (!categoryFilter) return;
    
    // Extract unique categories from the quotes array
    const categories = [...new Set(quotes.map(q => q.category))];
    
    // Clear existing options and add the default "All Categories"
    categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
    
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
    
    // Restore last selected filter from local storage, if available.
    const storedFilter = localStorage.getItem("selectedFilter");
    if (storedFilter) {
      categoryFilter.value = storedFilter;
    }
  }
  
  // 5. Function to filter quotes based on the selected category and save the preference.
  function filterQuotes() {
    const categoryFilter = document.getElementById("categoryFilter");
    if (!categoryFilter) return;
    
    const selectedCategory = categoryFilter.value;
    localStorage.setItem("selectedFilter", selectedCategory); // Save preference
    showRandomQuote(); // Update displayed quote based on new filter
  }
  
  // 6. Function to add a new quote and update both the quotes array and category dropdown.
  function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
    
    if (newQuoteText === "" || newQuoteCategory === "") {
      alert("Please enter both quote text and category.");
      return;
    }
    
    // Add the new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    alert("New quote added successfully!");
    
    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    
    // Update the category dropdown in case a new category was introduced.
    populateCategories();
    showRandomQuote();
  }
  
  // 7. Event Listeners:
  // "Show New Quote" button triggers a new random quote display.
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  // Category dropdown change triggers filtering logic.
  document.getElementById("categoryFilter").addEventListener("change", filterQuotes);
  
  // 8. Initialization: Create the add-quote form, populate categories, and display an initial random quote.
  createAddQuoteForm();
  populateCategories();
  showRandomQuote();
  