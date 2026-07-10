type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

let mathOperations: Operations = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b
}

// เราสามารถใช้ mapped types เพื่อสร้าง type ใหม่จาก type ที่มีอยู่แล้วได้
// ในตัวอย่างนี้ เราสร้าง type Result<T> ที่มี property เหมือนกับ type T แต่มีค่าเป็น number แทน
// เราใช้ keyof T เพื่อดึง property ของ type T ออกมาเป็น union type ของ string
// จากนั้นเราสามารถใช้ mapped types เพื่อสร้าง type ใหม่ที่มี property เหมือนกับ type T แต่มีค่าเป็น number แทน
type Result<T> = {
  [K in keyof T]?: number;
  // เราใช้ optional property (?) เพื่อให้ property ของ type Result<T> เป็น optional
  // อาจจะมี property บางตัวที่ไม่ถูกกำหนดค่าได้
}

let results: Result<Operations> = {
  add: mathOperations.add(5, 2), // add: 7
  subtract: mathOperations.subtract(5, 2) // subtract: 3
}

console.log(results); // { add: 7, subtract: 3 }


