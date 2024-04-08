import Image from "next/image";
import girlImage from "@/Assets/Homepage/Cefr/girlHappy.png";
import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
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
    </div>
  );
};

export default CefrLevels;
