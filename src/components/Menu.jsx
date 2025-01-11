import Image from "next/image";
import home from "../assets/image/home.png";
import bottom from "../assets/image/bottom.png";
import menu01 from "../assets/icon/menu01.png";
import menu02 from "../assets/icon/menu02.png";
import menu03 from "../assets/icon/menu03.png";
import menu04 from "../assets/icon/menu04.png";
import menu05 from "../assets/icon/menu05.png";
import menu06 from "../assets/icon/menu06.png";
import menu07 from "../assets/icon/menu07.png";

const Menu = () => {
  return (
    <div className="w-24 bg-white flex justify-center rounded-3xl p-5">
      <div>
        <div>
          <Image src={home} alt="home" width={100} height={100}></Image>
        </div>
        <ul className="space-y-5 flex flex-col items-center py-32">
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu01} alt="menu01" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu02} alt="menu02" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu03} alt="menu03" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu04} alt="menu04" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu05} alt="menu05" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu06} alt="menu06" width={20} height={20}></Image>
          </li>
          <li className="bg-[#E8F0F5] w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={menu07} alt="menu07" width={20} height={20}></Image>
          </li>
        </ul>
        <div>
          <Image src={bottom} alt="bottom" width={100} height={100}></Image>
        </div>
      </div>
    </div>
  );
};

export default Menu;
