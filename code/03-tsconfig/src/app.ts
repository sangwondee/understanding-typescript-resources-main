import fs from 'node:fs';

fs.readFileSync('./src/app.ts', 'utf8');

let userName: string;

userName = 'Max';

console.log(userName);

function add(a: any, b: any) {
  return a + b;
}

console.log(add(3, 2));