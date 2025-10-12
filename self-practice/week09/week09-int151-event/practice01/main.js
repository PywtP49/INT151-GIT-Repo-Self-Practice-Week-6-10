const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const message = document.querySelector("p");
 
form.addEventListener("submit", function (e) {
  e.preventDefault(); // ป้องกันการ reload หน้า
 
  // ดึงค่าจาก input
  const user = username.value.trim();
  const mail = email.value.trim();
  const pass = password.value.trim();
  const confirm = confirmPassword.value.trim();
 
  // ตรวจสอบค่าว่าง
  if (!user || !mail || !pass || !confirm) {
    message.textContent = "missing some values, please try again!";
    message.style.color = "red";
    return;
  }
 
  // ตรวจสอบรหัสผ่านไม่ตรงกัน
  if (pass !== confirm) {
    message.textContent = "password and confirm do not match, check again";
    message.style.color = "red";
    return;
  }
 
  // ถ้าทุกอย่างถูกต้อง
  message.textContent = "your data completed";
  message.style.color = "green";
 
  // ล้างค่าในฟอร์ม
  form.reset();
});