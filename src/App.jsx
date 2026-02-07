import Header from './components/Header/Header.jsx';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects.jsx';
import Hero from './components/Hero/Hero.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Impact from './components/Impact/Impact.jsx';
import HireAnywhere from './components/HireAnywhere/HireAnywhere.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import FinalCTA from './components/FinalCTA/FinalCTA.jsx';

export default function App() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Impact />
        <HireAnywhere />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
