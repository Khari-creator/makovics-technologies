import AboutIntro from "@/components/sections/AboutIntro";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = {
  title: "About Us | Makovics Technologies",
  description:
    "Learn more about Makovics Technologies, our mission, values, and approach to building scalable digital solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntro />
      <CallToAction />
    </main>
  );
}
