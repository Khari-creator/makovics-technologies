import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/ServicesSection";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import CallToAction from "@/components/sections/CallToAction";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "Digital Solutions & Software Development",
  description:
    "We build scalable software, automation systems, POS solutions, and enterprise platforms for growing businesses.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Solutions />
      <WhyUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

