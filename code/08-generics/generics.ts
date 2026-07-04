//
// Generic type คือ type แบบมีช่องว่างให้ใส่ type ทีหลัง เช่น DataStore<T> 
// แล้วตอนใช้ค่อยกำหนดว่า T เป็น number, string, 
// User หรือ type อื่น ๆ ทำให้ type เดียวใช้ซ้ำได้หลายสถานการณ์.

let names: Array<string> = ['Alice', 'Bob', 'Charlie'];

// keyword คือ <T>
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Alice';
store.isActive = true;


// Generic function คือ function ที่มีช่องว่างให้ใส่ type ทีหลัง เช่น function merge<T>(a: T, b: T) { ... } 
// แล้วตอนใช้ค่อยกำหนดว่า T เป็น number, string, User หรือ type อื่น ๆ ทำให้ function เดียวใช้ซ้ำได้หลายสถานการณ์.
// เราสามารถกำหนด type parameter ได้หลายตัว เช่น function merge<T, U>(a: T, b: U) { ... }
function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const id = merge(1, 'AA'); // [1, 'AA']


function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const obj = mergeObj({ name: 'Alice' }, { age: 30 });
console.log(obj);

class User<T> {
  constructor(public id: T) {}
}

const user1 = new User('id-123');