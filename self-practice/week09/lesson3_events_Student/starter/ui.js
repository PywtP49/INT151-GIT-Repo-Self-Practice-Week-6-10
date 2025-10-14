// Lesson 3 - Events Starter

import { addQuote as addQuoteData, updateQuote, deleteQuote, getAllQuotes } from './quote.js';

// Select DOM elements
const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');

// Create a quote element
function createQuoteElement(quote) {
  const div = document.createElement('div');
  div.dataset.id = quote.id;

  const contentP = document.createElement('p');
  contentP.textContent = quote.content;
  div.appendChild(contentP);

  const authorP = document.createElement('p');
  authorP.textContent = quote.author;
  div.appendChild(authorP);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.dataset.id = quote.id;
  div.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.dataset.id = quote.id;
  div.appendChild(deleteBtn);

  div.addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (e.target.classList.contains('edit-btn')) {
      const q = getAllQuotes().find(q => q.id === id);
      contentInput.value = q.content;
      authorInput.value = q.author;
      idInput.value = q.id;
    } else if (e.target.classList.contains('delete-btn')) {
      deleteQuote(id);
      renderQuotes();
    }
  });

  return div;
}

// Add quote to DOM
function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote);
  quoteList.appendChild(el);
}

// Render all quotes
function renderQuotes() {
  quoteList.innerHTML = '';
  getAllQuotes().forEach(addQuoteToDOM);
}

// Show random quote
function showRandomQuote() {
  const allQuotes = getAllQuotes();
  if (allQuotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --';
    return;
  }
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const q = allQuotes[randomIndex];
  randomDisplay.textContent = `"${q.content}" — ${q.author}`;
}

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;

  if (content && author) {
    if (id) {
      updateQuote(Number(id), content, author);
    } else {
      addQuoteData(content, author);
    }
    form.reset();
    idInput.value = '';
    renderQuotes();
  }
});

// Random quote button
randomBtn.addEventListener('click', showRandomQuote);

renderQuotes();