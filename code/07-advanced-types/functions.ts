// Function Overloads
function getLength(val: any[]): number;
function getLength(val: string): string;

function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `String with ${numberOfWords} words`;
  }
  return val.length;
}

const numberOfWords = getLength('Hello World');
numberOfWords.length; // String with 2 words
const numItems = getLength(['Sports', 'Cooking', 'Traveling']);