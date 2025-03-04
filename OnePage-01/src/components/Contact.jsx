export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo" required />
        <textarea name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="map">Ubicación del estudio</div>
    </section>
  );
};
