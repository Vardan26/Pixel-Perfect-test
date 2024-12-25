import React, { useState } from "react";

import { Title } from "../../components/title";
import IconSend from "../../assets/icons/send.svg";
import { IoSearch } from "react-icons/io5";

import { List } from "../../components/list";
import "./styles.scss";

const data = [
  { description: "In-game bonuses and free spins", id: "1" },
  { description: "Crypto deposit still not credited?", id: "2" },
  { description: "EigerX VIP program overview", id: "3" },
  { description: "Achievements and awards", id: "4" },
];

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter((item) =>
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="flex-col mt-[21%] ml-[20px]">
        <Title children="Hello there" classNames="text-opacity-70" />
        <Title children="How can we help?" />
      </div>
      <div
        className="send-message rounded-[8px] border border-primary mt-md mb-sm 
        px-[20px] py-[16px] flex items-center justify-between bg-[#1B1E22]"
        role="button"
        onClick={() => {}}
      >
        <p className="text-secondary text-[14px] font-[600]">
          Send us a message
          <span className="block font-[400] text-dark">
            We typically reply within a day
          </span>
        </p>
        <img src={IconSend} alt="Send" />
      </div>
      <div className="search-box overflow-auto flex-grow flex-col px-[8px] py-[7px] flex relative z-10 bg-blackBg mb-[7px] rounded-[10px] border-border border">
        <div className="relative w-full mb-[8px]">
          <input
            onChange={handleInputChange}
            value={searchTerm}
            type="text"
            placeholder="Search for help"
            className="bg-[#1B1E22] rounded-[8px] w-full  px-[10px] py-[8px] 
            focus:outline-none placeholder-white text-white placeholder:text-[14px]
            placeholder:font-[600] placeholder:font-sans
            "
          />
          <div className="absolute inset-y-0 right-[10px] flex items-center pl-3 pointer-events-none">
            <IoSearch size={16} color="#24FFBC" />
          </div>
        </div>
        <List data={filteredData} dataKey="description" />
      </div>
    </>
  );
};
