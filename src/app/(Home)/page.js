import CoursesWeOffer from "@/Components/HomeComp/CoursesWeOffer";
import HomeBanner from "@/Components/HomeComp/HomeBanner";
import Newsletter from "@/Components/HomeComp/Newsletter";
import WhyShould from "@/Components/HomeComp/WhyShould";
import Experiment from "@/Utilities/Experiment";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Newsletter />
      <Experiment />
      <WhyShould />
      <CoursesWeOffer />
    </div>
  );
}
