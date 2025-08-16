export default function Ministerios() {
  return (
    <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Nuestros Ministerios</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: '#fff', padding: '20px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Juventud</h3>
          <p>Actividades y encuentros para jóvenes de la comunidad.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Familias</h3>
          <p>Programas de apoyo y crecimiento para toda la familia.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Educación</h3>
          <p>Clases y talleres para el desarrollo espiritual y personal.</p>
        </div>
      </div>
    </section>
  );
}
