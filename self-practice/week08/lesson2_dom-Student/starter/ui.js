// Step 1: Create an array to hold quote objects
let quotes = [
  { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
]

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quoteList')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    // เคลียร์ข้อมูลเก่าทั้งหมดก่อน
    quoteList.innerHTML = ''
    // วนลูปผ่านทุก quote แล้วสร้าง <p> สำหรับแต่ละอัน
    for (let i = 0; i < quotes.length; i++) {
        const q = quotes[i]
        const p = document.createElement('p')
        p.textContent = `"${q.content}" — ${q.author}`
        quoteList.appendChild(p)
  }
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
renderQuotes();
