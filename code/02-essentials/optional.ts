// ฟังก์ชันที่รับพารามิเตอร์เป็น string หรือ undefined แบบ optional
function generateError(message?: string) {
  throw new Error(message);
}

generateError();

type User = {
  name: string;
  age: number;
  email?: string; // email เป็น optional property
  role?: 'admin' | 'user'; // role เป็น optional property ที่มีค่าเป็น 'admin' หรือ 'user'
}

let input = '';

const didProvideInput = input ?? false;

console.log(didProvideInput);

