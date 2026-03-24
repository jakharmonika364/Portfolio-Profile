import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import GitHub from './components/GitHub';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <CodingProfiles />
      <GitHub />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
