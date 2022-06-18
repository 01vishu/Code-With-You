import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Support } from "./components/Support";
import { AllinOne } from "./components/AllinOne";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Footer />
    </>
  );
}

export default App;
