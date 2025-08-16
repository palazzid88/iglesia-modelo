export default function Ubicacion() {
  return (
    <section style={{ padding: '80px 20px', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Dónde Estamos</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Av. Ejemplo 123, Ciudad, País</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019249226711!2d-122.41941518468142!3d37.77492977975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3e4c2c45%3A0xa23e7b77f8f35d03!2sSan%20Francisco!5e0!3m2!1ses!2sar!4v1692117412345!5m2!1ses!2sar"
        width="600"
        height="450"
        style={{ border: 0, maxWidth: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
