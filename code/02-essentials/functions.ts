// : number ด้านหลังคือการคำกัดประเภทของค่าที่ฟังก์ชันนี้จะส่งกลับมา ซึ่งในที่นี้คือ number โดย typeScript จะ return ค่าเป็น number ให้กับฟังก์ชัน add อยู่แล้ว
function add (a: number, b: number) {
  return a + b;
}

// 
function log (message: string): void {
  console.log(message);
}
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (message: string): void => {
  console.log(message);
}

function performJob(cb : (msg: string) => void) {
  console.log('Performing job...');
  cb('Job done !!! .');
}

performJob(logMsg);

type User = {
  name: string;
  age: number;
  geeter: () => string;
}

const user: User = {
  name: 'John',
  age: 30,
  geeter() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

console.log(user.geeter());