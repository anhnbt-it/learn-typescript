/**
 * Functions
 * @param num 
 * @returns
 */
function square(num: number): number {
    return num * num;
}
console.log(square(5));

// Named function
function add(x, y) {
    return x + y;
}

// Anomyous function
let myAdd = function (x, y) {
    return x + y;
};

let z = 100;
function addToZ(x, y) {
    return x + y + z;
}

/**
 * Function Types
 */
function addTwoNumber(x: number, y: number): number {
    return x + y;
}

let myAddTwoNumber = function(x: number, y: number): number {
    return x + y;
}

function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}
let result1 = buildName("Anh"); // works correctly now
let result2 = buildName("Tuan", "Anh") // ah, just right