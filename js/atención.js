function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    pais: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Gracias por contactarnos, " + formData.name + "!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Formulario de Contacto */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Atención al cliente las 24 horas del día
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                
                >
                  Whatsapp:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-vertical"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="pais"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  País:
                </label>
                <select
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="peru">Perú</option>
                  <option value="colombia">Colombia</option>
                  <option value="mexico">México</option>
                  <option value="argentina">Argentina</option>
                </select>
              </div>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Teléfono:</span> +51 123 456 789
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Dirección:</span> Av. Principal
                  123, La Molina, Lima, Perú
                </p>
              </div>

              {/* Redes Sociales */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Síguenos en:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Ubicación
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.1234567890123!2d-76.12345678901234!3d-9.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890123456%3A0x1234567890123456!2sAv.%20Principal%20123%2C%20La%20Molina%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1sen!2sus!4v1612345678901"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ContactForm />, document.getElementById("atencion-content"));
