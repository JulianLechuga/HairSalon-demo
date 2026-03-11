import { Scissors, Instagram, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo d-flex">
            <Scissors className="logo-icon" size={24} />
            <span className="logo-text">Estilo VIP</span>
          </div>
          <p className="footer-desc">
            Redefiniendo el cuidado del cabello en Oviedo. Donde el estilo clásico 
            se encuentra con la innovación moderna.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://wa.me/34600123456" aria-label="WhatsApp" className="whatsapp"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#gallery">Galería</a></li>
            <li><a href="#about">Nosotros</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Aviso Legal</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Estilo VIP Peluquería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
