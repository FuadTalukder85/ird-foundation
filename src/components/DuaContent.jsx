import React from "react";

const DuaContent = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[430px] bg-white rounded-lg">
        <div className="bg-green-600 rounded-t-lg text-center py-3">
          <h5 className="text-white font-semibold text-lg">Categories</h5>
        </div>
      </div>
      <div className="w-[890px]">
        <h5 className="bg-white px-5 py-3 text-[16px] rounded-lg">
          <span className="font-semibold text-green-600">Section :</span>
          <span className="text-[#393939] font-medium ps-2">
            The servant is dependent on his Lord
          </span>
        </h5>
      </div>
    </div>
  );
};

export default DuaContent;
