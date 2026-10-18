import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Findings from "../../section/Findings";
import HackReplays from "../../section/HackReplays";
import About from "../../components/About";
import Footer from "../../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-background text-primary-text">
      <div className="mx-auto my-4 max-w-5xl overflow-hidden rounded-xl border border-border bg-surface sm:my-6">
        <Navbar />
        <Hero />
        <Findings />
        <HackReplays />
        <About />
        <Footer />
      </div>
    </main>
  );
}
export default Home;
