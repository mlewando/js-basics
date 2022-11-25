function saveUserToDatabase(user, done) {
  // some code that is saving user to database
  const someObject = {};
  someObject.done = done;
  someObject.done();
  console.log("some object", someObject);
  // Promise.resolve().then(done);
}

class PublicUserData {
  constructor() {
    this.imSaved = false;
  }
  noteThatImSaved() {
    this.imSaved = true;
  }
}

const user = new PublicUserData();

console.log("user before saving", user); // - { imSaved: false }
saveUserToDatabase(user, function () {
  user.noteThatImSaved();
});
console.log("user after saving", user); // - { imSaved: true }

const user2 = new PublicUserData();
console.log("user2 before saving", user2); // - { imSaved: false }
saveUserToDatabase(user2, user2.noteThatImSaved.bind(user2)); // <------ THIS IS IMPORTANT PEACE, the bind function
// saveUserToDatabase(user2, bind(user2.noteThatImSaved, user2));
console.log("user2 after saving", user2); // - { imSaved: true }

function bind(functionToBind, context) {
  return function () {
    return functionToBind.apply(context);
  };
}

class PublicUserDataBoosted {
  constructor() {
    this.imSaved = false;

    this.noteThatImSaved = this.noteThatImSaved.bind(this);
  }
  noteThatImSaved() {
    this.imSaved = true;
  }
}

const user3 = new PublicUserDataBoosted();
console.log("user3 before saving", user3);
saveUserToDatabase(user3, user3.noteThatImSaved);
console.log("user3 after saving", user3);
