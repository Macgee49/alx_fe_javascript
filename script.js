document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      { text: 'The only limit to our realization of tomorrow is our doubts of today.', category: 'Inspirational' },
      { text: 'Life is what happens when you’re busy making other plans.', category: 'Life' }
      // Add more initial quotes if needed
    ];
  
    function showRandomQuote() {
      const quoteDisplay = document.getElementById('quoteDisplay');
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><small>Category: ${randomQuote.category}</small>`;
    }
  
    function addQuote() {
      const newQuoteText = document.getElementById('newQuoteText').value;
      const newQuoteCategory = document.getElementById('newQuoteCategory').value;
      if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('Quote added successfully!');
      } else {
        alert('Please enter both quote and category.');
      }
    }
  
    document.getElementById('newQuote').addEventListener('click', showRandomQuote);
    document.getElementById('addQuoteBtn').addEventListener('click', addQuote);
  
    // Show a random quote on initial load
    showRandomQuote();
  });
  