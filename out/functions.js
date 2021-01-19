/**
 * Functions
 * @param num
 * @returns
 */
function square(num) {
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
function addTwoNumber(x, y) {
    return x + y;
}
let myAddTwoNumber = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Anh"); // works correctly now
let result2 = buildName("Tuan", "Anh"); // ah, just right
