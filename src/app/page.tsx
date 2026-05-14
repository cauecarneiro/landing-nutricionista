import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Method from "@/components/Method";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Method />
        <Gallery />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
