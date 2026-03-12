var x = 10;
var y = 20;
console.log("x:", x, "type:", typeof(x));
console.log("y:", y, "type:", typeof(y));

let name = "John";
console.log("name:", name, "type:", typeof(name));
let isStudent = true;
console.log("isStudent:", isStudent, "type:", typeof(isStudent));
let g;
console.log("g:", g, "type:", typeof(g));
let emptyValue = null;
console.log("emptyValue:", emptyValue, "type:", typeof(emptyValue));
let person = {
    firstName: "Alice",
    age: 25
};
console.log("person:", person, "type:", typeof(person));
let sym = Symbol("id");
console.log("sym:", sym, "type:", typeof(sym));
let bigNumber = 123456789012345678901234567890n;
console.log("bigNumber:", bigNumber, "type:", typeof(bigNumber));