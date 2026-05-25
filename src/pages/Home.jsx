import PageMeta from "../components/common/PageMeta";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import AboutPreview from "../components/home/AboutPreview";
import ServicesStrip from "../components/home/ServicesStrip";
import FeaturedMachines from "../components/home/FeaturedMachines";
import ProcessSteps from "../components/home/ProcessSteps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import VideoTeaser from "../components/home/VideoTeaser";
import CtaBand from "../components/home/CtaBand";
import { company } from "../content/company";
import { homeContent } from "../content/home";

function Home() {
  const showVideoTeaser = !homeContent.videos.showOnHome;

  return (
    <>
      <PageMeta
        title="Home"
        description={`${company.name} — ${company.tagline}`}
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesStrip />
      <FeaturedMachines />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      {showVideoTeaser && <VideoTeaser />}
      <CtaBand />
    </>
  );
}

export default Home;
