export default function Obreros() {
  // Equipo de ejemplo
  const equipo = [
    {
      nombre: 'Pastor Juan Pérez',
      rol: 'Pastor Principal',
      imagen: '/images/pastor_juan.jpg',
    },
    {
      nombre: 'María González',
      rol: 'Líder de Jóvenes',
      imagen: '/images/maria.jpg',
    },
    {
      nombre: 'Carlos López',
      rol: 'Maestro de Escuela Dominical',
      imagen: '/images/carlos.jpg',
    },
  ];

  return (
    <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Conoce a Nuestros Obreros</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {equipo.map((miembro, index) => (
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
            <img
              src={miembro.imagen}
              alt={miembro.nombre}
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px', marginBottom: '15px' }}
            />
            <h3 style={{ marginBottom: '5px' }}>{miembro.nombre}</h3>
            <p style={{ fontStyle: 'italic' }}>{miembro.rol}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
