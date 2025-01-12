"use client";

import Image from "next/image";
import search from "../../src/assets/icon/search.png";
import cat01 from "../../src/assets/icon/cat01.png";
import allah from "../../src/assets/icon/allah.png";
import { useState } from "react";

const catData = [
  {
    cat: "Dua's Importance",
    subCat: [
      {
        question: "The servant is dependent on his Lord",
        answer:
          "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
        reference: "Surah Al-Fatir 35:15",
      },
      {
        question: "The most important thing to ask Allah for",
        answer:
          "He whom Allah guides is the [rightly] guided, but he whom He leaves astray - never will you find for him a protecting guide. (Surah Al-Kahf 18:17)",
        reference: "Surah Al-Fatihah 1:5",
      },
    ],
  },
  {
    cat: "Dua's Excellence",
    subCat: [
      {
        question: "Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer",
        answer:
          "Translation: None has the right to be worshipped except Allah, alone, without any partner. To Him belong all sovereignty and praise and He is over all things omnipotent.",
        reference: "Bukhari No: 6403; Muslim No: 2693",
      },
    ],
  },
];

const DuaContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-8 p-5">
      {/* Sidebar */}
      <div className="w-[350px] bg-white rounded-lg shadow-md">
        <div className="bg-green-600 rounded-t-lg text-center py-3">
          <h5 className="text-white font-semibold text-lg">Categories</h5>
        </div>
        <div className="relative text-gray-600 text-sm font-normal p-3">
          <input
            type="text"
            placeholder="Search by Categories"
            className="pl-12 py-3 rounded-lg border border-gray-300 w-full"
          />
          <div className="absolute top-4 left-4 px-2 py-2">
            <Image src={search} alt="search" width={20} height={20} />
          </div>
        </div>
        <ul className="p-3 space-y-3">
          {catData.map((tab, id) => (
            <li
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${
                activeTab === id ? "bg-green-100" : "bg-gray-100"
              } rounded-lg p-3 flex items-center justify-between cursor-pointer`}
            >
              <div className="flex gap-4 items-center">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <Image src={cat01} alt="cat01" width={40} height={40} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-600">
                    {tab.cat}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Subcategory: {tab.subCat.length}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {tab.subCat.length}
                </p>
                <p className="text-sm text-gray-600">Duas</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h5 className="bg-white px-5 py-3 text-lg rounded-lg shadow-md">
          <span className="font-semibold text-green-600">Section:</span>
          <span className="text-gray-800 font-medium pl-2">
            {catData[activeTab].cat}
          </span>
        </h5>
        {catData[activeTab].subCat.map((item, index) => (
          <div
            key={index}
            className="bg-white px-5 py-4 mt-3 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3">
              <Image src={allah} alt="allah" width={35} height={35} />
              <span className="font-semibold text-green-600">
                {index + 1}. {item.question}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-gray-800 text-base">{item.answer}</p>
              <p className="font-semibold text-green-600 mt-3">Reference:</p>
              <p className="text-gray-800 text-base">{item.reference}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DuaContent;
