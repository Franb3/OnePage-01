import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Correo enviado con éxito");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>

        <div className="map-container">
          <h3>Ubicación del estudio</h3>
          <iframe
            title="Mapa del Estudio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.325612850622!2d-71.15645448311899!3d-31.62939246229439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968f2b0d08254de5%3A0xde9212dc431d708d!2sParque%20BERNARDO%20O&#39;HIGGINS!5e0!3m2!1ses!2scl!4v1748458416890!5m2!1ses!2scl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <small>
            <a
              href="https://maps.app.goo.gl/RhuEgwZ8TeF4gamz5"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              Ver mapa más grande
            </a>
          </small>
        </div>
      </div>
    </section>
  );
};
