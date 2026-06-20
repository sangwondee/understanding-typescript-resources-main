// enum Role {
//     Admin,
//     Editor,
//     Guest
// }

// Type Aliases & Custom Types
type Role = 'admin' | 'editor' | 'guest';
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}

// Literal types คือ type ที่กำหนด “ค่าแบบเจาะจง” ไม่ใช่แค่ชนิดกว้าง ๆ อย่าง string หรือ number
let userRole: 'admin' | 'editor' | 'guest' = 'admin';

userRole = 'guest';
let possibleRoles: [1 | -1, 1 | -1];
possibleRoles = [1, -1];

// userRole = Role.Guest;
function access(role: Role) {
//
}

