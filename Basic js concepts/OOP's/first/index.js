// Creating an Object

// Object created through object literal
const obj = {
    name: "hanu",
    age : 30,
};
console.log(obj);

// Number, String, boolean, null, undefined --> Primitive data type  eg.

let  a = "Singh";
let  b = a;

console.log(a);
console.log(b);

 a = "Hanu"

console.log(a);  // value will change 
console.log(b);  // value will not change because just value is shared

// Object is reference data Type
const obj2 = obj;
obj2.name = "harbinder";
console.log(obj2);
console.log(obj);  // changed because the refrence is same

