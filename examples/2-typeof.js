"use strict";

const bool = true;
const nullValue = null;
const undefinedValue = undefined;
const numberValue = 3;
const stringValue = "string";
const symbolValue = Symbol("symbol");
const bigIntValue = BigInt(3); // 3n

console.log(typeof bool);
console.log(typeof numberValue);
console.log(typeof stringValue);
console.log(typeof symbolValue);
console.log(typeof bigIntValue);

console.log(typeof nullValue);
console.log(nullValue === null);
console.log(typeof undefinedValue);
console.log(undefinedValue === undefined);
