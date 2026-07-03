
type DataSource =  {
  [prop: string]: number | boolean | undefined;
}

// คือการบอกว่า object นี้มี property ชื่ออะไรก็ได้ แต่ค่าของ property ทุกตัวต้องเป็น number, boolean, หรือ undefined เท่านั้น.
// เหมาะกับ object ที่ key ไม่แน่นอน เช่น config, dictionary, map, feature flags, cache, dynamic data


let someObj : Record<string, number | boolean | undefined> = {
  id: 1,
  isOpen: true,
  errorMessage: undefined
}

// Record คือ utility type ของ TypeScript ที่ใช้สร้าง object type โดยกำหนด key และ value type ของ property ใน object นั้น
// Record<Keys, Type> จะสร้าง object type ที่มี property ชื่อ Keys (string | number | symbol) และค่าของ property เป็น Type
// เหมือนกับการเขียน DataSource  ด้านบนซึ่งเขียนคนละแบบ แต่ Record จะมีประโยชน์มากกว่าเมื่อเราต้องการสร้าง object type ที่มี key และ value type ที่กำหนดเอง

let store : DataSource = {};
store.id = 1;
store.isOpen = true;
// store.name = 'My Store'; // Error: Type 'string' is not assignable to type 'number | boolean | undefined'.

let roles = ['admin', 'user', 'guest'] as const;
// roles.push('superadmin'); // Error: Property 'push' does not exist on type 'readonly ["admin", "user", "guest"]'.
let firstRole = roles[0]; // 'admin' 


const dataEntries = {
  entry1: 0.1,
  entry2: 0.2,
} satisfies Record<string, number>;

// satisfies คือ operator ของ TypeScript ที่ใช้ตรวจสอบว่า object หรือ expression ตรงตาม type ที่กำหนดหรือไม่ โดยไม่เปลี่ยน type ของ object หรือ expression นั้น