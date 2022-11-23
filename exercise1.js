const usersModule = (function () {
  const users = {
    admin: {
      pass: "123",
      name: "adf",
      surname: "asdf",
      role: "admin",
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

    return {
      role: user.role,
      name: user.name,
      surname: user.surname,
    };
  }

  function register(userData) {
    // validations
    // check if user is not already there

    users[userData.login] = {
      pass: userData.pass,
      name: userData.name,
      surname: userData.surname,
      role: "user",
    };
  }
  return { login, register };
})(); // IIFE - immediately invoke function expression

const register = usersModule.register;
const login = usersModule.login;

// const userData = login("admin", "123");
// pseudocode:
register({
  name: "Mateusz",
  surname: "Lewandowski",
  login: "mat",
  pass: "test",
});

console.log(login("mat", "test")); // -> {name: 'Mateusz', surname: 'Lewandowski', role: 'user'}

// const password = "test";
// const object = {
//   pass: "asdfsd",
//   password,
// }; //?
