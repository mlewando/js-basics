function login(login, password) {
  const users = {
    user1: {
      pass: "123",
    },
    admin: {
      pass: "123",
    },
  };

  if (!users[login]) {
    console.log("not found");
    return false;
  }

  if (users[login].pass !== password) {
    console.log("wrong pass");
    return false;
  }

  return true;
}

login("user1", "123") === true; //?
// login("user1", "incorrectPassword") === false; //?
// login("someUserThatDoesNotExists", "anyPassword") === false; //?

const m = new Map();
m.set("login", "value");
m; //?
