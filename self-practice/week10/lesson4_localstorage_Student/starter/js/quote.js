let quotes = []
let nextId = 1

function setQuotes(loadedQuotes) {
  if (Array.isArray(loadedQuotes) && loadedQuotes.length > 0) {
    quotes = loadedQuotes
    nextId = Math.max(...quotes.map((q) => q.id)) + 1
  } else {
    quotes = []
    nextId = 1
  }
}

function addQuote(content, author) {
  const prevLength = quotes.length
  const newQuote = { id: nextId++, content, author }

  if (quotes.push(newQuote) === prevLength + 1) {
    return newQuote
  }
  return undefined
}

function updateQuote(id, content, author) {
  const quote = quotes.find((q) => q.id === id)
  if (quote) {
    quote.content = content
    quote.author = author
  }

  return quote
}

function deleteQuote(id) {
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }
  return index
}

function getQuoteById(id) {
  return quotes.find((q) => q.id === parseInt(id))
}

function getAllQuotes() {
  const currentQuotes = [...quotes]
  return currentQuotes
}

export {
  addQuote,
  deleteQuote,
  updateQuote,
  getAllQuotes,
  getQuoteById,
  setQuotes, 
}