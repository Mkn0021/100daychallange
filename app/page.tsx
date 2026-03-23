import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}
