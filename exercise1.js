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

// console.log("user1", login("user1", "123")); // ->
// console.log("admin", login("admin", "123")); // -> some possibility to check if this user is an admin, his/her name and surname
