import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Interior de la peluquería" 
            loading="lazy"
          />
          <div className="experience-badge">
            <span className="years">15+</span>
            <span className="text">Años de<br/>Experiencia</span>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="about-text">
            Ubicados en el centro de Oviedo, <strong>Estilo VIP</strong> nació con la visión de elevar 
            el estándar de la peluquería y barbería. Combinamos técnicas clásicas con las 
            últimas tendencias para ofrecerte un servicio excepcional.
          </p>
          <p className="about-text">
            Nuestro equipo está compuesto por profesionales apasionados que se mantienen 
            en constante formación. Creemos que cada cliente es único, y por ello nos 
            dedicamos a escuchar y entender tus necesidades para lograr el look perfecto 
            que refleje tu personalidad.
          </p>
          
          <div className="team-stats">
            <div className="stat">
              <h4 className="stat-number">2500+</h4>
              <p className="stat-label">Clientes Felices</p>
            </div>
            <div className="stat">
              <h4 className="stat-number">4</h4>
              <p className="stat-label">Estilistas Expertos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
