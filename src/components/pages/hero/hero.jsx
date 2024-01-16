import HeroContent from './hero-content';
import HeroImage from './hero-image';

const Hero = () => (
  <section className="grid grid-cols-50-50 grid-gap-sm">
    <HeroContent />
    <HeroImage />
  </section>
);

export default Hero;
