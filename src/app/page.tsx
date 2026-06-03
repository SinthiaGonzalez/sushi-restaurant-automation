import { Hero } from "@/features/home/components/Hero";
import { AboutSection } from "@/features/home/components/AboutSection";
import { CategoriesSection } from "@/features/menu/components/CategoriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CategoriesSection />
    </>
  );
}
