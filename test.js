var test = "234";
var b = "3";

test = test + "56";
console.log(test);

var testObject = {
  a: 5,
};

const d = null;

function isNull(val) {
  return val === null;
}

console.log(d instanceof Date);
console.log(typeof "asdfds");
console.log(typeof true);
console.log(typeof 123);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof new Date());
console.log(typeof { a: 5 });
console.log(typeof isNull);
/**
 * Primitives:
 *
 * undefined
 * null
 * boolean
 * number - 64-bit floating point
 * BigInt
 * string
 * Symbol
 *
 *
 * Objects:
 * Object
 *  Array
 * Date
 * Function
 * Map
 *
 * typeof - primitive types
 * instanceof - complex types/objects
 */
