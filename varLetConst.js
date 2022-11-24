const users = [{ login: "user1" }, { login: "user2" }];

let user;
for (let i = 0; i < users.length; i++) {
  if (users[i].login === "user2") {
    user = users[i];
  }
}

// here i does not exists any more
console.log(user);
