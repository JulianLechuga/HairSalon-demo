import { Scissors, Palette, Sparkles, Wind, Users } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Corte de Pelo',
    description: 'Corte personalizado adaptado a tus facciones y estilo de vida.',
    price: 'Desde 18€',
    icon: <Scissors size={32} className="service-icon" />,
  },
  {
    id: 2,
    title: 'Coloración',
    description: 'Tintes, mechas balayage y tratamientos de color de alta calidad.',
    price: 'Desde 45€',
    icon: <Palette size={32} className="service-icon" />,
  },
  {
    id: 3,
    title: 'Peinados',
    description: 'Peinados para eventos especiales, bodas o simplemente porque sí.',
    price: 'Desde 30€',
    icon: <Wind size={32} className="service-icon" />,
  },
  {
    id: 4,
    title: 'Tratamiento de Keratina',
    description: 'Alisado y nutrición profunda para un cabello sin encrespamiento.',
    price: 'Desde 90€',
    icon: <Sparkles size={32} className="service-icon" />,
  },
  {
    id: 5,
    title: 'Arreglo de Barba',
    description: 'Diseño, recorte y ritual de toalla caliente para caballeros.',
    price: 'Desde 15€',
    icon: <Users size={32} className="service-icon" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
