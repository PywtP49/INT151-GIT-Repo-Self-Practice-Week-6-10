// ดึง Element จาก HTML
const bgColorInput = document.getElementById('bgColor');
const fontColorInput = document.getElementById('fontColor');
const fontSizeSelect = document.getElementById('fontSize');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const demoText = document.getElementById('demoText');
const container = document.querySelector('.container');

// ฟังก์ชันอัปเดต UI ตามค่าที่เลือก
function updatePreview() {
  document.body.style.background = bgColorInput.value;
  demoText.style.color = fontColorInput.value;

  let size = fontSizeSelect.value;
  if (size === 'small') demoText.style.fontSize = '1rem';
  else if (size === 'medium') demoText.style.fontSize = '1.5rem';
  else if (size === 'large') demoText.style.fontSize = '2rem';
}

// โหลดค่าที่เคย Save ไว้
function loadSettings() {
  const savedBg = localStorage.getItem('bgColor');
  const savedFont = localStorage.getItem('fontColor');
  const savedSize = localStorage.getItem('fontSize');

  if (savedBg) {
    bgColorInput.value = savedBg;
    document.body.style.background = savedBg;
  }

  if (savedFont) {
    fontColorInput.value = savedFont;
    demoText.style.color = savedFont;
  }

  if (savedSize) {
    fontSizeSelect.value = savedSize;
    if (savedSize === 'small') demoText.style.fontSize = '1rem';
    else if (savedSize === 'medium') demoText.style.fontSize = '1.5rem';
    else demoText.style.fontSize = '2rem';
  }
}

// ปุ่ม Save เก็บค่าลง localStorage
saveBtn.addEventListener('click', () => {
  localStorage.setItem('bgColor', bgColorInput.value);
  localStorage.setItem('fontColor', fontColorInput.value);
  localStorage.setItem('fontSize', fontSizeSelect.value);

  container.style.boxShadow = '0 0 35px #00ffff';
  demoText.textContent = 'Settings Saved!';
  setTimeout(() => (demoText.textContent = 'System Preview Text'), 1500);
});

// ปุ่ม Reset ล้างค่ากลับเริ่มต้น
resetBtn.addEventListener('click', () => {
  localStorage.clear();
  bgColorInput.value = '#000000';
  fontColorInput.value = '#ffffff';
  fontSizeSelect.value = 'medium';
  demoText.style.fontSize = '1.5rem';
  document.body.style.background = 'radial-gradient(circle at 20% 20%, #0b0c10 0%, #000000 100%)';
  demoText.style.color = '#ffffff';
  demoText.textContent = 'Reset Complete';
  setTimeout(() => (demoText.textContent = 'System Preview Text'), 1500);
});

// อัปเดต Preview แบบ real time เมื่อเลือกค่า
bgColorInput.addEventListener('input', updatePreview);
fontColorInput.addEventListener('input', updatePreview);
fontSizeSelect.addEventListener('change', updatePreview);

// โหลดค่าที่เคยบันทึกไว้เมื่อเปิดหน้าเว็บ
loadSettings();
