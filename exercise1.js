function login(login, password) {
  const users = {
    user1: {
      pass: "123",
    },
    admin: {
      pass: "123",
      name: "adf",
      surname: "asedf",
      role: "admin",
    },
  };

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

const userData = login("admin", "123");
// pseudocode:
register({
  name: "Mateusz",
  surname: "Lewandowski",
  login: "mat",
  pass: "test",
});

login("mat", "test"); // -> {name: 'Mateusz', surname: 'Lewandowski', role: 'user'}
