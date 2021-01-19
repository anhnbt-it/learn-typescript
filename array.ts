/**
 * Khoi tao mang
 */

const list: number[] = [1, 2, 3];

const categories: Array<string> = ['Sport', 'IT', 'Car'];

/**
 * Thao tac voi mang
 */
console.log('In ra mang list');
list.forEach((num) => 
    console.log(num.toFixed(2))
);
console.log('In ra mang categories')
categories.forEach((str) => 
    console.log(str.toLowerCase())
);
// convert mang tu dang nay sang dang khac
const listSquare = list.map(num => num * num);
console.log(listSquare);
// Output: [1, 4, 9]

// loc cac phan tu thoa man
const result = categories.filter(
    str => str.length > 2
);
console.log(result);
// Output: ['Sport', 'Car']

/**
 * Tuple
 */
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["Hello", 10];
console.log(x[0].substr(1)); // OK