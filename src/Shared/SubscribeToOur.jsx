const SubscribeToOur = () => {
  return (
    <div>
      <div className="max-w-[1920px] bg-teal-600 min-h-[380px] relative flex justify-center items-center">
        <div className=" bg-teal-600 absolute flex-col justify-center items-center gap-8 inline-flex">
          <div className="text-center text-white text-5xl font-bold ">
            Subscribe to our newsletter
          </div>
          <div className="justify-start items-end gap-8 flex-wrap flex">
            <div className="h-14 px-4 py-[11px] bg-neutral-50 rounded-lg border border-stone-300 justify-start items-center gap-2.5 flex">
              <input
                placeholder="Email ID"
                className="grow focus:outline-none  shrink basis-0 text-neutral-400 h-[56px] text-xl font-normal  leading-[34px]"
              />
            </div>
            <button className="w-[180px] px-8 py-3.5 bg-neutral-50 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-teal-600 text-2xl font-medium ">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToOur;