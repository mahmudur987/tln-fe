import Image from "next/image";
import girlImage from "@/Assets/Homepage/Cefr/girlHappy.png";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import rightIcon from "@/Assets/Homepage/Cefr/rightIcon.png";
const CefrLevels = () => {
  return (
    <div className="bg-[#F5F5F5] pt-[150px] min-h-[1350px]">
      <div className="max-w-[1681px]  mx-auto flex justify-center items-center ">
        <section className="min-h-[463px] mx-10 gap-[42px] w-full grid lg:grid-cols-2 ">
          <div className=" rounded-xl">
            <Image
              alt="girl"
              className="object-cover h-full rounded-xl w-full"
              src={girlImage}
            />
          </div>
          <div className="">
            <h1 className=" text-stone-900 text-5xl font-bold font-['Inter']">
              Our courses are aligned with The CEFR Levels
            </h1>
            <p className=" min-h-[250px] text-neutral-500 text-xl font-normal  mt-[23px] leading-7 xl:text-justify mb-[16px]">
              Common European Framework of Reference for Languages (CEFR) is an
              internationally recognized standard that describes your learning
              progress in more detail. The framework helps you to explain your
              level from Beginner (A1) to Advanced (C2).
              <br />
              <br />
              All languages we offer are aligned with the CEFR levels, so once
              you know your level, we can suggest the best classes to get your
              progress going immediately.
              <br />
              <br />
            </p>
            <BookAFreeDemoButton></BookAFreeDemoButton>
          </div>
        </section>
      </div>
      {/* cefr levels card section is below */}
      <section className="mt-[102px] max-w-[1681px]  mx-auto flex justify-center items-center gap-[20px] flex-wrap">
        <div
          id="A1"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-secondary-color rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold font-['Inter']">
                A1
              </div>
              <div className="self-stretch text-center text-neutral-800 text-xl font-normal font-['Inter'] leading-7">
                Absolute Beginner
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5 bg-white justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Understands everyday expressions and basic phrases
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Can introduce oneself and ask simple questions
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Participates in basic conversations about hobbies or
                  preferences
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="A2"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#B0DCD7] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold font-['Inter']">
                A2
              </div>
              <div className="self-stretch text-center text-neutral-800 text-xl font-normal font-['Inter'] leading-7">
                Elementary
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Understands common expressions in relevant areas
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Communicates in routine tasks like ordering food or asking for
                  directions
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Engages in everyday activities such as shopping or making
                  reservations
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="B1"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#48B0A3] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-neutral-800 text-2xl font-bold font-['Inter']">
                B1
              </div>
              <div className="self-stretch text-center text-neutral-800 text-xl font-normal font-['Inter'] leading-7">
                Intermediate
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5 bg-white justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Grasps main points of clear, familiar topics
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Handles most situations while traveling or living in a foreign
                  country
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className=" text-neutral-500 text-base  font-normal font-['Inter']">
                  Participates in discussions, expresses opinions, and follows
                  basic news articles
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="B2"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#1F9F90] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold font-['Inter']">
                B2
              </div>
              <div className="self-stretch text-center text-white text-xl font-normal font-['Inter'] leading-7">
                Upper intermediate
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Understands complex texts on concrete and abstract topics
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Interacts fluently with native speakers, engaging in debates
                  and discussing world events
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className=" text-neutral-500 text-base  font-normal font-['Inter']">
                  Reads articles, expresses opinions, and engages in debates on
                  various subjects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="C1"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#008171] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold font-['Inter']">
                C1
              </div>
              <div className="self-stretch text-center text-white text-xl font-normal font-['Inter'] leading-7">
                Advanced
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Understands a wide range of demanding texts and implicit
                  meanings
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Expresses ideas fluently and participates in complex
                  discussions
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className=" text-neutral-500 text-base  font-normal font-['Inter']">
                  Analyzes and critiques articles, understands nuanced arguments
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="C2"
          className="w-[263px] h-[430px] bg-white rounded-2xl flex-col justify-start items-start inline-flex"
        >
          <div className="self-stretch h-[101px] px-[11px] py-[22px] bg-[#006253] rounded-t-2xl flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[57px] flex-col justify-start items-center flex">
              <div className="self-stretch h-[29px] text-center text-white text-2xl font-bold font-['Inter']">
                C2
              </div>
              <div className="self-stretch text-center text-white text-xl font-normal font-['Inter'] leading-7">
                Master level
              </div>
            </div>
          </div>
          <div className="self-stretch px-4 py-5  justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[204px] justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Understands virtually everything heard or read{" "}
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className="grow shrink basis-0 text-neutral-500 text-base font-normal font-['Inter']">
                  Summarizes information and presents coherent arguments
                </div>
              </div>
              <div className="self-stretch justify-center items-start gap-2 inline-flex">
                <Image
                  alt="rightIcon"
                  src={rightIcon}
                  className="w-6 h-6"
                ></Image>
                <div className=" text-neutral-500 text-base  font-normal font-['Inter']">
                  Engages in high-level discussions, delivers presentations, and
                  comprehends complex materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex mt-[48px] items-center justify-center">
        <button className="   px-8 py-3.5 bg-teal-600 rounded-lg justify-center text-neutral-50 text-2xl font-medium items-center gap-2.5 inline-flex">
          Get started
        </button>
      </div>
    </div>
  );
};

export default CefrLevels;
