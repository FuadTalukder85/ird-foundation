import DuaPage from "@/components/DuaPage";
import Menu from "@/components/Menu";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EBEEF2] p-8 flex gap-8">
      <Menu></Menu>
      <DuaPage></DuaPage>
    </div>
  );
};

export default page;
