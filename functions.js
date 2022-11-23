const someModule = (function () {
  const variable = "something";
  // do some logic, define some functions...

  function doSomeWork() {}

  return {
    doSomeWork: doSomeWork,
  };
})();

doSomeWork(); // -> error
