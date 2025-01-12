import Image from "next/image";
import language from "../assets/icon/language.png";
import general from "../assets/icon/general.png";
import font from "../assets/icon/font.png";
import appearance from "../assets/icon/appearance.png";

const Setting = () => {
  return (
    <div className="w-80 h-[780px] bg-white p-5 rounded-3xl">
      <h3 className="text-[#393939] font-bold text-xl text-center">Setting</h3>
      <div className="mt-6">
        <ul className="space-y-3 text-[#868686] text-[16px]">
          <li className="bg-[#F7F8FA] flex justify-start items-center gap-2 p-3 rounded-md">
            <span className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={language} alt="language"></Image>
            </span>
            <p>Language Setting</p>
          </li>
          <li className="bg-[#F7F8FA] flex justify-start items-center gap-2 p-3 rounded-md">
            <span className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={general} alt="general"></Image>
            </span>
            <p>General Setting</p>
          </li>
          <li className="bg-[#F7F8FA] flex justify-start items-center gap-2 p-3 rounded-md">
            <span className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={font} alt="font"></Image>
            </span>
            <p>Font Setting</p>
          </li>
          <li className="">
            <div className="bg-[#F7F8FA] p-3 rounded-md flex justify-start items-center gap-2 border-l-4 border-green-600">
              <span className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={appearance} alt="appearance"></Image>
              </span>
              <p>Appearance Setting</p>
            </div>
            <div className="text-[#393939] font-normal text-[16px] bg-white border-x border-b border-[#F7F8FA] px-3 py-8 rounded-b-md">
              <div className="flex justify-between">
                <p> Night Mode</p>
                <div className="flex items-center">
                  <p className="w-4 h-4 rounded-full bg-[#A4A4A4] z-50"></p>
                  <p className="-ms-2 w-6 h-3 rounded-full bg-[#C1C1C1B2]"></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Setting;
