import PageMeta from "../components/common/PageMeta";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import AboutPreview from "../components/home/AboutPreview";
import ServicesStrip from "../components/home/ServicesStrip";
import FeaturedMachines from "../components/home/FeaturedMachines";
import ProcessSteps from "../components/home/ProcessSteps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import DemoVideos from "../components/home/DemoVideos";
import CtaBand from "../components/home/CtaBand";
import { companyInfo } from "../data/companyInfo";

function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description={`${companyInfo.name} — ${companyInfo.tagline}`}
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesStrip />
      <FeaturedMachines />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      <DemoVideos />
      <CtaBand />
    </>
  );
}

export default Home;
