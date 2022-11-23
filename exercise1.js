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

  const amountOfUsers = Object.keys(users).length;
  return {
    role: user.role,
    name: user.name,
    surname: user.surname,
    countOtherUsers: function countOtherUsers() {
      return amountOfUsers;
    },
  };
}

const userData = login("admin", "123"); // {role: string, name: string, surname: string, countOtherUsers: () => number}
userData.countOtherUsers(); // -> 2 it is getting it from users map, and now it's not any more

userData.displayAvatar();
// userData.pass = "other";
const userData2 = login("admin", "123");

console.log({ userData, userData2, same: userData === userData2 }); //? 2 for false

// console.log("2", login("admin", "somethingDifferent")); //? 0 for false

// console.log("user1", login("user1", "123")); // ->
// console.log("admin", login("admin", "123")); // -> some possibility to check if this user is an admin, his/her name and surname
