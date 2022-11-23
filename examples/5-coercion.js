const someVariable = [false]; //?

if (someVariable) {
  console.log("someVariable is truthy");
} else {
  console.log("someVariable is falsy");
}

const test = "3" / 2; //?
[] + 1; //?
Boolean(Number([])); //?
Boolean([]); //?

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

add("one, ", "two"); //?
add([], false); //?

if (add(1, 2) === "3") {
  console.log("true");
}

const s = Symbol("a");
`test ${String(s)}`; //?
Symbol.hasInstance; //?
