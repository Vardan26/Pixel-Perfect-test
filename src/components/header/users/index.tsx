import React from "react";
import user1 from "../../../assets/images/person1.png";
import user2 from "../../../assets/images/person2.png";
import user3 from "../../../assets/images/person3.png";
import { UserItem } from "./user-item";

export type User = {
  path: string;
  name: string;
};

const users: User[] = [
  { path: user1, name: "user 1" },
  { path: user2, name: "user 2" },
  { path: user3, name: "user 3" },
];

export const Users = () => {
  return (
    <ul className="items-center flex">
      {users.map((user, index) => (
        <UserItem
          user={user}
          isLast={!!(index === users.length - 1)}
          order={users.length - index}
        />
      ))}
    </ul>
  );
};
