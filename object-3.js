const object1 = { a: 1 }; // { a = { value: 1, writable: true, enumerable: true, configurable: true } }
const object2 = { b: 2 };

Object.setPrototypeOf(object1, object2);

console.log(object1);
console.log(object2);
console.log(object1.b);

Object.defineProperty(object1, "c", {
  value: 2,
  enumerable: true,
  configurable: true,
});

console.log(Object.keys(object1));
console.log(Object.getOwnPropertyDescriptor(object1, "c"));
object1.c = 4;
console.log(object1.c);
Object.defineProperty(object1, "c", {
  value: 2,
  enumerable: true,
  writable: true,
});
object1.c = 4;
console.log(object1.c);

const object3 = {
  a: 1,

  getSomeValue() {
    return this.a * 3;
  },
  setSomeValue(value) {
    this.a = value / 3;
  },

  get b() {
    return 3 * this.a;
  },
  set b(value) {
    this.a = value / 3;
  },

  set c(value) {
    this.a = value * 3;
  },
};
console.log(Object.getOwnPropertyDescriptor(object3, "b"));
console.log(object3.b);
object3.a = 3;
console.log(object3.b);
object3.b = 6;
console.log(object3.a);
console.log(object3.b);
console.log(Object.getOwnPropertyDescriptor(object3, "b"));

object3.c = 2;
console.log(object3.a);
console.log(object3.c);
console.log(Object.getOwnPropertyDescriptor(object3, "c"));
