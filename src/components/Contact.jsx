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
            title="Mapa del estudio"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1397%2C19.4295%2C-99.1277%2C19.4355&layer=mapnik&marker=19.4326%2C-99.1332"
          ></iframe>
          <small>
            <a
              href="https://www.openstreetmap.org/?mlat=19.4326&mlon=-99.1332#map=17/19.4326/-99.1332"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mapa más grande
            </a>
          </small>
        </div>
      </div>
    </section>
  );
};
