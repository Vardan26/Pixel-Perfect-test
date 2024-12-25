import React from "react";
import { User } from "..";

type Props = {
  isLast: boolean;
  user: User;
  order: number;
};

export const UserItem = (props: Props) => {
  return (
    <li
      className={`w-[40px] h-[40px] cursor-pointer rounded-full bg-cover bg-center ${
        !props.isLast ? "border-2 border-blackBg mr-[-5px] box-content" : ""
      }`}
      style={{
        backgroundImage: `url(${props.user.path})`,
        zIndex: props.order,
      }}
    ></li>
  );
};
