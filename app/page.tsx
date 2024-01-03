import Services from '@/components/Services/Services';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';

const HomePage = () => (
  <div className="flex flex-col gap-y-16">
    <Hero />
    <Services />
    <Contact />
  </div>
);

export default HomePage;
