"use strict";

(function () {
  const a = 3;
  let b = 4223233;
  console.log(a);
  console.log(b);
})();

(function () {
  const func1 = () => 4;
  function func2() {
    return 4;
  }
  const func3 = function () {
    return 4;
  };

  typeof func1; //?
  typeof func2; //?
  typeof func3; //?
  Function instanceof Object; //?
  func1 instanceof Function; //?
  func2 instanceof Function; //?
  func3 instanceof Function; //?
  func1 instanceof Object; //?
  String instanceof Object; //?
  "sdf" instanceof String; //?
  String("sdf") instanceof String; //?
  const arr = new Array(3).fill(3); //?
  arr.length; //?
  arr.forEach((a) => {
    console.log(a); //?
  });
})();

(function () {
  function A() {
    this.v = 4;
  }
  A.prototype = {
    test: function () {
      return this.v;
    },
  };

  const inst = new A();
  function B() {
    A.call(this);
    this.v2 = "5 . fghfghfgg";
  }
  Object.setPrototypeOf(B.prototype, A.prototype);
  // blabla
  A.prototype; //?
  inst.__proto__; //?

  A.prototype === inst.__proto__; //?
  A.prototype.__proto__; //?

  inst.test(); //?
  inst.v; //?
  inst.toString(); //?

  const inst2 = new B();
  inst2.v2; //?
  inst2.v; //?
  inst2.test(); //?

  class C {
    constructor() {
      this.v = 4;
    }
    test() {
      return this.v;
    }
    #test2() {
      return this.v + 3;
    }
    get test3() {
      return this.#test2();
    }
  }
  const inst3 = new C();
  inst3.test(); //?
  inst3.test3; //?
  Object.getOwnPropertyNames(Object.getPrototypeOf(inst3)); //?
  // console.log(inst3.#test2()); //?

  typeof inst; //?
  typeof inst2; //?
  typeof inst3; //?
  typeof C; //?
})();

`${0.7 * 3 * 1000}`; //?

(() => {
  f1(1, 5); //?
  function f1() {
    return ["f1", ...arguments];
  }
  const f2 = function () {
    return ["f2", ...arguments];
  };

  const f3 = (...args) => {
    return ["f3", ...args];
  };
  const f4 = (...args) => ["f4", ...args];
  const f5 = () => ({ name: "f5", args: [...arguments] });
  f2(1, 5); //?
  f3(1, 5); //?
  f4(1, 5); //?
  f5(1, 5); //?

  typeof f1; //?
  console.log(typeof Object);
  const fO = new Object();
  console.log(typeof fO);

  f1 instanceof Function; //?
  Object instanceof Function; //?
})();

(() => {
  function A(v) {
    var variable = "v: " + v;
    function B() {
      return variable;
    }
    return B;
  }

  const b1 = A(1);
  const b2 = A(2);
  b1 === b2; //?
  b1(); //?
  b2(); //?

  ("b" + "a" + +"a" + "a").toLowerCase(); //?
})();

(() => {
  const b = 23432432; //?
  typeof b; //?
})();

(() => {
  Number.MAX_VALUE; //?
  Number.MAX_SAFE_INTEGER; //?
  Number.isSafeInteger(Number.MAX_VALUE); //?
})();

(() => {
  const s1 = new String("s");
  const s2 = String("s");
  const s3 = "s";

  s1 === s2; //?
  s1 === s3; //?
  s2 === s3; //?
})();
