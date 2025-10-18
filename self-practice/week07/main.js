// ดึงปุ่มและหัวข้อมาเก็บไว้ในตัวแปร
const btnChange = document.getElementById("btnChange");
const title = document.getElementById("title");

// เพิ่ม Event Listener เมื่อคลิกปุ่ม
btnChange.addEventListener("click", () => {
  // เปลี่ยนข้อความใน h1
  title.textContent = "Hello DOM! 👋";
});


// เพิ่มรายการผลไม้ใหม่เข้าไปใน list
const btnAdd = document.getElementById("btnAdd");
const fruitList = document.getElementById("fruitList");

btnAdd.addEventListener("click", () => {
  // สร้าง <li> ใหม่
  const newFruit = document.createElement("li");
  // ตั้งชื่อผลไม้ใหม่
  newFruit.textContent = "Mango 🥭";
  // เพิ่มเข้าไปใน <ul>
  fruitList.appendChild(newFruit);
});

const btnToggle = document.getElementById("btnToggle");
const message = document.getElementById("message");

btnToggle.addEventListener("click", () => {
  // ถ้าข้อความถูกซ่อนอยู่ → แสดง
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    // ถ้าแสดงอยู่ → ซ่อน
    message.style.display = "none";
  }
});

const btnCount = document.getElementById("btnCount");
const countText = document.getElementById("count");
let counter = 0;

btnCount.addEventListener("click", () => {
  counter++;
  countText.textContent = `Clicked: ${counter} times`;
});

const btnName = document.getElementById("btnName");
const greeting = document.getElementById("greeting");

btnName.addEventListener("click", () => {
  // แสดงกล่อง prompt ให้ผู้ใช้กรอกชื่อ
  const name = prompt("What is your name?", "Your Name");
  if (name) {
    greeting.textContent = `Hello, ${name}! 😊`;
  }
});

const popCat = document.getElementById("popCat");
const popScore = document.getElementById("popScore");

let catScore = 0;
const catClosed = "./img/cat_closed.png";
const catOpen = "./img/cat_open.png";

popCat.addEventListener("click", () => {
  // เพิ่มคะแนน
  catScore++;
  popScore.textContent = catScore;

  // เปลี่ยนภาพแมวเป็นอ้าปาก
  popCat.src = catOpen;

  // ใช้ setTimeout เพื่อให้ปิดปากหลังจาก 0.3 วินาที
  setTimeout(() => {
    popCat.src = catClosed;
  }, 300);
});

// โค้ดนี้จะเปลี่ยนสีพื้นหลังทุกๆ 1 วินาที
// (สามารถใส่ปุ่มเปิด-ปิดเพิ่มได้หากอยากฝึกต่อ)
let colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7"];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // วนกลับไปเริ่มใหม่
}, 1000);
