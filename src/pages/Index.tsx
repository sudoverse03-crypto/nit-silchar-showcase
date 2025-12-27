import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Theme from "@/components/Theme";
import Speakers from "@/components/Speakers";
import PastEditions from "@/components/PastEditions";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Theme />
        <Speakers />
        <PastEditions />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
