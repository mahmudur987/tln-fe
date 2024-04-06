import hindustaniTimes from "@/Assets/NewsLetterImg/image.png";
import girlImg from "../../Assets/NewsLetterImg/girl.png";
import Image from "next/image";
const Newsletter = () => {
  return (
    <section className="w-full flex py-[120px] justify-center gap-x-3 min-h-[591px]  bg-secondary-color">
      <section className="flex flex-col justify-center items-center rounded-2xl min-h-[375px] w-[455px] bg-white">
        <Image
          alt="hindustaniTimes"
          src={hindustaniTimes}
          className="h-[40px] w-[300px]"
        ></Image>
        <h1 className="text-[32px] mt-[32px]">We have made</h1>
        <h2
          className="text-5xl
font-bold"
        >
          NEWS
        </h2>
      </section>
      <section className="flex rounded-2xl min-h-[375px] xl:max-w-[1113px] flex-grow bg-white p-7  gap-x-5">
        <div className="w-[35%] ">
          {/* image */}
          <div className="bg-red-400 h-[231px] rounded-lg">
            <Image
              alt="girlImg"
              className="h-full rounded-lg w-full object-cover "
              src={girlImg}
              width={300}
              height={300}
            ></Image>
          </div>
          <h1 className="text-primary-color text-xl mt-4">Brand Stories</h1>
          <p className="mt-1 text-[#BDBDBD]">
            Published on Aug 03, 2022 06:58 PM 1ST
          </p>
        </div>
        <div className="w-[75%] ">
          <h1 className="text-3xl">
            The Language Network Launches its PAN India Expansion Campaign
          </h1>
          <p className="text-xl mt-2 text-neutral-color">
            The institute has recently launched a new and effective Learning
            Management System to improve aspects like proper planning,
            implementing, and assessing students’ learning process. The Language
            Network has increased its hiring activities and has also set up a
            second workspace.
          </p>
          <p className="text-neutral-color text-xl mt-[20px]">
            Reads our full story{" "}
            <span className="text-primary-color font-bold">Here</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Newsletter;
