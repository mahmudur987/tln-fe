const HomeBanner = () => {
  return (
    <div className="mt-[84px]">
      <div className="w-[1681px] h-[542px] justify-between items-center flex mx-auto">
        <div className="w-[525px] h-[542px] flex-col justify-center items-center gap-4 inline-flex">
          <div className="self-stretch h-[261px] flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch text-stone-900 text-5xl font-bold font-['Inter']">
              Your Gateway to <br />
              Language Excellence
            </div>
            <div className="self-stretch text-stone-900 text-[32px] font-normal font-['Inter']">
              Learn more than just a language!
            </div>
          </div>
          <div className="self-stretch h-[53px] flex-col justify-start items-start gap-2.5 flex">
            <div className="h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="w-[215px] h-[30px] text-center text-neutral-50 text-2xl font-medium font-['Inter']">
                Book a free demo
              </div>
            </div>
          </div>
        </div>
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
                <div className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px]">
                    Text
                  </div>
                </div>
                <div className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px]">
                    Email ID
                  </div>
                </div>
                <div className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px]">
                    Mobile Number
                  </div>
                </div>
                <div className="self-stretch px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-neutral-400 text-xl font-normal font-['Inter'] leading-[34px]">
                    Preferred Language
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="self-stretch h-14 px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[215px] h-[30px] text-center text-teal-600 text-2xl font-medium font-['Inter']">
                  Send Enquiry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
