import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Products />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
