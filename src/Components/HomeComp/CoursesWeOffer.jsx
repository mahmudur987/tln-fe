import english from "@/Assets/languages/english.png";
import french from "@/Assets/languages/french.png";
import spanish from "@/Assets/languages/spanish.png";
import german from "@/Assets/languages/german.png";
import mandarin from "@/Assets/languages/mandarin.png";
import japanese from "@/Assets/languages/japanese.png";
import korean from "@/Assets/languages/korean.png";
import Image from "next/image";
const CoursesWeOffer = () => {
  return (
    <div className="my-[126px] ">
      <h1 className="text-2xl font-bold text-center mb-[30px] xl:mb-[48px]">
        Courses We Offer
      </h1>
      <section className="max-w-[1452px] h-[180px] justify-center items-center xl:gap-x-[32px] lg:gap-4 mx-auto  flex">
        <div className="flex items-center xl:gap-x-[32px] lg:gap-4">
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="english"
              className="xl:p-1 lg:p-3.5"
              src={english}
            ></Image>
          </div>
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="french"
              className="xl:p-1 lg:p-3.5"
              src={french}
            ></Image>
          </div>
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="spanish"
              className="xl:p-1 lg:p-3.5"
              src={spanish}
            ></Image>
          </div>
        </div>
        <div className="flex xl:gap-x-[32px] lg:gap-4">
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="german"
              className="xl:p-1 lg:p-3.5"
              src={german}
            ></Image>
          </div>
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="mandarin"
              className="xl:p-1 lg:p-3.5"
              src={mandarin}
            ></Image>
          </div>
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="japanese"
              className="xl:p-1 lg:p-3.5"
              src={japanese}
            ></Image>
          </div>
          <div className="xl:w-[180px] lg:w-[120px] lg:h-[120px] xl:h-[180px] rounded-full border border-neutral-200 flex items-center justify-center">
            <Image
              alt="korean"
              className="xl:p-1 lg:p-3.5"
              src={korean}
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesWeOffer;
