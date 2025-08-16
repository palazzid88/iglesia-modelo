export default function Eventos() {
  // Eventos de ejemplo
  const eventos = [
    { fecha: 'Jueves 14', titulo: 'Reunión de Jóvenes', lugar: 'Salón principal' },
    { fecha: 'Domingo 17', titulo: 'Servicio Especial', lugar: 'Iglesia central' },
    { fecha: 'Miércoles 20', titulo: 'Taller de Liderazgo', lugar: 'Sala de conferencias' },
  ];

  return (
    <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Eventos Próximos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {eventos.map((evento, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '20px',
              width: '250px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ marginBottom: '10px' }}>{evento.titulo}</h3>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
