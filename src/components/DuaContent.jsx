"use client";
import Image from "next/image";
import search from "../../src/assets/icon/search.png";
import cat01 from "../../src/assets/icon/cat01.png";
import allah from "../../src/assets/icon/allah.png";
import { useState, useEffect } from "react";

const catData = [
  {
    _id: "aDfdf",
    cat: "Dua's Importance",
    subCat: [
      {
        _id: "1a",
        section: "The servant is dependent on his Lord",
        question01: "The servant is dependent on his Lord#1",
        question02: "The servant is dependent on his Lord#2",
        question03: "The reward of freeing of a slave",
        answer01:
          "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
        answer02:
          "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
        answer03:
          "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
        reference01: "Surah Al-Fatir 35:15",
        reference02: "Bukhari: 844",
        reference03: "Bukhari: 6404",
      },
      {
        _id: "1b",
        section: "The most important thing to ask Allah for",
        question01: "Allah's guidance #1",
        question02: "Allah's guidance #2",
        answer01:
          "He whom Allah guides is the [rightly] guided, but he whom He leaves astray - never will you find for him a protecting guide. (Surah Al-Kahf 18:17)",
        answer0:
          "Guide me through that which there has been difference concerning the truth, verily, You are upon a straight path.",
        reference01: "Surah Al-Fatihah 1:5",
        reference02: "Muslim: 770",
      },
      {
        _id: "1c",
        section: "Ask for paradise & protection from fire",
        question01: "Ask for paradise & seek refuge from fire",
        answer01:
          "Narrated by Abu Huraira (RA): The Messenger of Allah (ﷺ), asked a man, What do you supplicate in your prayer? The man says, I recite Tashahhud and say- (The dua is mentioned above) I can’t recite dua as beautifully as you, nor can I recite dua like Muadh! Then Prophet (ﷺ) said, We also supplicate like you!",
        reference01: "Sahih (Albani). Ibn Majah: 910",
      },
      {
        _id: "1d",
        section: "Dua to remain steadfast on the religion",
        question01:
          "To get Stability in religion and good results in all deeds",
        answer01:
          "Abdullah bin Amr bin al-'As (RA) reported that he heard Allah's Messenger (ﷺ) as saying: Verily, the hearts of all the sons of Adam are between the two fingers out of the fingers of the Compassionate Lord as one heart. He turns that to any (direction) He likes. Then Allah’s Messenger (ﷺ) said: (Dua mentioned above)",
        reference01: "Muslim: 2655",
      },
      {
        _id: "1e",
        section:
          "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
        question01: "Shelter from evil consequences and rejoicing of the enemy",
        answer01:
          "Translation: O Allah, I seek refuge in you from grief and sadness, from weakness and from laziness, from miserliness and from cowardice, from being overcome by debt and overpowered by men (i.e. others).",
        reference01: "Bukhari :2893",
      },
    ],
  },
  {
    _id: "asdff",
    cat: "Dua's Excellence",
    subCat: [
      {
        _id: "2a",
        section: "Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer",
        question01: "The reward of freeing the four slaves of Bani Ismail (AS)",
        answer01:
          "Translation: None has the right to be worshipped except Allah, alone, without any partner. To Him belong all sovereignty and praise and He is over all things omnipotent. Whoever says this dua ten times is like one who has freed four slaves from among the children of Ismaa'eel.",
        reference01: "Bukhari No: 6403; Muslim No: 2693",
      },
    ],
  },
  {
    _id: "aDfdfadf",
    cat: "Time of dua",
    subCat: [
      {
        _id: "3a",
        section: "Times and places when dua will be accepted",
        question01: "Time when duas are accepted #1",

        answer:
          "Narrated by Abdullah ibn Amr ibn al-'As (RA): A man said: O Messenger of Allah, the mu'adhdhins excel us. The Messenger of Allah (ﷺ) said: Say (the same words) as they say, and when you come to the end, ask Allah for anything and that will be granted to you.",
        reference01: "Hasan (Albani). Abu Dawud: 524",
      },
      {
        _id: "3b",
        section: "Time when duas are accepted",
        question02: "Time when duas are accepted #2",
        answer02:
          "Anas (RA) said, the Prophet (ﷺ) said, when the call to prayer (adhan) is given, the gates of heaven are opened and the dua is accepted.",
        reference02: "Sahih (Albani). Silsila Sahihah: 1413",
      },
    ],
  },
];

const DuaContent = () => {
  const [activeTab, setActiveTab] = useState(0);

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
          {catData.map((tab, index) => (
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
                          {item.section}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="w-[890px] h-[780px] overflow-hidden overflow-y-scroll">
        {catData.map((category, categoryIndex) => {
          let questionCounter = calculateStartIndex(catData, categoryIndex); // Calculate starting index for the category

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
                      <div id={`${item._id}`} className="mt-3 rounded-lg mb-5">
                        <div className="mt-5">
                          {Object.entries(item).map(([key, value]) => {
                            if (key.startsWith("question") && value) {
                              const answerKey = `answer${key.slice(-2)}`;
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
                                      <span className="font-semibold text-green-600">
                                        Answer:
                                      </span>{" "}
                                      {item[answerKey]}
                                    </p>
                                  )}
                                  {item[referenceKey] && (
                                    <p className="text-gray-800 mt-2">
                                      <span className="font-semibold text-green-600">
                                        Reference:
                                      </span>{" "}
                                      {item[referenceKey]}
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
