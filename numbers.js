const number = 2123.234; // new Number(2343)
const bigInt = 23432n; // BigInt(123), new BigInt(23433)

Number.MAX_VALUE; //?
Number.MAX_SAFE_INTEGER; //?

console.log(Number.MAX_VALUE + 1);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

console.log(Number.MAX_VALUE * 10);
console.log(Number.POSITIVE_INFINITY);

const a = "asdf";
a / 5; //?
Number.NaN;

Math.pow(2, 3); //?
Math.abs(-3); //?
Math.abs(3); //?

// 10 based system:
// (+/-1) * x * 10^y
// x = 9999, y = 9 -> 9 999 000 000 000
// x = MAX_SAFE_INTEGER, y = 0 -> MAX_SAFE_INTEGER
// MAX_SAFE_INTEGER + 1 -> x = ? y = 1 -> XXXXXXXX0
