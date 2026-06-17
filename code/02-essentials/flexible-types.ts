// AnyType สามารถกำหนดค่า type ได้หลาย type
// let age: any

// หมายเหตุ: การใช้ any type จะทำให้ TypeScript
// any ใช้ได้ใน use-case แบบนี้ครับ:
// ตอน migrate จาก JavaScript มา TypeScript แล้ว type ยังไม่ชัด
// ตอนรับข้อมูลจาก third-party library/API ที่ยังไม่รู้ shape แน่นอน
// ตอน prototype เร็ว ๆ ยังไม่อยากล็อก type
// ตอนทำงานกับ legacy code ที่ type ซับซ้อนมากและค่อย ๆ refactor ทีหลัง
// ตอน library ไม่มี type definition หรือ type ผิด

let age: string | number = 36;

// ...

age = '37';
age = false;
age = {};
age = [];