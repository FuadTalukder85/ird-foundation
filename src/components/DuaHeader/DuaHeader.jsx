"use client";
import Image from "next/image";
import search from "../../assets/icon/search.png";
import profileImg from "../../assets/icon/profileImg.png";
import downArrow from "../../assets/icon/downArrow.png";
import Link from "next/link";
import { useState } from "react";

const DuaHeader = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleButton = () => {
    setShowButton((prev) => !prev); // Toggle the visibility
  };

  return (
    <div className="flex justify-between p-3 md:p-0">
      <h3 className="text-[#393939] font-semibold text-xl">Duas Page</h3>
      <div className="flex gap-72">
        <div className="relative hidden md:block text-[#868686] text-sm font-normal">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="px-4 py-3 rounded-lg border border-[#E2E2E2] w-96"
          />
          <div className="absolute top-1 right-1 px-4 py-[9px] rounded-lg bg-[#F3F4F6]">
            <Image src={search} alt="search" width={20}></Image>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={profileImg}
            alt="profileImg"
            width={50}
            onClick={toggleButton}
            className="cursor-pointer"
          />
          <Image src={downArrow} alt="downArrow" width={10} />

          {showButton && (
            <div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                <Link href="/Form">Add Dua</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DuaHeader;
