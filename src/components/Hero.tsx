import { Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">El Arte de tu Cabello</h1>
        <p className="hero-subtitle">
          Cortes con precisión, coloración experta y estilo inigualable en el corazón de Oviedo.
        </p>
        <div className="hero-cta">
          <a href="#booking" className="btn-primary flex-center">
            <Calendar className="icon-left" size={20} />
            Reserva tu cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
