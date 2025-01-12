import Image from "next/image";
import search from "../../assets/icon/search.png";
import profileImg from "../../assets/icon/profileImg.png";
import downArrow from "../../assets/icon/downArrow.png";

const DuaHeader = () => {
  return (
    <div className="flex justify-between">
      <h3 className="text-[#393939] font-semibold text-xl">Duas Page</h3>
      <div className="flex gap-72">
        <div className="relative  text-[#868686] text-sm font-normal">
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
          <Image src={profileImg} alt="profileImg" width={50}></Image>
          <Image src={downArrow} alt="downArrow" width={10}></Image>
        </div>
      </div>
    </div>
  );
};

export default DuaHeader;
