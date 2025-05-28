export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Correo" required />
          <textarea name="message" placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>

        <div className="map-container">
          <h3>Ubicación del estudio</h3>
          <iframe
            title="Mapa del Estudio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.325612850622!2d-71.15645448311899!3d-31.62939246229439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968f2b0d08254de5%3A0xde9212dc431d708d!2sParque%20BERNARDO%20O&#39;HIGGINS!5e0!3m2!1ses!2scl!4v1748458416890!5m2!1ses!2scl"
          ></iframe>
          <small>
            <a
              href="https://maps.app.goo.gl/RhuEgwZ8TeF4gamz5"
              target="_blank"
              rel="noopener noreferrer"
              class="map-button"
            >
              Ver mapa más grande
            </a>
          </small>
        </div>
      </div>
    </section>
  );
};
