interface User {
  name: string;
  age: number;
}

type UsersArray = User[];

const prettyPrintWilder = (users: UsersArray): void => {
  users.map((user) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders: UsersArray = [];
const user1: User = { name: "Pierre", age: 23 };
const user2: User = { name: "Paul", age: 31 };
const user3: User = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);