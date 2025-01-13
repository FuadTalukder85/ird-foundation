import DuaPage from "@/components/DuaPage";
import Menu from "@/components/Menu";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EBEEF2] h-screen px-8 py-6 flex gap-8">
      <Menu></Menu>
      <DuaPage></DuaPage>
    </div>
  );
};

export default page;
