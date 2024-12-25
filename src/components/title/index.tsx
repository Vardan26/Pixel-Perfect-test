import React from "react";

type Props = {
  children: string;
  classNames?: string;
};

export const Title = ({ children, classNames }: Props) => {
  return (
    <h1
      className={`text-white text-[32px] font-sfPro ${classNames} font-[600] leading-[38px]`}
    >
      {children}
    </h1>
  );
};
