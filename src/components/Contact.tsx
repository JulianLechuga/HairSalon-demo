import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contacto y Reservas</h2>
        
        <div className="contact-grid">
          {/* Reservation Form */}
          <div className="booking-container bg-panel" id="booking">
            <h3 className="panel-title">Reserva tu Cita</h3>
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" placeholder="Tu teléfono" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Servicio</label>
                <select id="service" required>
                  <option value="">Selecciona un servicio</option>
                  <option value="corte">Corte de Pelo</option>
                  <option value="color">Coloración</option>
                  <option value="peinado">Peinado</option>
                  <option value="keratina">Tratamiento de Keratina</option>
                  <option value="barba">Arreglo de Barba</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Fecha Deseada</label>
                <input type="date" id="date" required />
              </div>
              <button type="submit" className="btn-primary w-100">Solicitar Cita</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="info-container">
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4>Ubicación</h4>
                <p>Calle Uría 45, 33003 Oviedo, Asturias</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h4>Teléfono | WhatsApp</h4>
                <p>+34 600 123 456</p>
                <p>985 000 000</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>info@estilovipoviedo.com</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" size={24} />
              <div>
                <h4>Horario</h4>
                <p>Lunes - Viernes: 09:30 - 20:00</p>
                <p>Sábados: 09:30 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maps iframe */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.427671239851!2d-5.852391023772097!3d43.36427387063529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368c9c0c8ed669%3A0x6bbaec43b9d0b001!2sC.%20Ur%C3%ADa%2C%20Oviedo%2C%20Asturias!5e0!3m2!1ses!2ses!4v1709400000000!5m2!1ses!2ses" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localización en Oviedo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
