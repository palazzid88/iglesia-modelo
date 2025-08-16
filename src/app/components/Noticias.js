export default function Noticias() {
  // Noticias de ejemplo
  const noticias = [
    {
      titulo: 'Visita de hermanos de Corrientes',
      descripcion: 'El día jueves 14 recibimos la visita de los hermanos de Corrientes. Fue un momento de alegría y confraternidad.',
      imagen: '/images/visita_corrientes.jpg', // Poné una imagen en /public/images/
    },
    {
      titulo: 'Concierto especial de alabanza',
      descripcion: 'Este domingo tendremos un concierto especial de alabanza en el salón principal a las 18:00 hs.',
      imagen: '/images/concierto.jpg',
    },
    {
      titulo: 'Taller de jóvenes',
      descripcion: 'Se realizó un taller para jóvenes sobre liderazgo y valores cristianos, con gran participación.',
      imagen: '/images/taller_jovenes.jpg',
    },
  ];

  return (
    <section style={{ padding: '80px 20px', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Noticias</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {noticias.map((noticia, index) => (
          <div
            key={index}
            style={{
              background: '#f9f9f9',
              padding: '20px',
              width: '300px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            }}
          >
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', marginBottom: '15px' }}
            />
            <h3 style={{ marginBottom: '10px' }}>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
