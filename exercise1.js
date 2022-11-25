class PublicUserData {
  name;
  #user;

  constructor(user) {
    this.name = user.name;
    this.#user = user;
    this.#privateMethod();
  }

  changePassword(oldPassword, newPassword) {
    if (this.#user.pass === oldPassword) {
      this.#user.pass = newPassword;
    }
  }

  #privateMethod() {
    console.log("Private method");
  }
}

class AdminPublicData {} //implement this

const { login, register } = (function UsersModule() {
  const users = {
    admin: {
      name: "Admin",
      surname: "JS",
      role: "admin",
      pass: "123",
    },
    user: {
      name: "user",
      surname: "normal",
      role: "user",
      pass: "test",
    },
  };

  function login(login, password) {
    const user = users[login];

    if (!user) {
      return false;
    }

    if (user.pass !== password) {
      return false;
    }

    const publicUserData = new PublicUserData(user);

    // const { pass, ...publicUserData } = user;

    // if (user.role === "admin") {
    //   publicUserData.changeRole = function (userLogin, newRole) {
    //     if (users[userLogin]) {
    //       users[userLogin].role = newRole;
    //     }
    //   };
    // }

    // publicUserData.changePassword = function (oldPassword, newPassword) {
    //   if (users[login].pass === oldPassword) {
    //     users[login].pass = newPassword;
    //   }
    // };

    return publicUserData;
  }

  function register(userData) {
    // validations of input
    // check if user is not already there

    users[userData.login] = {
      pass: userData.pass,
      name: userData.name,
      surname: userData.surname,
      role: "user",
    };
  }
  // -- admin can change the role of users - what's the pros and cons of both solutions (A and B)

  // it cannot be possible to have zero admins (probably you should use Object.keys or Object.values and a for loop)
  // user can change it's own password
  // admin can remove users*
  // replace the simple objcets in users map with instances of a classes
  // - admin class should extend user
  // - don't use class keyword (functions and prototypes are allowed)
  // - eg. users[login].pass -> users[login].getPassword() (so use methods to access data)

  return { login, register };
})(); // IIFE - immediately invoke function expression

register({
  name: "Mateusz",
  surname: "Lewandowski",
  login: "mat",
  pass: "test",
});
register({
  name: "Some",
  surname: "User",
  login: "user",
  pass: "test",
});

const admin = login("admin", "123");
admin.changeRole("mat", "admin"); // I want this back

const loggedInUser = login("mat", "test");
loggedInUser.changePassword("test", "test2");

loggedInUser.user; //?
loggedInUser.name = "Jan";

console.log(loggedInUser); // Jan
// loggedInUser.user.role = "admin";
// loggedInUser.user; //?

console.log(login("mat", "test"));
// console.log(login("user", "test"));
