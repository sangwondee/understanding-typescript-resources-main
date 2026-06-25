// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
activeHobbies // ['Hiking', 'Sports', 'Cooking']

// ถ้าหากเป็น .push จะได้เป็น ['Hiking', ['Sports', 'Cooking']] เลย แต่ถ้าเป็น ... จะได้เป็น ['Hiking', 'Sports', 'Cooking'] เลย
// activeHobbies ['Hiking', ['Sports', 'Cooking']]


// ต่างจาก .push เลยตรงๆ ที่ .push จะเพิ่ม array เข้าไปเป็น element ของ array อีกที แต่ ... จะเอา element ของ array นั้นๆ มาใส่ใน array ใหม่เลย

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...person };

// ...numbers เพราะเราจะไม่รู้ว่ามีจำนวนกี่ตัวเลขที่เราจะส่งเข้ามาในฟังก์ชัน add ดังนั้นเราจึงใช้ ...numbers เพื่อให้สามารถรับจำนวนตัวเลขได้ไม่จำกัด
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 5);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);