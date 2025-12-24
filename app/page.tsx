import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
       <Solutions />
      <WhyUs />
      <CallToAction />
    </main>
  );
}
