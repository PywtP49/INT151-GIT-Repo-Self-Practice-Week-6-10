// lesson1.js
// ตัวอย่างระบบจัดการ quotes: array ของ object { id, content, author }

// -- id generator แบบง่าย (ไม่ใช้ไลบรารี) --
let lastId = 0;
function idGenerator() {
  // เพิ่ม lastId ทีละ 1 แล้วคืนค่า
  lastId += 1;
  return lastId;
}

// -- ข้อมูลตัวอย่างเริ่มต้น --
const quotes = [
  { id: idGenerator(), content: "The only limit is your mind.", author: "Unknown" },
  { id: idGenerator(), content: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
];

// -- สร้าง quote ใหม่ (mutable แบบตรง ๆ) --
function addQuote(content, author) {
  if (typeof content !== "string" || content.trim() === "") {
    throw new Error("content ต้องเป็น string ที่ไม่ว่าง");
  }
  const q = { id: idGenerator(), content: content.trim(), author: author ? author.trim() : "Unknown" };
  quotes.push(q);
  return q;
}

// -- หาด้วย id --
function findQuoteById(id) {
  return quotes.find(q => q.id === id) || null;
}

// -- ลบด้วย id (mutable) --
function removeQuoteById(id) {
  const idx = quotes.findIndex(q => q.id === id);
  if (idx === -1) return false;
  quotes.splice(idx, 1); // เอาออกจาก array
  return true;
}

// -- อัปเดต quote (แก้ content และ/หรือ author) --
function editQuote(id, newContent, newAuthor) {
  const q = findQuoteById(id);
  if (!q) return null;
  if (typeof newContent === "string" && newContent.trim() !== "") q.content = newContent.trim();
  if (typeof newAuthor === "string" && newAuthor.trim() !== "") q.author = newAuthor.trim();
  return q;
}

// -- คืนค่าข้อความสุ่ม --
function getRandomQuote() {
  if (quotes.length === 0) return null;
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

// -- คืนค่ารายการทั้งหมด แต่คืนเป็น copy เพื่อไม่ให้ผู้เรียกแก้โดยตรง (immutable-ish) --
function listQuotes() {
  return quotes.map(q => ({ ...q }));
}

// -- ฟังก์ชันทดสอบ / ตัวอย่างการใช้งาน --
function demo() {
  console.log("เริ่มต้น quotes:", listQuotes());

  const newQ = addQuote("Practice makes perfect.", "Someone");
  console.log("เพิ่ม:", newQ);

  console.log("หาด้วย id 1:", findQuoteById(1));
  console.log("สุ่ม:", getRandomQuote());

  console.log("แก้ id 2:", editQuote(2, "Code is like humor.", "Cory H."));
  console.log("ลบ id 1:", removeQuoteById(1));

  console.log("สุดท้าย:", listQuotes());
}

// ถ้ารันไฟล์นี้ตรง ๆ ให้โชว์ demo
// if (require && require.main === module) {
//   demo();
// }

// -- รัน demo บนเว็บเบราว์เซอร์ --
window.addEventListener("DOMContentLoaded", () => {
  demo();
});