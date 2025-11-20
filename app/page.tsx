import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutUs />
    <OurServices />
    <OurProjects />
    </>
  )
}