import CefrLevels from "@/Components/HomeComp/CefrLevels";
import CoursesWeOffer from "@/Components/HomeComp/CoursesWeOffer";
import HomeBanner from "@/Components/HomeComp/HomeBanner";
import Newsletter from "@/Components/HomeComp/Newsletter";
import WhyShould from "@/Components/HomeComp/WhyShould";
import States from "@/Shared/States";
import UpcomingBatches from "@/Shared/UpcomingBatches";
import Experiment from "@/Utilities/Experiment";

import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HomeBanner />
      <Newsletter />
      <Experiment />
      <WhyShould />
      <CoursesWeOffer />
      <UpcomingBatches />
      <CefrLevels />
    </section>
  );
}
