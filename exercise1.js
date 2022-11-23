const { login, register } = (function UsersModule() {
  const users = {
    admin: {
      name: "Admin",
      surname: "JS",
      role: "admin",
      pass: "123",
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

    const { pass, ...publicUserData } = user;

    if (user.role === "admin") {
      publicUserData.changeRole = function (userLogin, newRole) {
        if (users[userLogin]) {
          users[userLogin].role = newRole;
        }
      };
    }

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
admin.changeRole("mat", "admin");

console.log(login("mat", "test"));
console.log(login("user", "test"));
