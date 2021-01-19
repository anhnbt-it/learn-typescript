/**
 * if-else
 */
let count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log(count);
/**
 * for
 */
const keys = "abcdef";
for (let idx = 0; idx < keys.length; idx++) {
    console.log(keys[idx]);
}
/**
 * while
 */
let idx = 0;
while (idx < keys.length) {
    console.log(keys[idx]);
    idx++;
}
/**
 * do-while
 */
let idx2 = 0;
do {
    console.log(keys[idx2]);
    idx2++;
} while (idx2 < keys.length);
/**
 * for-of
 */
for (const item of keys) {
    console.log(item);
}
/**
 * for-in
 */
const userAccount = {
    name: 'Bob',
    age: 55
};
for (const key in userAccount) {
    console.log(`${key}: ${userAccount[key]}`);
}
