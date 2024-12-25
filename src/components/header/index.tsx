import React, { memo } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Users } from "./users";

const Header = memo(() => {
  return (
    <header className="m-lg flex justify-between items-center h-[40px]">
      <a
        className="h-[32px] w-[110px] mt-[8px]"
        href="https://www.eiger.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt="Eiger" className="w-full h-full" />
      </a>
      <Users />
    </header>
  );
});

export default Header;
