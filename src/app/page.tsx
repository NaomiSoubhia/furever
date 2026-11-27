import AdoptedAnimals from "@/components/home/AdoptedAnimals";
import AdoptWithUs from "@/components/home/AdoptWithUs";
import HeroSection from "@/components/home/HeroSection";
import LatestAdoptions from "@/components/home/LatestAdoptions";
import FrontendLayout from "@/components/navbar/layouts/FrontendLayout";

export default function Home() {
  return (
  <FrontendLayout>
    <HeroSection/>
    <LatestAdoptions/>
    <AdoptedAnimals/>
    <AdoptWithUs/>
  </FrontendLayout>
  );
}
