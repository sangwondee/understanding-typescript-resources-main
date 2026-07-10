type AppUser =  {
  name: string;
  age: number;
  permission: {
    id: number;
    title: string;
    description: string;
  }[]
}

// เราสามารถใช้ indexed access types เพื่อเข้าถึง type ของ property ที่อยู่ภายใน object ได้
// ในตัวอย่างนี้ เราเข้าถึง type ของ property permission ของ AppUser
// ซึ่งเป็น array ของ object ที่มี property id, title, description และ role
// เพื่อไม่ต้องเขียน ซ้ำซ้อน เราสามารถใช้ indexed access types เพื่อเข้าถึง type ของ property role ของ object 
//  ที่อยู่ภายใน array ของ permission ได้
type Perms = AppUser['permission'];
type Perm = Perms[number]; 
// เราใช้ [number] เพื่อเข้าถึง type ของ object ที่อยู่ภายใน array ของ permission

type Names = string[]; // type ของ Names เป็น array ของ string
type Name = Names[number]; // type ของ Name เป็น string เพราะเรากำหนดให้ Names เป็น array ของ string
