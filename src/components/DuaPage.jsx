import React from "react";
import Setting from "./Setting";
import DuaHeader from "./DuaHeader/DuaHeader";
import DuaContent from "./DuaContent";

const DuaPage = () => {
  return (
    <div className="w-full">
      <DuaHeader></DuaHeader>
      <div className="flex gap-8 mt-7">
        <DuaContent></DuaContent>
        <Setting></Setting>
      </div>
    </div>
  );
};

export default DuaPage;
