"use client";
import Image from "next/image";
import logo from "@/Assets/TLN_logo.png";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const languageOptions = [
    {
      name: "English",
      path: "/",
    },
    {
      name: "French",
      path: "/Languages/french",
    },
    {
      name: "Spanish",
      path: "/Languages/Spanish",
    },
    {
      name: "German",
      path: "/Languages/German",
    },
    {
      name: "Mandarin",
      path: "/Languages/Mandarin",
    },
    {
      name: "Japanese",
      path: "/Languages/Japanese",
    },
    {
      name: "Korean",
      path: "/Languages/Korean",
    },
  ];
  const NavOptions = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    {
      name: "School",
      path: "/Navigation/School",
    },
    {
      name: "College",
      path: "/Navigation/College",
    },
    {
      name: "Study Abroad",
      path: "/Navigation/StudyAbroad",
    },
    {
      name: "Corporate Training",
      path: "/Navigation/CorporateTraining",
    },
    {
      name: "Work with us",
      path: "/Navigation/WorkWithUs",
    },
  ];
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [showStudyAbroad, setShowStudyAbroad] = useState(false);
  const [showWorkWithUs, setShowWorkWithUs] = useState(false);
  return (
    <header>
      <nav>
        {/* Batches Starting Now  */}
        <section>
          <div className="bg-black flex items-center justify-center h-[48px] w-full">
            <h1 className=" text-primary-color text-xl font-bold">
              <span className="font-normal">DELF /Goethe Exam Schedule</span> |
              Batches Starting Now!
            </h1>
          </div>
        </section>
        {/* nav options section */}
        <section className="  px-2.5 py-2.5 bg-white shadow flex justify-start w-full items-center gap-2.5 ">
          <div className=" h-[58px] justify-between items-center inline-flex">
            <div className="w-full self-stretch justify-between items-center flex">
              <Image
                width={500}
                className="w-[203px] h-[82px] object-contain"
                height={500}
                src={logo}
                alt="logo"
              ></Image>
              <div className="px-2.5 py-[29px] flex-col justify-start items-start cursor-pointer  gap-2.5 inline-flex">
                <div className="justify-start items-start gap-12 inline-flex">
                  <div
                    onMouseLeave={() => setShowLanguageOptions(false)}
                    onMouseOver={() => setShowLanguageOptions(true)}
                    className="text-stone-900  font-normal font-['Inter'] relative  leading-7"
                  >
                    Languages
                    {showLanguageOptions && (
                      <div
                        style={{
                          boxShadow:
                            "-4px -2px 100px 0px rgba(69, 222, 233, 0.18)",
                        }}
                        className="absolute  flex flex-col  w-[130px]  ps-5 py-2 bg-white border "
                      >
                        <div className="" />
                        {languageOptions.map((language) => (
                          <Link href={language.path} key={language.name}>
                            {language.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {
                    NavOptions.map((Nav) => (
                      <Link
                        onMouseLeave={() => {
                          if (Nav.name === "Work with us") {
                            setShowWorkWithUs(false);
                          }
                          if (Nav.name === "Study Abroad") {
                            setShowStudyAbroad(false);
                          }
                        }}
                        onMouseOver={() => {
                          if (Nav.name === "Work with us") {
                            setShowWorkWithUs(true);
                          }
                          if (Nav.name === "Study Abroad") {
                            setShowStudyAbroad(true);
                          }
                        }}
                        href={Nav.path}
                        key={Nav.name}
                      >
                        {Nav.name}
                        {Nav.name === "Study Abroad" && showStudyAbroad && (
                          <div
                            style={{
                              boxShadow:
                                "-4px -2px 100px 0px rgba(69, 222, 233, 0.18)",
                            }}
                            className="absolute  flex flex-col    ps-[15px] pe-[9px] w-[170px] py-[16px] bg-white border "
                          >
                            TOPIK 2- Level 5 <br />
                            TOPIK 2- Level 6 <br />
                          </div>
                        )}
                        {Nav.name === "Work with us" && showWorkWithUs && (
                          <div
                            style={{
                              boxShadow:
                                "-4px -2px 100px 0px rgba(69, 222, 233, 0.18)",
                            }}
                            className="absolute  flex flex-col    ps-[15px] pe-[9px] w-[190px] py-[16px] bg-white border "
                          >
                            Careers <br />
                            Teach with us <br />
                            Collaborate with us <br />
                          </div>
                        )}
                      </Link>
                    )) //Nav
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="  flex-grow flex justify-end me-5">
            <div className="w-40 h-[53px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="w-[215px] h-[30px] text-center text-neutral-50 text-2xl font-medium font-['Inter']">
                Login
              </div>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
