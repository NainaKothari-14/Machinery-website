import PageMeta from "../components/common/PageMeta";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import AboutPreview from "../components/home/AboutPreview";
import WhatWeDo from "../components/home/WhatWeDo";
import FeaturedMachines from "../components/home/FeaturedMachines";
import MachinesInOperation from "../components/home/MachinesInOperation";
import WhyChooseUsCards from "../components/home/WhyChooseUsCards";
import CtaBand from "../components/home/CtaBand";
import { company } from "../content/company";

function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description={`${company.name} — ${company.tagline}. ${company.city}, Maharashtra.`}
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <WhatWeDo />
      <FeaturedMachines />
      <MachinesInOperation />
      <WhyChooseUsCards />
      <CtaBand />
    </>
  );
}

export default Home;
