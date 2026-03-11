import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Laura González',
    text: 'Increíble servicio. Captaron exactamente la idea del corte que quería. El ambiente es relajante y el trato inmejorable.',
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    text: 'La mejor barbería en Oviedo. Cuidan cada detalle y te hacen sentir como en casa. 100% recomendable.',
  },
  {
    id: 3,
    name: 'Sofía Álvarez',
    text: 'He probado la coloración y el resultado es espectacular. El pelo se nota sano y brillante. ¡Volveré seguro!',
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Lo Que Dicen De Nosotros</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
