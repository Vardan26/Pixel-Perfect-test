import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiHomeSmile2Line, RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineMessage, MdMessage } from "react-icons/md";
import { IoIosHelpCircle, IoIosHelpCircleOutline } from "react-icons/io";

import "./styles.scss";
import { FooterIcon } from "./FooterIcon";

export const Footer = () => {
  const location = useLocation();
  const checkIsActive: (path: string) => boolean = (path: string) =>
    location.pathname === path;

  return (
    <footer className="footer flex relative z-10 bg-blackBg mb-[8px] mt-[6px] rounded-[8px] border-border border overflow-hidden">
      <ul className="w-full flex items-center justify-between ">
        <li className="group cursor-pointer hover:bg-primary flex flex-1 items-center py-[14px] flex-col transition ease-in-out duration-100">
          <NavLink
            to="/"
            className={`${
              checkIsActive("/") ? "text-primary" : "text-secondary"
            } flex flex-col items-center leading-none font-sans text-[14px]
            group-hover:text-blackBg`}
          >
            <FooterIcon
              Icon={!checkIsActive("/") ? RiHomeSmile2Line : RiHomeSmile2Fill}
              isActive={checkIsActive("/")}
            />
            <span className=" mb-[3px] mt-[10px] ">Home</span>
          </NavLink>
        </li>
        <li className="group cursor-pointer hover:bg-primary transition ease-in-out duration-100 flex flex-1 items-center py-[14px] flex-col">
          <NavLink
            to="/messages"
            className={`${
              checkIsActive("/messages") ? "text-primary" : "text-secondary"
            } group-hover:text-blackBg flex flex-col items-center leading-none font-sans text-[14px]`}
          >
            <FooterIcon
              Icon={!checkIsActive("/messages") ? MdOutlineMessage : MdMessage}
              isActive={checkIsActive("/messages")}
            />
            <span className="mb-[3px] mt-[10px]">Messages</span>
          </NavLink>{" "}
        </li>
        <li className="group cursor-pointer hover:bg-primary transition ease-in-out duration-100 flex flex-1 items-center py-[14px] flex-col">
          <NavLink
            to="/help"
            className={`${
              checkIsActive("/help") ? "text-primary" : "text-secondary"
            } group-hover:text-blackBg flex flex-col items-center leading-none font-sans text-[14px]`}
          >
            <FooterIcon
              Icon={
                !checkIsActive("/help")
                  ? IoIosHelpCircleOutline
                  : IoIosHelpCircle
              }
              isActive={checkIsActive("/messages")}
            />
            <span className="mb-[3px] mt-[10px]">Help</span>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};
