import Hero from "@/components/Hero";
import EditorialCarousel from "@/components/EditorialCarousel";
import CategoryShowcase from "@/components/CategoryShowcase";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialCarousel />
      <CategoryShowcase />
      <Products />
    </>
  );
}
