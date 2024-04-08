import CefrLevels from "@/Components/HomeComp/CefrLevels";
import CoursesWeOffer from "@/Components/HomeComp/CoursesWeOffer";
import FluencyCarrerCulture from "@/Components/HomeComp/FluencyCarrerCulture";
import HomeBanner from "@/Components/HomeComp/HomeBanner";
import Newsletter from "@/Components/HomeComp/Newsletter";
import ProficiencyExams from "@/Components/HomeComp/ProficiencyExams";
import WhyShould from "@/Components/HomeComp/WhyShould";
import States from "@/Shared/States";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import UpcomingBatches from "@/Shared/UpcomingBatches";
import Experiment from "@/Utilities/Experiment";

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
      <ProficiencyExams />
      <FluencyCarrerCulture />

      <StudentsTestomony />
      <SubscribeToOur />

      {/* here used shared components are : studentsTestomony, subscribeToOur, upcomingBatches */}
    </section>
  );
}
