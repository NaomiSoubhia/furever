import HeroSection from "@/components/home/HeroSection";
import LatestAdoptions from "@/components/LatestAdoptions";
import FrontendLayout from "@/components/navbar/layouts/FrontendLayout";

export default function Home() {
  return (
  <FrontendLayout>
    <HeroSection/>
    <LatestAdoptions/>
  </FrontendLayout>
  );
}
