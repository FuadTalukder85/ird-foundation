import DuaPage from "@/components/DuaPage";
import Menu from "@/components/Menu";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EBEEF2] h-screen md:px-8 md:py-6 flex gap-8">
      <div className="hidden md:block">
        <Menu></Menu>
      </div>
      <DuaPage></DuaPage>
    </div>
  );
};

export default page;
