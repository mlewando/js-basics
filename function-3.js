function functionDeclaration(arg1) {
  // hoisted
  // this comes from context
  console.log(arg1);
}

const functionExpression = function (arg1) {
  // not hoisted
  // this comes from context
  console.log(arg1);
};

const arrowFunction = (arg1) => {
  // not hoisted
  // this comes from closure
  return `Hello ${arg1}`;
};
//prettier-ignore
const simpleArrowFunction = arg1 => `Hello ${arg1}`

function saveDataToDatabase(data, done) {
  //doing some stuff to save data
  done();
}

class User {
  #saved = false;
  loginsCount = 0;

  constructor(name) {
    this.name = name;
  }

  saveUserToDatabase() {
    saveDataToDatabase(
      {
        id: "generatedId",
        name: this.name,
      },
      function () {
        this.#saved = true;
      }.bind(this)
    );
  }
  saveUserToDatabaseWitArrowFunction() {
    saveDataToDatabase(
      {
        id: "generatedId",
        name: this.name,
      },
      () => {
        this.#saved = true;
      }
    );
  }
  isSaved() {
    return this.#saved;
  }
}

const user = new User("Mat");
user.saveUserToDatabaseWitArrowFunction();
user.isSaved(); //?
