export default function Anuncios() {
  return (
    <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Anuncios Importantes</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: '#fff', padding: '20px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Reunión de Jóvenes</h3>
          <p>Este sábado a las 18:00 en el salón principal.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>Servicio Especial</h3>
          <p>Domingo a las 10:00, con predicación especial sobre esperanza.</p>
        </div>
      </div>
    </section>
  );
}
