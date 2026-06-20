const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

if (!inputEl) {
  throw new Error('Element not found!');
}

// ถ้า inputEl มีค่า เช่นเป็น <input> จริง ๆ → แสดง inputEl.value
// ถ้า inputEl เป็น null หรือ undefined → แสดง undefined แทน และไม่ทำให้โปรแกรม error
console.log(inputEl?.value);