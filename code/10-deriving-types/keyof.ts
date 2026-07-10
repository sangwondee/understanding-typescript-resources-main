type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys; // Valid key
validKey = 'name'; // Valid key
validKey = 'age'; // Valid key

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null value.');
  }
  return val;
}

const data = { id: 1, isStored: false, values: [1, 2, 3] };
const isStored = getProp(data, 'isStored'); // Valid key

const user = { name: 'Max', age: 30 };
const val = getProp(user, 'age'); // Valid key
