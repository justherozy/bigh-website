import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import EditorialCarousel from "@/components/EditorialCarousel";
import JournalCarousel from "@/components/JournalCarousel";
import CategoryShowcase from "@/components/CategoryShowcase";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <EditorialCarousel />
      <JournalCarousel />
      <CategoryShowcase />
      <Products />
    </>
  );
}
