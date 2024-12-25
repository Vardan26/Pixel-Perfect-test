import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  data: any[];
  dataKey: string;
};

export const List = ({ data, dataKey }: Props) => {
  return (
    <ul className="flex flex-col">
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className="h-[41px] text-secondary font-[400] text-[14px] flex 
                    justify-between items-center p-[12px] rounded-[6px]
                    cursor-pointer hover:bg-white hover:bg-opacity-10 transition ease-in-out duration-300 "
          >
            <span>{item[dataKey]}</span>
            <IoIosArrowForward color="#F5F5F5" size={14} fontWeight="bold" />
          </li>
        );
      })}
    </ul>
  );
};
