import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Partnerships from "@/components/Partnerships";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import ConsultationSignup from "@/components/ConsultationSignup";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <TrustSection />
      <Partnerships />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <CtaSection />
      <ConsultationSignup />
      <Footer />
    </main>
  );
}
