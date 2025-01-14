"use client";
import Image from "next/image";
import search from "../../src/assets/icon/search.png";
import cat01 from "../../src/assets/icon/cat01.png";
import allah from "../../src/assets/icon/allah.png";
import curveArrow from "../../src/assets/icon/curveArrow.png";
import { useState, useEffect } from "react";
import { useGetDuaQuery } from "@/redux/features/duaApi/DuaApi";

const DuaContent = () => {
  const { data } = useGetDuaQuery();
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null); // To track which section is expanded

  useEffect(() => {
    // Retrieve the saved activeTab from localStorage on page load
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(parseInt(savedTab, 10));
    }
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index); // Save the active tab to localStorage
  };

  // Function to calculate the starting question index for a category
  const calculateStartIndex = (categories, activeTab) => {
    let startIndex = 1;
    for (let i = 0; i < activeTab; i++) {
      const subCategories = categories[i].subCat;
      subCategories.forEach((sub) => {
        const questionCount = Object.keys(sub).filter((key) =>
          key.startsWith("question")
        ).length;
        startIndex += questionCount;
      });
    }
    return startIndex;
  };

  const toggleSection = (sectionId) => {
    // Toggle the expanded section
    setExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <div className="w-[430px] bg-white rounded-lg">
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
          {data?.map((tab, index) => (
            <li key={tab.cat} onClick={() => handleTabChange(index)}>
              <div
                className={`${
                  activeTab === index ? "bg-[#E8F0F5]" : "bg-white"
                } rounded-lg p-3 cursor-pointer flex items-center justify-between`}
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
                    {tab.subCat.reduce((total, sub) => {
                      const questionCount = Object.keys(sub).filter((key) =>
                        key.startsWith("question")
                      ).length;
                      return total + questionCount;
                    }, 0)}
                  </p>
                  <p className="text-sm text-gray-600">Duas</p>
                </div>
              </div>
              {activeTab === index &&
                tab.subCat.map((item) => (
                  <div
                    key={item._id}
                    className="ms-7 pt-4 text-[#373737] text-[16px] border-dotted border-l-2 border-green-600"
                  >
                    <div className="relative">
                      <div className="absolute top-2 -left-1 w-[6px] h-[6px] bg-green-600 rounded-full"></div>
                      <p className="ps-4 ">
                        <a
                          href={`#${item._id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollTo(item._id);
                          }}
                        >
                          <span
                            className="cursor-pointer"
                            onClick={() => toggleSection(item._id)} // Toggle section expand/collapse
                          >
                            {item.section}
                          </span>
                        </a>
                      </p>
                    </div>
                    {/* Show questions if section is expanded */}
                    {expandedSection === item._id &&
                      Object.entries(item).map(([key, value]) => {
                        if (key.startsWith("question") && value) {
                          return (
                            <div
                              key={key}
                              className="bg-white px-5 py-3 text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <Image
                                  src={curveArrow}
                                  alt="curveArrow"
                                  width={15}
                                  height={15}
                                ></Image>
                                <span className="font-semibold text-green-600">
                                  {value}
                                </span>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="w-[890px] h-[780px] overflow-hidden overflow-y-scroll">
        {data?.map((category, categoryIndex) => {
          let questionCounter = calculateStartIndex(data, categoryIndex); // Calculate starting index for the category

          return (
            <div key={category.cat}>
              {categoryIndex === activeTab ||
              (categoryIndex === 0 && activeTab === 0)
                ? category.subCat.map((item) => (
                    <div key={item._id}>
                      <h5 className="bg-white px-5 py-3 text-lg rounded-lg">
                        <span className="font-semibold text-green-600">
                          Section:
                        </span>
                        <span className="text-gray-800 font-medium pl-2">
                          {item.section}
                        </span>
                      </h5>
                      <div id={item._id} className="mt-3 rounded-lg mb-5">
                        <div className="mt-5">
                          {Object.entries(item).map(([key, value]) => {
                            if (key.startsWith("question") && value) {
                              const answerKey = `answer${key.slice(-2)}`;
                              const arabicKey = `arabic${key.slice(-2)}`;
                              const transliterationKey = `transliteration${key.slice(
                                -2
                              )}`;
                              const translationKey = `translation${key.slice(
                                -2
                              )}`;
                              const referenceKey = `reference${key.slice(-2)}`;

                              return (
                                <div
                                  key={key}
                                  className="bg-white px-5 py-4 my-3 rounded-lg"
                                >
                                  <div className="flex items-center gap-3">
                                    <Image
                                      src={allah}
                                      alt="allah"
                                      width={35}
                                      height={35}
                                    />
                                    {questionCounter++}.
                                    <span className="font-semibold text-green-600">
                                      {value}
                                    </span>
                                  </div>
                                  {item[answerKey] && (
                                    <p className="text-gray-800 mt-2">
                                      <span className="font-semibold text-green-600"></span>{" "}
                                      {item[answerKey]}
                                    </p>
                                  )}
                                  {item[arabicKey] && (
                                    <p className="text-gray-800 mt-2 py-7 text-3xl text-right leading-10">
                                      {item[arabicKey]}
                                    </p>
                                  )}
                                  {item[transliterationKey] && (
                                    <p className="text-gray-800 mt-2">
                                      <span className="font-semibold text-[#393939] italic">
                                        Transliteration:
                                      </span>{" "}
                                      {item[transliterationKey]}
                                    </p>
                                  )}
                                  {item[translationKey] && (
                                    <p className="text-gray-800 mt-2">
                                      <span className="font-semibold text-[#393939] italic">
                                        Translation:
                                      </span>{" "}
                                      {item[translationKey]}
                                    </p>
                                  )}
                                  {item[referenceKey] && (
                                    <p className="text-gray-800 mt-2">
                                      <span className="font-semibold text-green-600">
                                        Reference:
                                      </span>{" "}
                                      <span className="block">
                                        {item[referenceKey]}
                                      </span>
                                    </p>
                                  )}
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DuaContent;
