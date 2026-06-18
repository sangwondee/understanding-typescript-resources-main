let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);
// ไม่สามารถเพิ่มตัวเลขลงใน array ได้เพราะถูกกำหนดที่กำหนดเป็น string ได้

// เราสามารถกำหนดชนิดของ array ได้โดยใช้เครื่องหมาย [] หลังชนิดข้อมูลและกำหนด type ใน array ได้ดังนี้
// let user: (string | number)[];

// หรืออีกวิธีหนึ่งคือการใช้ generic type ของ array ดังนี้
let users: Array<string | number>;

// users = ['Max', 38];
// users.push('Anna');
// users.push(28);

// Tuple คือ array ที่มีจำนวนและชนิดของข้อมูลที่แน่นอน โดยใช้เครื่องหมาย [] และกำหนดชนิดของข้อมูลในแต่ละตำแหน่งได้ดังนี้
// (ไม่จำเป็นต้องใช้))
// let possibleResults: [number, number]; // [1, -1]
// possibleResults = [1, -1];
// error เพราะจำนวนของข้อมูลใน array ไม่ตรงกับที่กำหนดไว้
// possibleResults = [5, 10, 12];

let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: { description: string; id: number };
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: { description: 'Admin', id: 5 }
};