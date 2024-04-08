import homePageBannerGirl from "@/Assets/Homepage/HomePageBanner/homePageBannerGirl.png";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import States from "@/Shared/States";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="mt-[84px]">
      <div className="max-w-[1681px] h-[542px] justify-between items-center flex mx-auto">
        <div className="xl:w-[525px] h-[542px] flex-col justify-center  items-center gap-4 inline-flex">
          <div className="self-stretch h-[261px] flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-stone-900 xl:text-5xl font-bold font-['Inter']">
              Your Gateway to <br />
              Language Excellence
            </div>
            <div className="self-stretch text-stone-900 text-[32px] font-normal font-['Inter']">
              Learn more than just a language!
            </div>
          </div>
          <BookAFreeDemoButton></BookAFreeDemoButton>
        </div>
        <Image
          alt="homePageBannerGirl"
          className="w-[769px] mt-[90px]"
          src={homePageBannerGirl}
        ></Image>
        <div className="w-[416px] h-[542px] px-10 py-8 bg-white rounded-2xl border border-stone-300 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-8 inline-flex">
            <div className="self-stretch h-[89px] flex-col justify-center items-center gap-1 flex">
              <div className="self-stretch text-center text-stone-900 text-2xl font-medium font-['Inter']">
                Drop an Enquiry
              </div>
              <div className="self-stretch text-center text-neutral-500 text-xl font-normal font-['Inter'] leading-7">
                Our Academic Counsellor will give you a call shortly
              </div>
            </div>
            <div className="self-stretch h-[360px] flex-col justify-start items-center gap-8 flex">
              <div className="self-stretch h-[272px] flex-col justify-start items-center gap-4 flex">
                <input
                  placeholder="Text"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
                <input
                  placeholder="Email ID"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px] gap-2.5 inline-flex"
                  type="email"
                />
                <input
                  placeholder="Mobile Number"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px] gap-2.5 inline-flex"
                  type="number"
                />
                <input
                  placeholder="Preferred Language"
                  className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px] gap-2.5 inline-flex"
                  type="text"
                />
              </div>
              <button className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[215px] h-[30px] text-center text-teal-600 text-2xl font-medium font-['Inter']">
                  Send Enquiry
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* states component is a shared component */}
      <States />
    </div>
  );
};

export default HomeBanner;
